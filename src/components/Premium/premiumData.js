import premiumIcon1 from "../../assets/Main/section3-img1.png";
import premiumIcon2 from "../../assets/Main/section3-img2.png";
import premiumIcon3 from "../../assets/Main/section3-img3.png";
import premiumIcon4 from "../../assets/Main/section3-img4.png";

export const premiumData = {
  eyebrow: "GREAT PREMIUM",

  title: ["북오산자이 드포레", "프리미엄"],

  description:
    "북오산자이 드포레는 경기도 오산시 내삼미동 288번지 일원에 조성되는 총 1,517세대 규모의 자이 브랜드 아파트입니다. 동탄·오산 세교 생활권과 광역 교통망, 남향 위주의 판상형 설계, 다채로운 커뮤니티를 갖춘 새로운 주거환경을 만나보세요.",

  items: [
    {
      id: "premium-location",
      number: "01",
      icon: premiumIcon1,
      title: "동탄·오산 세교 더블 생활권",
      subtitle: "두 생활권의 인프라를 이용하는 입지",

      description:
        "동탄신도시와 오산 세교신도시의 쇼핑·의료·교육·문화시설을 이용할 수 있으며, 북오산IC와 오산대역을 중심으로 다양한 교통망에 접근할 수 있습니다.",

      link: "/BusinessGuide/intro",
      linkText: "사업안내 보기",
    },

    {
      id: "premium-reservation",
      number: "02",
      icon: premiumIcon2,
      title: "총 1,517세대 자이 대단지",
      subtitle: "내삼미2구역의 자이 브랜드타운",

      description:
        "북오산자이 드포레 1,517세대와 북오산자이 리버블시티 1,275세대가 함께 총 2,792세대 규모의 자이 브랜드타운을 형성할 예정입니다.",

      link: "/Promotion/Customer",
      linkText: "방문예약 보기",
    },

    {
      id: "premium-infra",
      number: "03",
      icon: premiumIcon3,
      title: "다양한 주택형과 단지설계",
      subtitle: "59㎡ · 74㎡ · 84㎡ · 99㎡ · 124㎡P · 125㎡P",

      description:
        "다양한 라이프스타일을 고려한 총 12개 주택형과 남동향·남서향 위주의 판상형 배치, 세대당 약 1.49대의 주차공간을 계획했습니다.",

      link: "/LocationEnvironment/intro",
      linkText: "입지환경 보기",
    },

    {
      id: "premium-brand",
      number: "04",
      icon: premiumIcon4,
      title: "GS건설 자이 브랜드",
      subtitle: "일상의 가치를 높이는 클럽 자이안",

      description:
        "GS건설 자이의 단지설계와 조경계획을 바탕으로 피트니스클럽, 골프연습장, 사우나, 작은도서관과 카페테리아 등 다양한 커뮤니티 시설을 계획했습니다.",

      link: "/LocationEnvironment/primium",
      linkText: "프리미엄 보기",
    },
  ],
};