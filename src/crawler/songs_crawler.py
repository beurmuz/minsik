import os
import json
import requests
from bs4 import BeautifulSoup

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Whale/3.21.192.18"
}

pageNums = [1, 51, 101, 151]
songsData = []
songsId = []

# 저장 경로
save_path = "src/crawlingData/songs_data.json"
backup_path = "src/crawlingData/songs_data_backup.json"

try:
    for j in pageNums:
        url = f"https://www.melon.com/artist/songPaging.htm?startIndex={j}&pageSize=50&listType=A&orderBy=ISSUE_DATE&artistId=786648"
        res = requests.get(url, headers=headers, timeout=5)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, "html.parser")
        totalSongs = soup.select("table > tbody > tr")

        for m in totalSongs:
            try:
                songId = m.select_one("input.input_check")["value"]
                songsId.append(songId)
                songsData.append(
                    {
                        "no": m.select_one("td.no > div.wrap").text,
                        "songId": songId,
                        "title": m.select_one("a.fc_gray").text,
                        "artists": m.select_one("span.checkEllipsis").text,
                        "ablum": m.select("div.ellipsis")[2].text.strip(),
                    }
                )
            except Exception:
                continue

    # 곡 상세정보 가져오기
    for i in range(len(songsData)):
        url = f"https://www.melon.com/song/detail.htm?songId={songsId[i]}"
        song = requests.get(url, headers=headers, timeout=5)
        song.raise_for_status()
        songHtml = BeautifulSoup(song.text, "html.parser")
        info = songHtml.find("div", attrs={"id": "conts"})
        meta = info.find("dl", attrs={"class": "list"})
        release = meta.select("dd")[1].text
        imgSource = info.find("img", attrs={"width": "282"})["src"]

        songsData[i]["release"] = release
        songsData[i]["imgSource"] = imgSource

except Exception as e:
    songsData = []

# 크롤링 실패 or 결과 없음 → 백업 데이터로 대체
if not songsData:
    if os.path.exists(backup_path):
        with open(backup_path, "r", encoding="utf-8-sig") as backup_file:
            songsData = json.load(backup_file)
    else:
        songsData = []

# 최종 저장 및 백업
if songsData:
    with open(save_path, "w", encoding="utf-8-sig") as f:
        json.dump(songsData, f, ensure_ascii=False, indent=4)

    with open(backup_path, "w", encoding="utf-8-sig") as backup:
        json.dump(songsData, backup, ensure_ascii=False, indent=4)
