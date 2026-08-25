import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/SalesInfo/SalesInfoStampTax/page1.jpg";

const ComplexGuide1 = () => {
  const menuContents = [
    { title: "공급안내", url: "/BusinessGuide/documents" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
    // { title: "계약서류안내", url: "/SalesInfo/guide" },
    // { title: "청약방법안내", url: "/SalesInfo/SubscriptionGuide" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false);

  const { pathname } = useLocation();

  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />

      <FixIcon />

      <Bener title="인지세 납부 안내" />

      <MenuBar contents={menuContents} />

      <div className={styles.textBox}>
        <div>인지세 납부 기준을 확인하세요</div>
        <div>북오산자이 드포레 인지세 안내</div>
      </div>

      {/* 이미지 로드 완료 후 애니메이션 적용 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="북오산자이 드포레 인지세 납부 안내 이미지"
        onLoad={handleImageLoad}
      />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 안내 자료입니다. 인지세
          납부 대상과 금액 및 납부방법은 계약 전 최신 공식 안내를 반드시
          확인하시기 바랍니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;