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
    res.raise_for_status()  # 응답 오류(4xx, 5xx) 발생 시 예외 발생
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

    # 크롤링 성공 시 저장 + 백업
    with open(save_path, "w", encoding="utf-8-sig") as f:
        json.dump(newsData, f, ensure_ascii=False, indent=4)

    # 백업도 갱신
    with open(backup_path, "w", encoding="utf-8-sig") as backup:
        json.dump(newsData, backup, ensure_ascii=False, indent=4)

except Exception as e:
    if os.path.exists(backup_path):
        with open(backup_path, "r", encoding="utf-8-sig") as backup:
            backup_data = json.load(backup)

        with open(save_path, "w", encoding="utf-8-sig") as f:
            json.dump(backup_data, f, ensure_ascii=False, indent=4)
