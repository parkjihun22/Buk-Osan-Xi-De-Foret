import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";



const projectData = [
  {
    label: "현장명",
    value: "북오산자이 드포레",
  },

  {
    label: "사업명",
    value: "내삼미2 도시개발구역 A2BL 공동주택",
  },

  {
    label: "대지위치",
    value: "경기도 오산시 내삼미동 288번지 일원",
  },

  {
    label: "규모",
    value:
      "지하 2층~지상 최고 29층, 총 11개동, 1,517세대 / 주차 총 2,269대",
  },

  {
    label: "주택형",
    value:
      "전용 59㎡ · 74㎡ · 84㎡ · 99㎡ · 124㎡P · 125㎡P",
  },

  {
    label: "사업주체",
    value:
      "한국투자부동산신탁㈜ / 시행위탁자 ㈜오앤티비홀딩스",
  },

  {
    label: "시공",
    value: "GS건설㈜",
  },
];



const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />
<div className={styles.textBox}>
  <div>동탄과 오산 세교를 잇는 북오산의 새로운 주거공간</div>
  <div>북오산자이 드포레, GS건설이 시공하는 총 1,517세대 자이 아파트</div>
</div>

<img className={styles.img3} src={page1} alt="북오산자이 드포레 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && (
					<img
						className={styles.tableImg}
						src={tableImage}
						alt="북오산자이 드포레 사업개요 표 이미지"
					/>
				)}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
