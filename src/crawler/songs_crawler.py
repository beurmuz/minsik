# 크롤링시 필요한 라이브러리 import
from bs4 import BeautifulSoup
import requests
import csv
import json

# ConnectionError 방지용
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Whale/3.21.192.18"
}
pageNums = [1, 51, 101, 151]
songsData = []
songsId = []

for j in pageNums:
    url = (
        "https://www.melon.com/artist/songPaging.htm?startIndex="
        + str(j)
        + "&pageSize=50&listType=A&orderBy=ISSUE_DATE&artistId=786648"
    )
    songs = requests.get(url, headers=headers)
    songsHtml = BeautifulSoup(songs.text, "html.parser")
    totalSongs = songsHtml.select("table > tbody > tr")

    for i in range(len(totalSongs)):
        m = totalSongs[i]
        try:
            songsId.append(m.select_one("input.input_check")["value"])
            songsData.append(
                {
                    "no": m.select_one("td.no > div.wrap").text,
                    "songId": m.select_one("input.input_check")["value"],
                    "title": m.select_one("a.fc_gray").text,
                    "artists": m.select_one("span.checkEllipsis").text,
                    "ablum": m.select("div.ellipsis")[2].text.strip(),
                }
            )
        except Exception as e:
            continue

# 곡 상세정보 가져오기
for i in range(0, len(songsData)):
    url = "https://www.melon.com/song/detail.htm?songId=" + str(songsId[i])
    song = requests.get(url, headers=headers)
    songHtml = BeautifulSoup(song.text, "html.parser")
    info = songHtml.find("div", attrs={"id": "conts"})
    meta = info.find("dl", attrs={"class": "list"})
    release = meta.select("dd")[1].text
    imgSource = info.find("img", attrs={"width": "282"})["src"]

    songsData[i]["release"] = release
    songsData[i]["imgSource"] = imgSource

# json 형식으로 만들기
with open("src/crawlingData/songs_data.json", "w", encoding="UTF-8-sig") as f_write:
    json.dump(songsData, f_write, ensure_ascii=False, indent=4)
