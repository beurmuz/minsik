import os
import json
import requests
from bs4 import BeautifulSoup

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Whale/3.21.192.18"
}

PAGE_SIZE = 50
START_INDEX = 1

# listType=F: 아티스트 참여곡
LIST_URL = "https://www.melon.com/artist/songPaging.htm"
DETAIL_URL = "https://www.melon.com/song/detail.htm?songId={songId}"

joinSongsData = []

# 저장 경로
save_path = "src/crawlingData/join_songs_data.json"
backup_path = "src/crawlingData/join_songs_data_backup.json"


def fetch_list_page(start_index: int):
    url = (
        f"{LIST_URL}?startIndex={start_index}&pageSize={PAGE_SIZE}"
        f"&listType=F&orderBy=ISSUE_DATE&artistId=786648"
    )
    res = requests.get(url, headers=headers, timeout=10)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, "html.parser")
    return soup.select("table > tbody > tr")


def parse_list_row(m):
    song_id = m.select_one("input.input_check")["value"]
    return {
        "no": m.select_one("td.no > div.wrap").text.strip(),
        "songId": song_id,
        "title": m.select_one("a.fc_gray").text.strip(),
        "artists": m.select_one("span.checkEllipsis").text.strip(),
        "album": m.select("div.ellipsis")[2].text.strip(),  # ablum -> album 키 수정
        "types": "J",
    }


def fetch_detail(song_id: str):
    url = DETAIL_URL.format(songId=song_id)
    song = requests.get(url, headers=headers, timeout=10)
    song.raise_for_status()
    song_html = BeautifulSoup(song.text, "html.parser")
    info = song_html.find("div", attrs={"id": "conts"})
    if not info:
        raise ValueError("detail page missing #conts")
    meta = info.find("dl", attrs={"class": "list"})
    if not meta:
        raise ValueError("detail page missing meta list")
    release = meta.select("dd")[1].text.strip()
    img_source = info.find("img", attrs={"width": "282"})["src"]
    return release, img_source


try:
    # 1) 리스트 페이지 자동 순회 (하드코딩 제거)
    start_index = START_INDEX
    seen_song_ids = set()
    
    while True:
        rows = fetch_list_page(start_index)
        if not rows:
            break

        for m in rows:
            try:
                item = parse_list_row(m)
                if item["songId"] in seen_song_ids:
                    continue
                seen_song_ids.add(item["songId"])
                joinSongsData.append(item)
            except Exception:
                continue

        if len(rows) < PAGE_SIZE:
            break
        start_index += PAGE_SIZE

    # 2) 상세 정보 추가 (상세 페이지 접근 가능한 곡만 안전하게 단축)
    finalJoinSongsData = []
    for item in joinSongsData:
        try:
            release, img_source = fetch_detail(item["songId"])
            item["release"] = release
            item["imgSource"] = img_source
            finalJoinSongsData.append(item)
        except Exception:
            # 상세 페이지 파싱 실패 시 예외 처리
            continue

    joinSongsData = finalJoinSongsData

except Exception as e:
    joinSongsData = []
    print(f"크롤링 중 에러가 발생했습니다: {e}")

# 크롤링 실패 또는 결과 없음 → 백업 데이터로 대체
if not joinSongsData:
    if os.path.exists(backup_path):
        with open(backup_path, "r", encoding="utf-8-sig") as backup_file:
            joinSongsData = json.load(backup_file)
    else:
        joinSongsData = []
        print("크롤링 결과가 없고, 백업 파일도 존재하지 않습니다.")

# 최종 저장 및 백업
if joinSongsData:
    with open(save_path, "w", encoding="utf-8-sig") as f:
        json.dump(joinSongsData, f, ensure_ascii=False, indent=4)

    with open(backup_path, "w", encoding="utf-8-sig") as backup:
        json.dump(joinSongsData, backup, ensure_ascii=False, indent=4)