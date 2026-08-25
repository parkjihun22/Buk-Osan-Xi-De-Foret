// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>현장명</strong>
          <span>북오산자이 드포레</span>
        </li>

        <li>
          <strong>대지위치</strong>
          <span>경기도 오산시 내삼미동 288번지 일원</span>
        </li>

        <li>
          <strong>단지규모</strong>
          <span>
            지하 2층 ~ 지상 최고 29층 / 총 11개동
          </span>
        </li>

        <li>
          <strong>세대수</strong>
          <span>
            총 1,517세대
          </span>
        </li>

        <li>
          <strong>주택형</strong>
          <span>전용 59㎡ · 74㎡ · 84㎡ · 99㎡ · 124㎡P · 125㎡P</span>
        </li>

        <li>
          <strong>주차대수</strong>
          <span>총 2,269대 / 세대당 약 1.49대</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="북오산자이 드포레 오산 내삼미2구역 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="북오산자이 드포레 동탄 세교 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            동탄·오산 세교 더블 생활권을 누리는
            <br />
            북오산자이 드포레 라이프
          </p>
        </div>

{/* 슬라이더 */}
<PremiumSlider />
</>
),
},
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "동탄·오산 세교 더블 생활권",
      desc:
        "동탄신도시와 오산 세교신도시의 생활 인프라<br/>쇼핑·의료·교육·문화시설을 이용할 수 있는 입지<br/>북오산자이 드포레의 편리한 주거환경",
    },
    {
      img: slide2,
      title: "사통팔달 광역 교통망",
      desc:
        "수도권제2순환고속도로 북오산IC 인접<br/>경부고속도로 동탄JC와 서오산JC 접근 가능<br/>1호선 오산대역을 이용할 수 있는 교통환경",
    },
    {
      img: slide3,
      title: "총 2,792세대 자이 브랜드타운",
      desc:
        "북오산자이 드포레 총 1,517세대<br/>북오산자이 리버블시티 1,275세대와 함께<br/>내삼미2구역에 조성되는 자이 브랜드타운",
    },
    {
      img: slide4,
      title: "학교용지를 품은 교육환경",
      desc:
        "내삼미2구역 내 초등학교 용지 계획<br/>인근 매홀중학교·매홀고등학교 교육환경<br/>오산대역과 동탄신도시 학원가 이용 가능",
    },
    {
      img: slide5,
      title: "자연과 함께하는 쾌적한 생활",
      desc:
        "인근 필봉산과 오산천의 자연환경<br/>내삼미2구역 내 근린공원·소공원 조성계획<br/>물향기수목원과 오산죽미령평화공원 이용 가능",
    },
    {
      img: slide6,
      title: "경기 남부 직주근접 생활권",
      desc:
        "삼성전자 화성·기흥캠퍼스 접근 가능<br/>동탄·세마·가장·진위 일반산업단지 인접<br/>경기 남부 주요 산업·업무지역을 잇는 입지",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
      <div className={styles.preTitle}>PYEONGTAEK GODEOK WOOMIRIN</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="북오산자이 드포레 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
