# 크롤링시 필요한 라이브러리 import
from bs4 import BeautifulSoup
import requests
import csv
import json

# ConnectionError 방지용
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Whale/3.21.192.18"}


url = "https://www.melon.com/artist/song.htm?artistId=786648#params%5BlistType%5D=A&params%5BorderBy%5D=ISSUE_DATE&params%5BartistId%5D=786648&po=pageObj&startIndex=1"
songs = requests.get(url, headers=headers)
songsHtml = BeautifulSoup(songs.text,"html.parser")
totalSongs = songsHtml.select('table > tbody > tr')
songsData = []

for i in range(len(totalSongs)):
  m = totalSongs[i]
  songsData.append({
      "No": m.select_one('td.no > div.wrap').text,
      "title": m.select_one('a.fc_gray').text,
      "artists": m.select_one('span.checkEllipsis').text,
      "ablum": m.select('div.ellipsis')[2].text.strip()
  })

# json 형식으로 만들기
with open('src/crawlingData/songs_data.json', "w", encoding="UTF-8-sig") as f_write:
  json.dump(songsData, f_write, ensure_ascii=False, indent=4)