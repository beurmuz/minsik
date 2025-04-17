import os
import json
import requests
from bs4 import BeautifulSoup

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Whale/3.21.192.18"
}

url = "https://search.naver.com/search.naver?where=news&sm=tab_pge&query=식케이&start=1"
backup_path = "src/crawlingData/news_data_backup.json"
save_path = "src/crawlingData/news_data.json"

newsData = []

try:
    res = requests.get(url, headers=headers, timeout=5)
    res.raise_for_status()

    soup = BeautifulSoup(res.text, "html.parser")
    totalNews = soup.select("div.news_area")

    for i, m in enumerate(totalNews):
        newsData.append(
            {
                "id": i,
                "title": m.select_one("a.news_tit").text,
                "content": m.select_one(
                    "div.dsc_wrap > a.api_txt_lines.dsc_txt_wrap"
                ).text,
                "link": m.select_one("a.news_tit")["href"],
                "date": m.select_one("span.info").text,
                "media": m.select_one("a.info.press").text,
            }
        )

except Exception as e:
    # 크롤링 중 오류 발생
    newsData = []

# 크롤링이 실패하거나 결과가 비어 있을 경우 → 백업 데이터로 대체
if not newsData:
    if os.path.exists(backup_path):
        # 백업데이터 사용
        with open(backup_path, "r", encoding="utf-8-sig") as backup_file:
            newsData = json.load(backup_file)
    else:
        newsData = []

# newsData가 존재할 경우 저장 + 백업 갱신
if newsData:
    with open(save_path, "w", encoding="utf-8-sig") as f:
        json.dump(newsData, f, ensure_ascii=False, indent=4)

    with open(backup_path, "w", encoding="utf-8-sig") as backup:
        json.dump(newsData, backup, ensure_ascii=False, indent=4)
