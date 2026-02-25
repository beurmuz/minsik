# SIK-K

뉴스, 음원 차트, 페스티벌 일정 등 SIK-K 관련 정보를 한곳에서 볼 수 있는 웹 사이트입니다.

- **데모**: [https://sik-k.netlify.app/](https://sik-k.netlify.app/)

---

## 시작하기

### 요구 사항

- **Node.js** 22.x (`.nvmrc` 기준, `nvm use` 권장)
- **npm** 9.x 이상

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/beurmuz/minsik.git
cd minsik

# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm start
```

### 빌드

```bash
npm run build
```

- 빌드 후 `generate-sitemap`이 자동 실행됩니다.
- `react-hydratable`로 pre-render 후 `build/`에 정적 파일이 생성됩니다.

### 기타 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm test` | 테스트 실행 |
| `npm run generate-sitemap` | 사이트맵 생성 |
| `npm run analyze` | 번들 크기 분석 (source-map-explorer) |

---

## 주요 기능

| 페이지 | 경로 | 설명 |
|--------|------|------|
| **홈** | `/` | 메인 랜딩, SIK-K 소개 링크 |
| **소개** | `/intro` | SIK-K 소개 및 히스토리 |
| **뉴스** | `/news` | 최신 뉴스/기사 목록 (크롤링 데이터) |
| **곡** | `/songs` | 음원 차트 (Chart.js) |

- 반응형 레이아웃, 메뉴, 스크롤 시 상단 이동 버튼
- `react-helmet-async` 기반 메타/OG 태그, SEO
- Netlify 배포 (`_redirects`로 SPA 라우팅 처리)

---

## 프로젝트 구조

```
minsik/
├── public/           # 정적 파일 (favicon, manifest, meta 이미지, _redirects)
├── src/
│   ├── assets/       # 이미지, history.json 등
│   ├── components/   # Header, Footer, Menu, HistoryBox, SongChart, YouTubeVideo 등
│   ├── crawler/      # Python 크롤러 (뉴스, 곡, 페스티벌, 참여곡)
│   ├── crawlingData/ # 크롤링 결과 JSON
│   ├── pages/        # Home, Intro, News, Songs, NotFound
│   ├── routes/       # router.jsx (React Router)
│   ├── SEO/         # sitemap 생성, MetadataTemplate
│   ├── shared/       # axios, layout, store (Zustand)
│   └── utils/        # date 등 유틸
├── .nvmrc            # Node 22
└── tailwind.config.js
```

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| **프레임워크** | React 18, React Router v6 |
| **스타일** | Tailwind CSS |
| **상태** | Zustand |
| **차트** | Chart.js, react-chartjs-2 |
| **HTTP** | Axios |
| **SEO** | react-helmet-async, sitemap 생성, react-hydratable (pre-render) |
| **배포** | Netlify |
| **기타** | Python 크롤러 (뉴스/곡/페스티벌/참여곡) |

---