/* KDM TECH 메인 시안 — 인터랙션 */
(function () {
  // 1) 시공 사례
  // 데이터: data/cases.json 과 동일 (현재 홈페이지 사업분야 게시판 37건 재구성)
  var CASES = [
 {
  "id": "SE-040",
  "division": "장비 제작",
  "type": "반응기",
  "typeEn": "Reactor",
  "project": "S Project",
  "client": "삼성정밀화학",
  "clientEn": "Samsung Fine Chemical",
  "item": "듀플렉스 스테인리스 반응기",
  "itemEn": "Duplex Stainless Reactor",
  "material": "A240-S31803",
  "weight": "21 ton",
  "weightTon": 21.0,
  "dimension": "26T × ID 2,800 × 4,000L",
  "img": "img/cases/se-040.jpg",
  "imgRatio": 1.6474,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-039",
  "division": "장비 제작",
  "type": "반응기",
  "typeEn": "Reactor",
  "project": "H Project",
  "client": "한주",
  "clientEn": "Hanju Corporation",
  "item": "스테인리스 클래드 반응기",
  "itemEn": "C/S with S/S Clad Reactor",
  "material": "A516-70+316L",
  "weight": "32 ton",
  "weightTon": 32.0,
  "dimension": "(15+3)T × ID 5,500 × 12,000L",
  "img": "img/cases/se-039.jpg",
  "imgRatio": 1.6182,
  "imgOrientation": "landscape",
  "home": true,
  "homeOrder": 5
 },
 {
  "id": "SE-038",
  "division": "장비 제작",
  "type": "반응기",
  "typeEn": "Reactor",
  "project": "T Project",
  "client": "태광산업",
  "clientEn": "Taekwang Industrial",
  "item": "듀플렉스 스테인리스 반응기",
  "itemEn": "Duplex Stainless Reactor",
  "material": "A240-S31803",
  "weight": "21 ton",
  "weightTon": 21.0,
  "dimension": "26T × ID 2,400 × 4,300L",
  "img": "img/cases/se-038.jpg",
  "imgRatio": 1.6347,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-037",
  "division": "장비 제작",
  "type": "반응기",
  "typeEn": "Reactor",
  "project": "K Project",
  "client": "대한유화",
  "clientEn": "KOREA Petrochemical",
  "item": "탄소강 반응기",
  "itemEn": "C/S Reactor",
  "material": "A516-70",
  "weight": "50 ton",
  "weightTon": 50.0,
  "dimension": "51T × ID 2,700 × 8,400L",
  "img": "img/cases/se-037.jpg",
  "imgRatio": 1.6182,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-036",
  "division": "장비 제작",
  "type": "반응기",
  "typeEn": "Reactor",
  "project": "K Project",
  "client": "코리아PTG",
  "clientEn": "KOREA PTG",
  "item": "스테인리스 오버레이 반응기",
  "itemEn": "C/S with S/S Overlay Reactor",
  "material": "A516-70+304 Overlay",
  "weight": "7 ton",
  "weightTon": 7.0,
  "dimension": "10T × ID 1,200 × 4,000L",
  "img": "img/cases/se-036.jpg",
  "imgRatio": 1.6203,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-035",
  "division": "장비 제작",
  "type": "반응기",
  "typeEn": "Reactor",
  "project": "Y Project",
  "client": "용산화학",
  "clientEn": "Yongsan Chemicals",
  "item": "티타늄 클래드 반응기",
  "itemEn": "Ti-Clad Reactor",
  "material": "SA516-70+B265-1",
  "weight": "10 ton",
  "weightTon": 10.0,
  "dimension": "(15+3)T × ID 1,975 × 3,872L",
  "img": "img/cases/se-035.jpg",
  "imgRatio": 1.6223,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-034",
  "division": "장비 제작",
  "type": "컬럼·타워",
  "typeEn": "Column & Tower",
  "project": "EOG Project",
  "client": "토요엔지니어링",
  "clientEn": "TOYO Engineering",
  "item": "스테인리스 타워",
  "itemEn": "S/S Tower",
  "material": "SA240-316L",
  "weight": "48 ton",
  "weightTon": 48.0,
  "dimension": "25T × ID 2,200 × 24,100L",
  "img": "img/cases/se-034.jpg",
  "imgRatio": 1.6264,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-033",
  "division": "장비 제작",
  "type": "컬럼·타워",
  "typeEn": "Column & Tower",
  "project": "T Project",
  "client": "테크닙 인디아",
  "clientEn": "Technip India Limited",
  "item": "탄소강 타워",
  "itemEn": "C/S Tower",
  "material": "SA516-70",
  "weight": "32 ton",
  "weightTon": 32.0,
  "dimension": "18T × ID 1,800 × 24,500L",
  "img": "img/cases/se-033.jpg",
  "imgRatio": 1.6327,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-032",
  "division": "장비 제작",
  "type": "컬럼·타워",
  "typeEn": "Column & Tower",
  "project": "U Project",
  "client": "하니웰 UOP",
  "clientEn": "UOP A Honeywell",
  "item": "탄소강 컬럼",
  "itemEn": "C/S Column",
  "material": "A516-70",
  "weight": "70 ton",
  "weightTon": 70.0,
  "dimension": "25T × ID 2,000 × 52,000L",
  "img": "img/cases/se-032.jpg",
  "imgRatio": 1.6754,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-031",
  "division": "장비 제작",
  "type": "컬럼·타워",
  "typeEn": "Column & Tower",
  "project": "T Project",
  "client": "태광산업",
  "clientEn": "Taekwang Industrial",
  "item": "스테인리스 컬럼",
  "itemEn": "S/S Column",
  "material": "SS316L",
  "weight": "30 ton",
  "weightTon": 30.0,
  "dimension": "16T × ID 1,800 × 27,000L",
  "img": "img/cases/se-031.jpg",
  "imgRatio": 1.6645,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-030",
  "division": "장비 제작",
  "type": "컬럼·타워",
  "typeEn": "Column & Tower",
  "project": "S Project",
  "client": "삼성석유화학",
  "clientEn": "Samsung Petrochemical",
  "item": "스테인리스 컬럼",
  "itemEn": "S/S Column",
  "material": "SS316L",
  "weight": "48 ton",
  "weightTon": 48.0,
  "dimension": "25T × ID 2,200 × 24,200L",
  "img": "img/cases/se-030.jpg",
  "imgRatio": 1.6182,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-029",
  "division": "장비 제작",
  "type": "컬럼·타워",
  "typeEn": "Column & Tower",
  "project": "U Project",
  "client": "하니웰 UOP",
  "clientEn": "UOP A Honeywell",
  "item": "탄소강 컬럼",
  "itemEn": "C/S Column",
  "material": "A516-70",
  "weight": "32 ton",
  "weightTon": 32.0,
  "dimension": "18T × ID 1,800 × 24,500L",
  "img": "img/cases/se-029.jpg",
  "imgRatio": 1.6244,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-028",
  "division": "장비 제작",
  "type": "컬럼·타워",
  "typeEn": "Column & Tower",
  "project": "PX-4 Project",
  "client": "릴라이언스",
  "clientEn": "Reliance",
  "item": "탄소강 컬럼",
  "itemEn": "C/S Column",
  "material": "A516-70",
  "weight": "50 ton",
  "weightTon": 50.0,
  "dimension": "15T × ID 3,500 × 50,000L",
  "img": "img/cases/se-028.jpg",
  "imgRatio": 1.6368,
  "imgOrientation": "landscape",
  "home": true,
  "homeOrder": 4
 },
 {
  "id": "SE-027",
  "division": "장비 제작",
  "type": "컬럼·타워",
  "typeEn": "Column & Tower",
  "project": "P Project",
  "client": "포스코엔지니어링",
  "clientEn": "POSCO Engineering",
  "item": "탄소강 컬럼",
  "itemEn": "C/S Column",
  "material": "A51-70",
  "weight": "40 ton",
  "weightTon": 40.0,
  "dimension": "15T × ID 3,200 × 45,000L",
  "img": "img/cases/se-027.jpg",
  "imgRatio": 1.6223,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-026",
  "division": "장비 제작",
  "type": "컬럼·타워",
  "typeEn": "Column & Tower",
  "project": "H Project",
  "client": "한화케미칼",
  "clientEn": "Hanwha Chemical",
  "item": "스테인리스 컬럼",
  "itemEn": "S/S Column",
  "material": "SA240-316L",
  "weight": "45.5 ton",
  "weightTon": 45.5,
  "dimension": "12T × ID 3,200 × 18,410L",
  "img": "img/cases/se-026.jpg",
  "imgRatio": 1.6516,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-025",
  "division": "장비 제작",
  "type": "컬럼·타워",
  "typeEn": "Column & Tower",
  "project": "H Project",
  "client": "한화케미칼",
  "clientEn": "Hanwha Chemical",
  "item": "스테인리스 컬럼",
  "itemEn": "S/S Column",
  "material": "SA240-316L",
  "weight": "43 ton",
  "weightTon": 43.0,
  "dimension": "12T × ID 3,200 × 17,500L",
  "img": "img/cases/se-025.jpg",
  "imgRatio": 1.6306,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-024",
  "division": "장비 제작",
  "type": "컬럼·타워",
  "typeEn": "Column & Tower",
  "project": "S Project",
  "client": "삼성토탈",
  "clientEn": "Samsung Total",
  "item": "스테인리스 컬럼",
  "itemEn": "S/S Column",
  "material": "SA240-304L",
  "weight": "32 ton",
  "weightTon": 32.0,
  "dimension": "12T × ID 2,000 × 3,620L",
  "img": "img/cases/se-024.jpg",
  "imgRatio": 1.6776,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-023",
  "division": "장비 제작",
  "type": "컬럼·타워",
  "typeEn": "Column & Tower",
  "project": "S Project",
  "client": "하니웰 UOP",
  "clientEn": "UOP A Honeywell",
  "item": "탄소강 컬럼",
  "itemEn": "C/S Column",
  "material": "SA516-70",
  "weight": "48.5 ton",
  "weightTon": 48.5,
  "dimension": "17T × ID 3,800 × 48,000L",
  "img": "img/cases/se-023.jpg",
  "imgRatio": 1.6559,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-022",
  "division": "장비 제작",
  "type": "압력용기",
  "typeEn": "Pressure vessel",
  "project": "A2 Project",
  "client": "SK이노베이션",
  "clientEn": "SK Innovation",
  "item": "외부 코일형 탄소강 압력용기",
  "itemEn": "C/S Pressure Vessel with Outside Coil",
  "material": "A516-70",
  "weight": "25 ton",
  "weightTon": 25.0,
  "dimension": "20T × ID 3,800 × 8,500L",
  "img": "img/cases/se-022.jpg",
  "imgRatio": 1.6602,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-021",
  "division": "장비 제작",
  "type": "압력용기",
  "typeEn": "Pressure vessel",
  "project": "K Project",
  "client": "OEIC",
  "clientEn": "OEIC",
  "item": "대형 탄소강 압력용기",
  "itemEn": "C/S Pressure Vessel (Painted)",
  "material": "A516-70",
  "weight": "92 ton",
  "weightTon": 92.0,
  "dimension": "32T × ID 5,200 × 15,075L",
  "img": "img/cases/se-021.jpg",
  "imgRatio": 1.6452,
  "imgOrientation": "landscape",
  "home": true,
  "homeOrder": 3
 },
 {
  "id": "SE-020",
  "division": "장비 제작",
  "type": "압력용기",
  "typeEn": "Pressure vessel",
  "project": "S Project",
  "client": "SK이노베이션",
  "clientEn": "SK Innovation",
  "item": "외부 코일형 압력용기",
  "itemEn": "Pressure Vessel with Outside Coil",
  "material": "A516-70",
  "weight": "22 ton",
  "weightTon": 22.0,
  "dimension": "18T × ID 2,900 × 9,500L",
  "img": "img/cases/se-020.jpg",
  "imgRatio": 1.6223,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-019",
  "division": "장비 제작",
  "type": "압력용기",
  "typeEn": "Pressure vessel",
  "project": "J2 Project",
  "client": "한화케미칼",
  "clientEn": "Hanwha Chemical",
  "item": "클래드재 압력용기",
  "itemEn": "Clad Pressure Vessel",
  "material": "SA516-70+N2201",
  "weight": "7 ton",
  "weightTon": 7.0,
  "dimension": "19+3T × ID 1,650 × 2,582L",
  "img": "img/cases/se-019.jpg",
  "imgRatio": 1.641,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-018",
  "division": "장비 제작",
  "type": "압력용기",
  "typeEn": "Pressure vessel",
  "project": "A2 Project",
  "client": "한화케미칼",
  "clientEn": "Hanwha Chemical",
  "item": "스테인리스 압력용기",
  "itemEn": "S/S Pressure Vessel",
  "material": "SA240-316L",
  "weight": "18.5 ton",
  "weightTon": 18.5,
  "dimension": "16T × ID 2,800 × 4,500L",
  "img": "img/cases/se-018.jpg",
  "imgRatio": 1.6645,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-017",
  "division": "장비 제작",
  "type": "압력용기",
  "typeEn": "Pressure vessel",
  "project": "B2 Project",
  "client": "한화케미칼",
  "clientEn": "Hanwha Chemical",
  "item": "탄소강 압력용기",
  "itemEn": "C/S Pressure Vessel (Painted)",
  "material": "A516-70",
  "weight": "13 ton",
  "weightTon": 13.0,
  "dimension": "13T × ID 2,600 × 9,300L",
  "img": "img/cases/se-017.jpg",
  "imgRatio": 1.6162,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-016",
  "division": "장비 제작",
  "type": "압력용기",
  "typeEn": "Pressure vessel",
  "project": "U Project",
  "client": "한화케미칼",
  "clientEn": "Hanwha Chemical",
  "item": "듀플렉스 스테인리스 압력용기",
  "itemEn": "Duplex S/S Pressure Vessel",
  "material": "A240-S32205",
  "weight": "7.5 ton",
  "weightTon": 7.5,
  "dimension": "8T × ID 2,100 × 8,000L",
  "img": "img/cases/se-016.jpg",
  "imgRatio": 1.6389,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-015",
  "division": "장비 제작",
  "type": "열교환기",
  "typeEn": "Heat exchanger",
  "project": "P2 Project",
  "client": "삼성석유화학",
  "clientEn": "Samsung Petrochemical",
  "item": "고압 열교환기",
  "itemEn": "High Pressure Heat Exchanger",
  "material": "SS904L",
  "weight": "9 ton",
  "weightTon": 9.0,
  "dimension": "14T × ID 1,200 × 5,000L",
  "img": "img/cases/se-015.jpg",
  "imgRatio": 1.6306,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-014",
  "division": "장비 제작",
  "type": "열교환기",
  "typeEn": "Heat exchanger",
  "project": "S2 Project",
  "client": "삼성석유화학",
  "clientEn": "Samsung Petrochemical",
  "item": "티타늄 튜브 열교환기",
  "itemEn": "Heat Exchanger (Ti Tube)",
  "material": "SA516-70, SB338-2",
  "weight": "15 ton",
  "weightTon": 15.0,
  "dimension": "12T × ID 1,230 × 6,100L",
  "img": "img/cases/se-014.jpg",
  "imgRatio": 1.6223,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-013",
  "division": "장비 제작",
  "type": "열교환기",
  "typeEn": "Heat exchanger",
  "project": "KPIC ONE Project",
  "client": "GS건설",
  "clientEn": "GS Construction",
  "item": "캐슬형 열교환기",
  "itemEn": "Castle Type Heat Exchanger",
  "material": "A334-1",
  "weight": "101 ton",
  "weightTon": 101.0,
  "dimension": "20T × ID 2,950 × 12,000L",
  "img": "img/cases/se-013.jpg",
  "imgRatio": 1.6602,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-012",
  "division": "장비 제작",
  "type": "열교환기",
  "typeEn": "Heat exchanger",
  "project": "K Project",
  "client": "한주",
  "clientEn": "Hanju Corporation",
  "item": "증발 결정기 (동니켈 튜브)",
  "itemEn": "Evaporation Crystallizer (Cu-Ni)",
  "material": "C70600 (Cu-Ni)",
  "weight": "28 ton",
  "weightTon": 28.0,
  "dimension": "12T × ID 1,800 × 11,000L",
  "img": "img/cases/se-012.jpg",
  "imgRatio": 1.6306,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-011",
  "division": "장비 제작",
  "type": "열교환기",
  "typeEn": "Heat exchanger",
  "project": "S Project",
  "client": "SK종합화학",
  "clientEn": "SK Global Chemical",
  "item": "대형 오버레이 열교환기",
  "itemEn": "Heat Exchanger (S/S Overlay Channel)",
  "material": "SA516-70N+S5+SS304L",
  "weight": "107 ton",
  "weightTon": 107.0,
  "dimension": "74T × ID 2,150 × 10,728L",
  "img": "img/cases/se-011.jpg",
  "imgRatio": 1.6223,
  "imgOrientation": "landscape",
  "home": true,
  "homeOrder": 2
 },
 {
  "id": "SE-010",
  "division": "장비 제작",
  "type": "열교환기",
  "typeEn": "Heat exchanger",
  "project": "KPIC EOG Project",
  "client": "토요엔지니어링",
  "clientEn": "TOYO Engineering",
  "item": "3단 적층형 열교환기",
  "itemEn": "Three-stage Stacked Heat Exchanger",
  "material": "A240-304",
  "weight": "40 ton",
  "weightTon": 40.0,
  "dimension": "15T × ID 1,400 × 8,000L",
  "img": "img/cases/se-010.jpg",
  "imgRatio": 1.6285,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-009",
  "division": "장비 제작",
  "type": "열교환기",
  "typeEn": "Heat exchanger",
  "project": "B2 Project",
  "client": "한화케미칼",
  "clientEn": "Hanwha Chemical",
  "item": "동니켈 튜브 열교환기",
  "itemEn": "Heat Exchanger (Cu-Ni Tube)",
  "material": "SA516-70, B111-C71500",
  "weight": "9 ton",
  "weightTon": 9.0,
  "dimension": "12T × ID 1,000 × 6,790L",
  "img": "img/cases/se-009.jpg",
  "imgRatio": 1.6474,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-008",
  "division": "장비 제작",
  "type": "열교환기",
  "typeEn": "Heat exchanger",
  "project": "N2 Project",
  "client": "삼성석유화학",
  "clientEn": "Samsung Petrochemical",
  "item": "스테인리스 열교환기",
  "itemEn": "S/S Heat Exchanger (904L Tube)",
  "material": "SA240-316L, N904L",
  "weight": "18.5 ton",
  "weightTon": 18.5,
  "dimension": "24T × ID 900 × 8,000L",
  "img": "img/cases/se-008.jpg",
  "imgRatio": 1.682,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "SE-007",
  "division": "장비 제작",
  "type": "열교환기",
  "typeEn": "Heat exchanger",
  "project": "S Project",
  "client": "삼성석유화학",
  "clientEn": "Samsung Petrochemical",
  "item": "클래드재 열교환기",
  "itemEn": "Clad Heat Exchanger",
  "material": "A266-4+B265+B338-2",
  "weight": "25.4 ton",
  "weightTon": 25.4,
  "dimension": "15T × ID 740 × 6,100L",
  "img": "img/cases/se-007.jpg",
  "imgRatio": 1.5274,
  "imgOrientation": "landscape",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "CM-008",
  "division": "현장 시공",
  "type": "현장 탱크",
  "typeEn": "Field Erection Tank",
  "project": "KPIC ONE Project",
  "client": "이수건설",
  "clientEn": "ISU Construction",
  "item": "구형 저장탱크",
  "itemEn": "Ball Tank",
  "material": "A537 CL2+S5",
  "weight": "666 ton",
  "weightTon": 666.0,
  "dimension": "50T × ID 21,300",
  "img": "img/cases/cm-008.jpg",
  "imgRatio": 0.9039,
  "imgOrientation": "portrait",
  "home": true,
  "homeOrder": 1
 },
 {
  "id": "CM-007",
  "division": "현장 시공",
  "type": "현장 탱크",
  "typeEn": "Field Erection Tank",
  "project": "KPIC ONE Project",
  "client": "이수건설",
  "clientEn": "ISU Construction",
  "item": "이중벽 저장탱크",
  "itemEn": "Double Wall Tank",
  "material": "A516-70N+S5",
  "weight": "520 ton",
  "weightTon": 520.0,
  "dimension": "40T × ID 20,550",
  "img": "img/cases/cm-007.jpg",
  "imgRatio": 0.8969,
  "imgOrientation": "portrait",
  "home": false,
  "homeOrder": null
 },
 {
  "id": "CM-006",
  "division": "현장 시공",
  "type": "현장 탱크",
  "typeEn": "Field Erection Tank",
  "project": "KPIC ONE Project",
  "client": "이수건설",
  "clientEn": "ISU Construction",
  "item": "구형 저장탱크",
  "itemEn": "Ball Tank",
  "material": "A516-70+S5",
  "weight": "660 ton",
  "weightTon": 660.0,
  "dimension": "31T × ID 21,300",
  "img": "img/cases/cm-006.jpg",
  "imgRatio": 0.8984,
  "imgOrientation": "portrait",
  "home": false,
  "homeOrder": null
 }
];
  var FILTERS = ['전체', '열교환기', '압력용기', '컬럼·타워', '반응기', '현장 탱크'];
  var state = { filter: '전체', sel: 0 };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  // 전체: home 지정 5건(homeOrder 순) / 분류별: 해당 품목 중 중량 큰 순 5건
  function shown() {
    if (state.filter === '전체') return CASES.filter(function (c) { return c.home; }).sort(function (a, b) { return a.homeOrder - b.homeOrder; });
    return CASES.filter(function (c) { return c.type === state.filter; }).sort(function (a, b) { return b.weightTon - a.weightTon; }).slice(0, 5);
  }
  function renderFilters() {
    document.getElementById('case-filters').innerHTML = FILTERS.map(function (f) {
      return '<button type="button" role="tab" class="case-filter' + (f === state.filter ? ' on' : '') + '" aria-selected="' + (f === state.filter) + '" data-f="' + esc(f) + '">' + esc(f) + '</button>';
    }).join('');
  }
  function stage(c, sz) {   // 세로 사진: 원본 비율 그대로 '도면 스테이지' 위에 배치 (늘이거나 자르지 않음)
    return '<div class="stage stage-' + sz + '"><span class="st-side" aria-hidden="true">' + esc(c.itemEn) + '</span><span class="st-code" aria-hidden="true">' + esc(c.id) + '</span>' +
      '<figure class="st-photo" style="aspect-ratio:' + c.imgRatio + '"><img src="' + c.img + '" alt="' + esc(c.item) + '" loading="lazy"></figure>' +
      '<span class="st-spec" aria-hidden="true">' + esc(c.weight) + '<br>' + esc(c.dimension) + '</span></div>';
  }
  function renderFeature() {
    var list = shown(); var f = list[Math.min(state.sel, list.length - 1)] || CASES[0];
    var por = f.imgOrientation === 'portrait';
    document.getElementById('case-feature').innerHTML =
      '<div class="photo-fx" style="flex:3 1 560px;height:340px;border-radius:14px;overflow:hidden;background:#1E2A3A;position:relative">' +
      (por ? stage(f, 'lg') : '<img src="' + f.img + '" alt="' + esc(f.item) + '" style="position:relative;width:100%;height:100%;object-fit:cover;display:block">') + '</div>' +
      '<div style="flex:2 1 360px;min-width:0;background:#162130;border-radius:14px;padding:30px 32px;box-sizing:border-box;display:flex;flex-direction:column;gap:14px">' +
      '<span style="align-self:flex-start;padding:7px 14px;border-radius:999px;background:#24324A;color:#C9E89E;font-size:13px;font-weight:600">' + esc(f.division) + ' · ' + esc(f.typeEn) + '</span>' +
      '<h3 style="margin:0;font-size:23px;line-height:1.35;font-weight:700;letter-spacing:-0.02em">' + esc(f.item) + '</h3>' +
      '<p style="margin:0;font-size:15px;line-height:1.65;color:#B7C2D0">' + esc(f.project) + ' · ' + esc(f.itemEn) + '</p>' +
      '<div style="display:grid;grid-template-columns:72px minmax(0,1fr);row-gap:8px;column-gap:12px;padding-top:14px;border-top:1px solid #2A3646;font-size:14px;line-height:1.5">' +
      '<span style="color:#8FA0B5">발주처</span><span style="font-weight:600">' + esc(f.client) + ' <span style="font-weight:400;color:#8FA0B5">' + esc(f.clientEn) + '</span></span>' +
      '<span style="color:#8FA0B5">재질</span><span>' + esc(f.material) + '</span>' +
      '<span style="color:#8FA0B5">중량</span><span>' + esc(f.weight) + '</span>' +
      '<span style="color:#8FA0B5">치수</span><span>' + esc(f.dimension) + '</span></div>' +
      '<a href="project.html?id=' + f.id + '" style="margin-top:auto;display:inline-flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:#FFFFFF">실적 자세히 보기 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a></div>';
  }
  function renderList() {
    var list = shown(); var si = Math.min(state.sel, list.length - 1);
    document.getElementById('case-list').innerHTML = list.map(function (c, i) {
      return '<button type="button" class="case-thumb' + (i === si ? ' on' : '') + '" data-i="' + i + '" aria-pressed="' + (i === si) + '">' +
        '<img src="' + c.img + '" alt="" style="height:92px;width:100%;border-radius:6px;object-fit:cover;display:block">' +
        '<span style="font-size:11px;font-weight:600;color:#8FA0B5">' + esc(c.type) + ' · ' + esc(c.weight) + '</span>' +
        '<span style="font-size:14px;font-weight:600;line-height:1.4;color:#FFFFFF;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%">' + esc(c.item) + '</span></button>';
    }).join('');
  }
  function update(anim) {
    var feat = document.getElementById('case-feature');
    if (anim) { feat.classList.add('fade'); setTimeout(function () { renderFeature(); feat.classList.remove('fade'); }, 180); } else renderFeature();
    renderFilters(); renderList();
  }
  document.getElementById('case-filters').addEventListener('click', function (e) {
    var b = e.target.closest('[data-f]'); if (!b) return; state.filter = b.getAttribute('data-f'); state.sel = 0; update(true);
  });
  document.getElementById('case-list').addEventListener('click', function (e) {
    var b = e.target.closest('[data-i]'); if (!b) return; state.sel = +b.getAttribute('data-i'); update(true);
  });
  update(false);

  // 1-2) 히어로 마우스 패럴랙스
  var hero = document.getElementById('top'), pars = document.querySelectorAll('.hero-par'), par = pars.length ? pars : null;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (hero && par && !reduce && window.matchMedia('(pointer: fine)').matches) {
    var raf = 0;
    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      var dx = (e.clientX - r.left) / r.width - 0.5, dy = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () { pars.forEach(function (el) { el.style.setProperty('--px', (-dx * 18).toFixed(1) + 'px'); el.style.setProperty('--py', (-dy * 12).toFixed(1) + 'px'); }); });
    });
    hero.addEventListener('mouseleave', function () { pars.forEach(function (el) { el.style.setProperty('--px', '0px'); el.style.setProperty('--py', '0px'); }); });
  }

  // 1-3) 푸터 위에서 문의하기 버튼 색 반전
  var fcta = document.querySelector('.float-cta'), foot = document.getElementById('site-footer');
  if (fcta && foot && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      var r = es[0].boundingClientRect;
      fcta.classList.toggle('on-footer', es[0].isIntersecting && r.top < window.innerHeight - 56);
    }, { threshold: [0, 0.05, 0.1, 0.2, 0.4, 0.6, 1] }).observe(foot);
  }

  // 1-4) 모바일 사업영역 탭 + 스와이프 캐러셀
  var bTrack = document.querySelector('.biz-track'), bTabs = document.querySelectorAll('.biz-tab'), bDots = document.querySelectorAll('.biz-dots span');
  if (bTrack && bTabs.length) {
    var bCards = bTrack.querySelectorAll('.bizcard');
    var setTab = function (n) {
      bTabs.forEach(function (t, i) { t.classList.toggle('on', i === n); t.classList.toggle('off', i !== n); t.setAttribute('aria-selected', i === n); });
      bDots.forEach(function (d, i) { d.classList.toggle('on', i === n); });
      var tb = bTabs[n]; if (tb && tb.parentNode.scrollWidth > tb.parentNode.clientWidth) tb.parentNode.scrollTo({ left: tb.offsetLeft - 20, behavior: 'smooth' });
    };
    bTabs.forEach(function (t, i) { t.addEventListener('click', function () { bTrack.scrollTo({ left: bCards[i].offsetLeft - bTrack.offsetLeft - 20, behavior: 'smooth' }); setTab(i); }); });
    var bRaf = 0;
    bTrack.addEventListener('scroll', function () {
      cancelAnimationFrame(bRaf);
      bRaf = requestAnimationFrame(function () {
        var x = bTrack.scrollLeft, best = 0, bd = 1e9;
        bCards.forEach(function (c, i) { var d = Math.abs(c.offsetLeft - bTrack.offsetLeft - 20 - x); if (d < bd) { bd = d; best = i; } });
        setTab(best);
      });
    }, { passive: true });
    setTab(0);
  }

  // 2) 모바일 메뉴
  var btn = document.getElementById('menu-btn'), nav = document.getElementById('mnav');
  if (btn && nav) {
    btn.addEventListener('click', function () { var o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; });
    nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); document.body.style.overflow = ''; } });
  }

  // 3) 스크롤 등장 효과
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { threshold: 0.15 });
    els.forEach(function (el) { io.observe(el); });
  } else els.forEach(function (el) { el.classList.add('in'); });
})();
