import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const locationSections = [
  {
    img: section2Image1,
    titleText: "동탄·오산 세교를 함께 누리는<br />더블 생활권",
    contentText:
      "동탄신도시와 오산 세교신도시 사이에 위치한 북오산자이 드포레<br />두 생활권의 쇼핑·의료·교육·문화시설을 이용할 수 있습니다.",
  },
  {
    img: section2Image2,
    titleText: "수도권 주요 지역을 연결하는<br />광역 교통망",
    contentText:
      "수도권제2순환고속도로 북오산IC와 경부고속도로 동탄JC를 이용하고<br />1호선 오산대역에도 접근할 수 있는 교통환경을 갖췄습니다.",
  },
  {
    img: section2Image3,
    titleText: "생활을 더욱 편리하게 하는<br />풍부한 생활 인프라",
    contentText:
      "롯데백화점 동탄점과 트레이더스 홀세일 클럽 동탄점 등<br />동탄·오산 세교 생활권의 다양한 편의시설을 이용할 수 있습니다.",
  },
  {
    img: section2Image4,
    titleText: "자연과 일상이 어우러지는<br />쾌적한 주거환경",
    contentText:
      "필봉산과 오산천, 물향기수목원 등 자연환경을 가까이 누리고<br />내삼미2구역 내 근린공원과 소공원도 계획되어 있습니다.",
  },
  {
    img: section2Image5,
    titleText: "GS건설 자이가 완성하는<br />브랜드 프리미엄",
    contentText:
      "남향 위주의 판상형 배치와 다양한 조경·커뮤니티 계획을 통해<br />북오산자이 드포레만의 편리한 주거생활을 제안합니다.",
  },
  {
    img: section2Image6,
    titleText: "총 1,517세대<br />자이 브랜드 대단지",
    contentText:
      "지하 2층부터 지상 최고 29층, 총 11개동으로 조성되며<br />북오산자이 리버블시티와 총 2,792세대 브랜드타운을 형성할 예정입니다.",
  },
];
const LocationEnvironment1 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!zoomImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImage]);

  const openZoom = (src, alt) => {
    setZoomImage({ src, alt });
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
  <div>삼성 평택캠퍼스와 함께 성장하는</div>
  <div>고덕국제신도시 프리미엄 라이프</div>
  <div>북오산자이 드포레가 새로운 주거 가치를 완성합니다.</div>
</div>
      <figure className={styles.locationMapFrame}>
        <img
          src={page1}
          className={styles.image2}
          alt="북오산자이 드포레 입지환경과 생활권 안내 이미지"
        />
        <button
          type="button"
          className={styles.zoomButton}
          onClick={() =>
            openZoom(
              page1,
              "북오산자이 드포레 입지환경과 생활권 안내 이미지"
            )
          }
          aria-label="입지환경 이미지 크게 보기"
        >
          <FiSearch />
          <span>크게 보기</span>
        </button>
      </figure>

      <div className={styles.section2}>
        {locationSections.map((value) => (
          <LocationSectionBox
            key={value.titleText}
            image={value.img}
            title={value.titleText}
            text={value.contentText}
            onZoom={() =>
              openZoom(
                value.img,
                `북오산자이 드포레 ${value.titleText.replace(/<[^>]*>/g, " ")} 이미지`
              )
            }
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          본 홍보물의 내용과 이미지는 소비자의 이해를 돕기 위한 것으로, 개발 예정 및 교통,
          학교 계획 등에 관한 사항은 해당 기관의 자료를 토대로 제작되었습니다. 사업계획 및
          일정은 관계 기관과 사업 주체의 사정에 따라 변경될 수 있으며, 자세한 내용은
          입주자모집공고와 관계 기관의 최종 고시를 확인하시기 바랍니다.
        </div>
      </div>

      {zoomImage && (
        <div
          className={styles.zoomModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setZoomImage(null)}
        >
          <div className={styles.zoomModalInner} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.zoomClose}
              onClick={() => setZoomImage(null)}
              aria-label="확대 이미지 닫기"
            >
              <FiX />
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
