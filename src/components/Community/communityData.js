import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",

  title: "일상의 여유와 활력을 더하는 자이 단지설계",

  description:
    "북오산자이 드포레는 총 1,517세대 규모의 쾌적한 단지 배치와 다채로운 조경공간, 입주민의 건강·휴식·문화·학습을 고려한 클럽 자이안 커뮤니티를 계획하여 편리하고 여유로운 주거환경을 제공합니다.",

  backgroundImage: bgImage,

  banner: {
    image: bannerImage,
    alt: "북오산자이 드포레 1,517세대 단지 전경",
  },

  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",

      title: "남향 위주의 쾌적한 단지 배치",

      description:
        "북오산자이 드포레는 11개동을 남동향·남서향 위주의 판상형으로 배치하고, 동간거리와 입주민의 보행 동선을 고려한 단지설계를 통해 채광과 통풍이 원활한 주거환경을 계획했습니다.",

      image: layoutImage,
      alt: "북오산자이 드포레 11개동 단지 배치도",
    },

    {
      id: "complex-design",
      label: "단지 특화설계",

      title: "자이의 감성을 담은 조경 특화설계",

      description:
        "단지 중앙부의 중앙마당을 비롯해 엘리시안가든, 웰컴프라자, 자이펀그라운드와 주민운동시설 등 휴식과 여가를 위한 다양한 조경·편의공간을 계획했습니다.",

      image: designImage,
      alt: "북오산자이 드포레 중앙마당과 조경 특화설계",
    },

    {
      id: "community-space",
      label: "커뮤니티",

      title: "건강과 문화가 이어지는 클럽 자이안",

      description:
        "피트니스클럽, GX룸, 필라테스룸, 골프연습장, 사우나, 작은도서관, 카페테리아, 독서실과 미디어챔버 등 입주민의 운동·휴식·학습·교류를 위한 다양한 커뮤니티 시설을 계획했습니다.",

      image: communityImage,
      alt: "북오산자이 드포레 클럽 자이안 커뮤니티 시설",
    },
  ],
};