import os
import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime
import re

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Whale/3.21.192.18"
}

url = "https://search.daum.net/nate?nil_suggest=btn&w=news&DA=STC&cluster=y&q=%EC%8B%9D%EC%BC%80%EC%9D%B4&p=1&sort=accuracy"
backup_path = "src/crawlingData/news_data_backup.json"
save_path = "src/crawlingData/news_data.json"

newsData = []

try:
    res = requests.get(url, headers=headers, timeout=10)
    res.raise_for_status()

    soup = BeautifulSoup(res.text, "html.parser")
    # 다음 뉴스 아이템 찾기 (상위 10개만)
    totalNews = soup.select("div[class*='item-bundle']")[:10]

    for i, m in enumerate(totalNews):
        try:
            # 제목 찾기
            title_elem = m.select_one("strong.tit-g, a.tit, strong")
            if not title_elem:
                continue
            title = title_elem.text.strip()

            # 링크 찾기
            link_elem = m.select_one("a[href*='v.daum.net']")
            link = link_elem.get("href", "") if link_elem else ""

            # 내용 찾기
            content_elem = m.select_one("p, div.desc, span.desc, div.item-content")
            content = content_elem.text.strip() if content_elem else ""

            # 날짜 찾기
            date_elem = m.select_one("span.txt_info, span.info, span.date")
            date = date_elem.text.strip() if date_elem else ""

            # 상대적 시간 표현을 실제 날짜로 변환
            if date:
                # "N시간전", "N분전" → 오늘 날짜
                # "N일전" → N일 전 날짜
                relative_time_pattern = re.compile(r"(\d+)(시간전|분전|일전)")
                match = relative_time_pattern.search(date)
                if match:
                    number = int(match.group(1))
                    unit = match.group(2)

                    today = datetime.now()
                    if unit == "일전":
                        # N일 전 날짜 계산
                        from datetime import timedelta

                        target_date = today - timedelta(days=number)
                        date = target_date.strftime("%Y.%m.%d")
                    else:
                        # "N시간전", "N분전"은 오늘 날짜로
                        date = today.strftime("%Y.%m.%d")

            # 언론사 찾기 (grandparent li 요소에서 찾기)
            parent = m.parent
            grandparent = parent.parent if parent else None
            media_elem = None
            if grandparent:
                media_elem = grandparent.select_one("a.item-writer")
            # grandparent에서 못 찾으면 현재 요소에서도 시도
            if not media_elem:
                media_elem = m.select_one("a.item-writer")
            media = media_elem.text.strip() if media_elem else "다음뉴스"

            if title:  # 제목이 있는 경우만 추가
                newsData.append(
                    {
                        "id": i,
                        "title": title,
                        "content": content,
                        "link": link,
                        "date": date,
                        "media": media,
                    }
                )
        except Exception as e:
            # 개별 아이템 처리 중 오류 발생 시 스킵
            continue

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
