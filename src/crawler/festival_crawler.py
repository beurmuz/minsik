# 크롤링시 필요한 라이브러리 import
from bs4 import BeautifulSoup
import requests
import csv
import json

# ConnectionError 방지용
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Whale/3.21.192.18"
}


url = "http://www.playdb.co.kr/artistdb/detail.asp?ManNo=42920"
festival = requests.get(url, headers=headers)
festivalHtml = BeautifulSoup(festival.text, "html.parser")
ptitleList = festivalHtml.select("td.ptitle > a")
timeList = festivalHtml.select("td.time")
imgList = festivalHtml.select("img.img_size4")

festivalData = []

for i in range(len(ptitleList)):
    festivalData.append(
        {
            "id": i,
            "title": ptitleList[i].text,
            "date": timeList[i].text,
            "link": ptitleList[i].attrs["href"],
            "imgUrl": imgList[i].attrs["src"],
        }
    )

# json 형식으로 만들기
with open("src/crawlingData/festival_data.json", "w", encoding="UTF-8-sig") as f_write:
    json.dump(festivalData, f_write, ensure_ascii=False, indent=4)
