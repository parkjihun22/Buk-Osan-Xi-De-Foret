const SITE_URL = "https://www.hg-prugioriverfront.co.kr";

export const siteSeo = {
  siteName: "북오산자이 드포레",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultDescription:
    "북오산자이 드포레 분양정보 안내 홈페이지입니다. 경기도 오산시 내삼미동 288번지 일원에 조성되는 지하 2층~지상 최고 29층, 11개동, 총 1,517세대 규모의 자이 브랜드 아파트로, 전용 59㎡·74㎡·84㎡·99㎡·124㎡P·125㎡P 평면도, 분양가, 입지환경, 공급정보와 모델하우스 방문예약 정보를 확인하세요.",

  project: {
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "오산시",
    streetAddress: "내삼미동 288번지 일원",
    block: "오산 내삼미2 도시개발구역 A2BL",
    households: "총 1,517세대",
    scale: "지하 2층~지상 최고 29층 · 11개동 · 총 1,517세대",
    unitTypes: [
      "59A",
      "59B",
      "74A",
      "74B",
      "74C",
      "84A",
      "84B",
      "84C",
      "99A",
      "99B",
      "124P",
      "125P",
    ],
    brand: "XI",
    brands: [
      "북오산자이 드포레",
      "자이",
      "GS건설",
    ],
    developer: "㈜오앤티비홀딩스",
    contractor: "GS건설㈜",
    navigationSchemaName: "북오산자이 드포레 주요 메뉴",
  },

  keywords: [
    "북오산자이 드포레",
    "북오산자이 드포레 분양",
    "북오산자이 드포레 모델하우스",
    "북오산자이 드포레 견본주택",
    "오산 내삼미동 아파트",
    "북오산 자이 아파트",
    "모델하우스 방문예약",
  ],
};

export const seoNavigation = [
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      { name: "프리미엄", path: "/LocationEnvironment/primium" },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지배치도", path: "/ComplexGuide/intro" },
      { name: "호수배치도", path: "/ComplexGuide/detailintro" },
      { name: "커뮤니티", path: "/ComplexGuide/community" },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      { name: "공급안내", path: "/BusinessGuide/documents" },
      { name: "입주자모집공고", path: "/SalesInfo/announcement" },
      { name: "인지세납부안내", path: "/SalesInfo/stampTax" },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "59㎡", path: "/FloorPlan/59A" },
      { name: "74㎡", path: "/FloorPlan/59B" },
      { name: "84㎡", path: "/FloorPlan/84A" },
      { name: "99㎡", path: "/FloorPlan/84B" },
      { name: "E-모델하우스", path: "/FloorPlan/Emodel" },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Press",
    children: [
      { name: "언론보도", path: "/Promotion/Press" },
      { name: "관심고객등록", path: "/Promotion/Customer" },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "북오산자이 드포레 | 모델하우스·분양가·공급정보",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 북오산자이 드포레 1,517세대 사업개요",
    description:
      "북오산자이 드포레 사업안내입니다. 경기도 오산시 내삼미동 288번지 일원, 지하 2층~지상 최고 29층, 11개동, 총 1,517세대로 조성되는 민영 분양아파트의 사업개요와 주차대수, 사업주체 및 시공사를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 북오산자이 드포레 분양가·공급세대",
    description:
      "북오산자이 드포레 공급안내입니다. 총 1,517세대의 59A·59B·74A·74B·74C·84A·84B·84C·99A·99B·124P·125P 타입별 공급세대수, 전용면적, 공급면적과 분양가 정보를 확인하세요.",
    menu: "분양안내",
    priority: 0.9,
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title: "입주자모집공고 | 북오산자이 드포레 청약·계약조건",
    description:
      "2026년 6월 12일 공고된 북오산자이 드포레 입주자모집공고 안내입니다. 특별공급 720세대와 일반공급 797세대의 공급 대상, 주택형별 분양가, 청약 일정, 계약금·중도금·잔금 조건 및 유의사항을 확인하세요.",
    menu: "분양안내",
    priority: 0.9,
  }),

  stampTax: page({
    path: "/SalesInfo/stampTax",
    title: "인지세납부안내 | 북오산자이 드포레 계약 안내",
    description:
      "북오산자이 드포레 인지세납부안내 페이지입니다. 공급계약 체결과 관련된 인지세 납부 대상, 납부 기준, 납부방법과 계약 전 확인해야 할 주요 유의사항을 확인하세요.",
    menu: "분양안내",
    priority: 0.7,
    changefreq: "monthly",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 북오산자이 드포레 동탄·오산 세교 생활권",
    description:
      "북오산자이 드포레 입지환경 안내입니다. 동탄신도시와 오산 세교신도시의 생활 인프라, 북오산IC와 동탄JC, 오산대역, 교육환경, 생활편의시설, 필봉산과 오산천 등 주변 입지를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 북오산자이 드포레 자이 브랜드타운",
    description:
      "북오산자이 드포레 프리미엄 안내입니다. 총 1,517세대 자이 대단지와 북오산자이 리버블시티를 포함한 총 2,792세대 브랜드타운, 동탄·오산 세교 더블 생활권, 광역 교통망과 내삼미2구역 개발계획을 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 북오산자이 드포레 11개동 단지설계",
    description:
      "북오산자이 드포레 단지배치도 안내입니다. 총 11개동의 남동향·남서향 위주 판상형 배치와 중앙마당, 엘리시안가든, 웰컴프라자, 자이펀그라운드 및 주민운동시설의 위치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 북오산자이 드포레 동·호수안내",
    description:
      "북오산자이 드포레 호수배치도 안내입니다. 11개동의 동·호수 구성과 남동향·남서향 배치, 59A·59B·74A·74B·74C·84A·84B·84C·99A·99B·124P·125P 타입별 위치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 북오산자이 드포레 클럽 자이안",
    description:
      "북오산자이 드포레 커뮤니티 안내입니다. 피트니스클럽, GX룸, 필라테스룸, 골프연습장, 사우나, 작은도서관, 카페테리아, 독서실, 오픈스터디와 미디어챔버 등 클럽 자이안 시설계획을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan84: page({
    path: "/FloorPlan/59A",
    title: "59㎡ 평면도 | 북오산자이 드포레 59타입",
    description:
      "북오산자이 드포레 전용 59㎡ 평면도 안내입니다. 59A 149세대와 59B 84세대의 타입별 내부 구조, 수납공간, 공간 활용과 실거주 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan94: page({
    path: "/FloorPlan/59B",
    title: "74㎡ 평면도 | 북오산자이 드포레 74타입",
    description:
      "북오산자이 드포레 전용 74㎡ 평면도 안내입니다. 74A 196세대, 74B 28세대, 74C 83세대의 타입별 공간 구성, 수납계획과 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan101: page({
    path: "/FloorPlan/84A",
    title: "84㎡ 평면도 | 북오산자이 드포레 84타입",
    description:
      "북오산자이 드포레 전용 84㎡ 평면도 안내입니다. 84A 560세대, 84B 112세대, 84C 84세대의 타입별 내부 구조, 수납공간과 가족 중심 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan111: page({
    path: "/FloorPlan/84B",
    title: "99㎡ 평면도 | 북오산자이 드포레 99타입",
    description:
      "북오산자이 드포레 전용 99㎡ 평면도 안내입니다. 99A 163세대와 99B 55세대의 넓은 실내공간, 팬트리, 현관창고와 타입별 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 북오산자이 드포레 타입별 평면",
    description:
      "북오산자이 드포레 E-모델하우스입니다. 전용 59㎡·74㎡·84㎡·99㎡·124㎡P·125㎡P 주택형의 실내 구조와 공간 구성, 수납계획 및 생활 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 북오산자이 드포레 모델하우스 방문예약",
    description:
      "북오산자이 드포레 관심고객등록 페이지입니다. 현재 공급정보와 잔여세대, 분양가 상담, 모델하우스 위치, 방문 가능 일정과 주택형별 상담 안내를 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  press: page({
    path: "/Promotion/Press",
    title: "언론보도 | 북오산자이 드포레 분양소식",
    description:
      "북오산자이 드포레 언론보도 페이지입니다. 오산 내삼미동 총 1,517세대 자이 대단지, 동탄·오산 세교 생활권, 입지환경, 공급정보, 분양가와 모델하우스 방문예약 관련 보도자료 및 분양소식을 확인하세요.",
    menu: "홍보센터",
    image: "/img/og/main.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 북오산자이 드포레",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 북오산자이 드포레 홈페이지의 사업안내, 입지환경, 단지안내, 공급안내, 평면도, E-모델하우스, 언론보도 및 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

const normalizeSeoPath = (pathname = "/") => {
  let cleanPath = pathname || "/";

  try {
    if (/^https?:\/\//.test(cleanPath)) {
      cleanPath = new URL(cleanPath).pathname;
    }
  } catch {
    cleanPath = "/";
  }

  cleanPath = decodeURI(cleanPath)
    .split("?")[0]
    .split("#")[0]
    .replace(/\/$/, "");

  return cleanPath.toLowerCase() || "/";
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    normalizeSeoPath(value.path),
    key,
  ])
);

export const seoPageList = Object.values(seoPages).filter(
  (item) => item.robots !== "noindex, follow"
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteSeo.siteUrl}${normalizedPath}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const normalizedPath = normalizeSeoPath(pathname);
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/press")) return seoPages.press;
  if (normalizedPath.includes("/promotion/press")) return seoPages.press;
  if (normalizedPath.endsWith("/customer")) return seoPages.customer;
  if (normalizedPath.includes("/promotion/customer")) {
    return seoPages.customer;
  }

  return seoPages.notFound;
};