import unit01 from "../../assets/UnitplanBox/unit01.jpg";
import unit02 from "../../assets/UnitplanBox/unit02.jpg";
import unit03 from "../../assets/UnitplanBox/unit03.jpg";
import unit04 from "../../assets/UnitplanBox/unit04.jpg";
import unit05 from "../../assets/UnitplanBox/unit05.jpg";
import unit06 from "../../assets/FloorPlan/FloorPlan6/unit06.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",

  title: "북오산자이 드포레 타입안내",

  description:
    "북오산자이 드포레는 전용 59㎡·74㎡·84㎡·99㎡·124㎡P·125㎡P, 총 12개 주택형으로 구성됩니다. 타입별 평면과 공간 구성, 생활 동선을 비교하며 가족에게 적합한 주거공간을 확인해 보세요.",

  plans: [
    {
      id: "59A",
      type: "59A",
      name: "59A TYPE",
      summary:
        "전용 59.9928㎡, 총 149세대로 구성된 59A 타입의 평면과 공간 활용을 확인해 보세요.",

      image: unit01,
      alt: "북오산자이 드포레 59A 타입 평면도",

      link: "/FloorPlan/59A",
    },

    {
      id: "59B",
      type: "59B",
      name: "59B TYPE",
      summary:
        "전용 59.9984㎡, 총 84세대로 구성된 59B 타입의 평면과 생활 동선을 확인해 보세요.",

      image: unit02,
      alt: "북오산자이 드포레 59B 타입 평면도",

      link: "/FloorPlan/59B",
    },

    {
      id: "84A",
      type: "84A",
      name: "84A TYPE",
      summary:
        "전용 84.9121㎡, 총 560세대로 구성된 84A 타입의 평면과 수납공간을 확인해 보세요.",

      image: unit03,
      alt: "북오산자이 드포레 84A 타입 평면도",

      link: "/FloorPlan/84A",
    },

    {
      id: "84B",
      type: "84B",
      name: "84B TYPE",
      summary:
        "전용 84.9102㎡, 총 112세대로 구성된 84B 타입의 평면과 생활 동선을 확인해 보세요.",

      image: unit04,
      alt: "북오산자이 드포레 84B 타입 평면도",

      link: "/FloorPlan/84B",
    },

    {
      id: "99",
      type: "99",
      name: "99 TYPE",
      summary:
        "전용 99.9102㎡, 총 112세대로 구성된 99 타입의 평면과 생활 동선을 확인해 보세요.",

      image: unit05,
      alt: "북오산자이 드포레 84B 타입 평면도",

      link: "/FloorPlan/114A",
    },
  ],
};