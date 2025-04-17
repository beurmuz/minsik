import os
import json
import requests
from bs4 import BeautifulSoup

# ✅ 사용자 에이전트 설정 (ConnectionError 방지용)
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Whale/3.21.192.18"
}

url = "http://www.playdb.co.kr/artistdb/detail.asp?ManNo=42920"
festivalData = []

# 저장 경로
save_path = "src/crawlingData/festival_data.json"
backup_path = "src/crawlingData/festival_data_backup.json"

try:
    res = requests.get(url, headers=headers, timeout=5)
    res.raise_for_status()

    soup = BeautifulSoup(res.text, "html.parser")
    ptitleList = soup.select("td.ptitle > a")
    timeList = soup.select("td.time")
    imgList = soup.select("img.img_size4")

    for i in range(len(ptitleList)):
        festivalData.append(
            {
                "id": i,
                "title": ptitleList[i].text,
                "date": timeList[i].text,
                "link": ptitleList[i]["href"],
                "imgUrl": imgList[i]["src"],
            }
        )

except Exception as e:
    festivalData = []

# 크롤링 실패 또는 결과가 없는 경우 → 백업 데이터로 대체
if not festivalData:
    if os.path.exists(backup_path):
        with open(backup_path, "r", encoding="utf-8-sig") as backup_file:
            festivalData = json.load(backup_file)
    else:
        festivalData = []

# 최종 저장 및 백업 갱신
if festivalData:
    with open(save_path, "w", encoding="utf-8-sig") as f:
        json.dump(festivalData, f, ensure_ascii=False, indent=4)

    with open(backup_path, "w", encoding="utf-8-sig") as backup:
        json.dump(festivalData, backup, ensure_ascii=False, indent=4)
