import { useState, useEffect } from "react";
import svgDesktop from "../imports/svg-tncomu8gd9";
import svgMobile from "../imports/svg-mj1e9nohxx";
import imgFrame1 from "../assets/a97cb445b4e1034d6d21dbd8d0519c8dc5f4f6fc.png";
import imgFrame2 from "../assets/08362fd938ed44f8247ce72759fbb225c629d035.png";
import imgHeaderOverlay from "../assets/4e0113d4f1d8e23bed29b43927af4f1806b8e05d.png";
import img3DiconsWreathDynamicPremium from "../assets/40f29f7120386198a429bf2dbf5aefd4424a49c5.png";
import img3DiconsXmasTreeDynamicPremium from "../assets/075cbcc903a90c6f80f736e9b4e70b4666ee4359.png";
import img3DiconsXmasTreeDynamicPremium1 from "../assets/a3c92c88785406af8e0c676d1a7850638a446c54.png";
import img3DiconsGiftDynamicPremium from "../assets/38c50a50c7caa90e9f978921384f95d103b8c3de.png";
import img3DiconsLeafDynamicPremium from "../assets/2bf6a856ca0fdc99cb7d7c60b9c2835fa0b70475.png";
import img3DiconsPictureDynamicPremium from "../assets/2199e2f6baa9eeb9c40075106a7fd4512a00a8e4.png";
// ── 빛초롱 빛 조형물 이미지 (Frame17) ──
import imgBit1 from "../assets/46a64cdece3f20637c4509573cfc1134ea33afc5.png";
import imgBit2 from "../assets/f62b816f989e175972942543a3cac06a50048bb3.png";
import imgBit3 from "../assets/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgBit4 from "../assets/3461c9a09f6c09ba7a93a18804ee14caff767c10.png";
import imgBit5 from "../assets/f0f64250a4bb5300af56e030d72b4c3f68dbb606.png";
// ── 마켓 포토스팟 이미지 (Frame17) ──
import imgMkt0 from "../assets/cceceaf27999680eca7beeee46d8ca04594e18b1.png";
import imgMkt1 from "../assets/b22490d8555e61a3243c614c89525d38c4b7c8d7.png";
import imgMkt2 from "../assets/55b1b062a48ed4d2175c27ad31555f90caf17993.png";
import imgMkt3 from "../assets/ae08e5f9803d54ca5e4a6646bbc6f6002f4ddd38.png";
import imgMkt4 from "../assets/ab33551cf9477fccc92c02c3c1e617f9bb994700.png";
import imgMkt5 from "../assets/7815174a64ca2d32ab191491353995d4b59e16d6.png";
import imgMkt6 from "../assets/dd504d7be4ed23ce0d3b84f258a8bd07c5089d9c.png";
import imgMkt7 from "../assets/d94d735e849e34654111146df4954cd0f45f8ccd.png";
import imgMkt8 from "../assets/44044abf48f70d556a9d423e1b1b9b209feab0f6.png";
import imgMkt9 from "../assets/ad4c15d53db8ffc288291266422c8055facb577b.png";
import imgMkt10 from "../assets/3e82055d0694034f7c0b04bc090e9de58498a6d4.png";
// ── Instagram 카드 이미지 ──
import imgInstagramCard0 from "../assets/75243453a1e16740576c88f91322eabbea169b2b.png";
import imgInstagramCard1 from "../assets/d5ec03f4c8090bac2754a5b4a6c491b89dea6657.png";
import imgInstagramCard2 from "../assets/471294ab34cf9e17225277337511c46295a91f15.png";
import imgInstagramCard3 from "../assets/3bf34d15e45faff9eee784bfa0d5963ae791470c.png";
import imgInstagramCard4 from "../assets/3716793169d759cf6a7673b2a081cb301cfcd851.png";
import imgInstagramCard5 from "../assets/85f5cb98b7eb289f1822f11acd720fe16c74c1fc.png";
import imgInstagramCard6 from "../assets/96655e62852061f3b8a704b5ce5ea320480f98c5.png";
import imgInstagramCard7 from "../assets/3881a386505a22f8ea66c5ad88332324c468e0ca.png";
import imgInstagramCard8 from "../assets/34e81bc0493210a3ae47d2b6ba058949e3853f73.png";
// ── 아카이브 이미지 ──
import imgArchive1 from "../assets/cfd41533fba532ecaa8c365e00318ef214822994.png";
import imgArchive2 from "../assets/a351d6cf56595602af7dfb03c5acbdc9739e0b63.png";
import imgArchive3 from "../assets/3b084f664a3e7ac16cd1cbdce2f615ec63187761.png";
import imgArchive4 from "../assets/271b953e592e0c6bbebfb99a02bcaddf128e02eb.png";
import imgArchive5 from "../assets/d8814dc426659c6deeb99377d6382f9e9ac88cbd.png";
import imgArchive6 from "../assets/7fa67216256b8632be87c6dd5c7ee261542ea47e.png";

const instagramCards = [
  imgInstagramCard0,
  imgInstagramCard1,
  imgInstagramCard2,
  imgInstagramCard3,
  imgInstagramCard4,
  imgInstagramCard5,
  imgInstagramCard6,
  imgInstagramCard7,
  imgInstagramCard8,
];

const navCards = [
  {
    bg: "#ad2924",
    title: "2025 서울빛초롱축제",
    desc: "<나의 빛, 우리의 꿈, 서울의 마법>을 주제로 서울의 겨울밤에 펼쳐지는 마법 같은 순간을 선사합니다.",
    icon: img3DiconsWreathDynamicPremium,
  },
  {
    bg: "#869b6a",
    title: "2025 광화문 마켓",
    desc: "광화문광장이 겨울동화 속 산타마을로 변신합니다. 광화문 마켓에서 산타클로스와 동화 속 친구들을 만나보세요!",
    icon: img3DiconsXmasTreeDynamicPremium,
  },
  {
    bg: "#87593e",
    title: "빛초롱 둘러보기",
    desc: "2025 서울빛초롱축제에서만 만날 수 있는 빛 조형물과 프로그램을 소개합니다.",
    icon: img3DiconsXmasTreeDynamicPremium1,
  },
  {
    bg: "#00553b",
    title: "마켓 둘러보기",
    desc: "2025 광화문 마켓 배치도와 구간별 세부내용을 확인하세요!",
    icon: img3DiconsGiftDynamicPremium,
  },
  {
    bg: "#002a2e",
    title: "대중교통 오시는 길",
    desc: "2025 서울빛초롱축제\n2025 광화문 마켓",
    icon: img3DiconsLeafDynamicPremium,
  },
  {
    bg: "#3e2300",
    title: "아카이브",
    desc: "2025 현장 사진과 역대 행사 사진은 이곳에서 둘러보세요!",
    icon: img3DiconsPictureDynamicPremium,
  },
];

// ── 빛초롱 빛 조형물 카드 데이터 (5개) ──
const sculptureDataBit = [
  {
    title: "시등의 순간",
    desc: "1887년 3월, 경복궁 건청궁에서 밝혀진 최초의 전등을 LED 영상과 한지 등(燈)을 통해 재현합니다. 옛 사람들이 넋을 놓고 바라본 첫 점등의 마법 같은 순간을 함께 느껴보세요.",
    location: "청계광장~광통교",
    img: imgBit1,
  },
  {
    title: "갓",
    desc: "힙한 트렌드로 재조명된 조선시대 선비의 '갓'을 모티브로 한 조명 연출로, 전통과 현대가 어우러진 글로벌 한국 문화를 선보입니다.",
    location: "광통교~광교",
    img: imgBit2,
  },
  {
    title: "청계의 빛 : 청계천의 과거",
    desc: "청계천 복원 20주년을 기념하여 제작된 서울빛초롱축제 특별전 작품입니다. 서울의 근현대사와 함께 '판자촌'과 '수표석'으로 서민들의 삶을 따뜻하게 재조명합니다.",
    location: "광교~장통교",
    img: imgBit3,
  },
  {
    title: "빛의 오로라",
    desc: "삼일교 하단의 프로젝션과 레이저로 연출하여 청계천에서 오로라를 보고 즐길 수 있습니다.",
    location: "장통교~삼일교",
    img: imgBit4,
  },
  {
    title: "어가행렬",
    desc: "2024년 서울빛초롱축제에서 다시 보고 싶은 조형물 1위! 종묘대제의 큰 의례인 임금행차, 조선시대의 어가행렬을 모티브로 연출하여 역사 속 서울(한양)에서 전통과 현대가 어우러진 빛의 연희를 함께 즐길 수 있습니다.",
    location: "우이교~쌍한교",
    img: imgBit5,
  },
];

// ── 마켓 포토스팟 카드 데이터 (11개) ──
const sculptureDataMarket = [
  {
    title: "산타마을 곳곳에 마련된 크리스마스 포토존을 찾아 행복한 추억을 남겨보세요.",
    desc: "겨울동화 속 산타마을의 시작을 알리는 산타마을 동화책, 오감을 자극하는 호두까기 인형과 진저브레드 쿠키의 집, 산타마을의 전경을 배경으로 담을 수 있는 거울 포토존까지 놓치지 말고 모두 만나보세요!",
    location: "산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지",
    img: imgMkt0,
  },
  {
    title: "① 산타마을 동화책",
    desc: "겨울동화 속 산타마을에 오신 여러분을 환영합니다! 마켓 입구에서 만나보실 수 있는 동화책이 어려분을 산타마을로 안내합니다.",
    location: "산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지",
    img: imgMkt1,
  },
  {
    title: "② 호두까기 인형의 집",
    desc: "호두까기, 발레리나 인형과 함께 연극의 한 장면 같은 포토존에서 사진을 찍어보세요. 포토존에서 흘러나오는 클래식한 음악이 마치 무대 속 주인공이 된 듯한 기분을 느끼게 해 줄 거에요!",
    location: "산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지",
    img: imgMkt2,
  },
  {
    title: "③ 행운의 목마",
    desc: "2026년은 붉은 말의 해! 산타마을이 궁금했던 행운의 목마가 크리스마스 장식으로 드레스코드를 맞춰 입고 놀러왔어요.",
    location: "산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지",
    img: imgMkt3,
  },
  {
    title: "④ 진저브레드 쿠키의 집",
    desc: "산타마을을 진저브레드 쿠키 향으로 가득 채우는 과자집이에요. 진저브레드 쿠키의 집에서는 소원 편지도 접수 받고 있으니 크리스마스 소원이 있다면 여기서 알려주세요!",
    location: "산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지",
    img: imgMkt4,
  },
  {
    title: "⑤ 산타마을 급행열차",
    desc: "산타가 두고 간 크리스마스 선물을 가득 싣고 산타마을 급행열차가 도착했어요!",
    location: "산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지",
    img: imgMkt5,
  },
  {
    title: "⑥ 눈꽃 분수대",
    desc: "눈꽃 분수대는 눈송이가 가득 담긴 산타마을의 명물이에요. 산타마을에는 분수대 꼭대기에 눈송이를 넣으면 행운이 찾아온다는 소문이 있는데요, 직접 눈송이를 던져 확인해보세요!",
    location: "산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지",
    img: imgMkt6,
  },
  {
    title: "⑦ 회전목마 티켓부스",
    desc: "이곳에서 루돌프 회전목마 탑승을 위한 티켓을 받을 수 있습니다. 산타마을 스탬프 투어를 완료한 누구나 탑승 티켓을 받으실 수 있어요!",
    location: "산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지",
    img: imgMkt7,
  },
  {
    title: "⑧ 거울 포토존",
    desc: "캔디케인을 닮은 거울 포토존에서는 산타마을 빌리지 전경을 배경으로 사진을 남길 수 있어요.",
    location: "산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지",
    img: imgMkt8,
  },
  {
    title: "⑨ 크리스마스 요정의 집",
    desc: "크리스마스 요정이 잠시 머무는 집이에요. 따뜻한 벽난로에서 앞에서 몸을 녹이는 요정과 함께 사진을 찍어보세요.",
    location: "산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지",
    img: imgMkt9,
  },
  {
    title: "⑩ 산타마을 이정표",
    desc: "산타마을의 끝을 안내하는 이정표입니다. 겨울동화 속 산타마을에서의 하루는 어떠셨나요? 산타마을을 모두 구경하고 이곳에서 인증 사진을 남겨보세요!",
    location: "산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지",
    img: imgMkt10,
  },
];

const archiveTabs = [
  "2025 서울빛초롱축제 사진",
  "서울빛초롱축제 역대 사진",
  "2025 광화문 마켓 사진",
  "광화문 마켓 역대 사진",
];

const archiveItems = [
  { img: imgArchive5, tag: "서울빛초롱축제", title: "2025 서울빛초롱축제, 팔마" },
  { img: imgArchive6, tag: "서울빛초롱축제", title: "2025 서울빛초롱축제, 시등의 순간" },
  { img: imgArchive1, tag: "서울빛초롱축제", title: "2025 서울빛초롱축제, 빛의 선물" },
  { img: imgArchive2, tag: "서울빛초롱축제", title: "2025 서울빛초롱축제, 서울의 랜드마크" },
  { img: imgArchive3, tag: "서울빛초롱축제", title: "2025 서울빛초롱축제, 움직이는 빛" },
  {
    img: imgArchive4,
    tag: "서울빛초롱축제",
    title: "2025 서울빛초롱축제, 옛빛+최초의 전화기",
  },
];

function InstagramLogo({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path d={svgMobile.p179a8d00} fill="white" />
    </svg>
  );
}

function LocationPin() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <g>
        <path d={svgMobile.p1c8bc980} fill="#C30A0A" />
      </g>
    </svg>
  );
}

export default function App() {
  // 0 = 빛초롱 빛 조형물, 1 = 마켓 포토스팟
  const [activeFilter, setActiveFilter] = useState(0);
  // 현재 카테고리 내 카드 인덱스
  const [sculptureIndex, setSculptureIndex] = useState(0);
  const [socialTab, setSocialTab] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeArchiveTab, setActiveArchiveTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    function updateVisibleCards() {
      const w = window.innerWidth;
      if (w < 640) setVisibleCards(2);
      else if (w < 1024) setVisibleCards(3);
      else setVisibleCards(3);
    }
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxCarouselIndex = Math.max(0, instagramCards.length - visibleCards);

  const handleCarouselPrev = () => {
    setCarouselIndex((prev) => Math.max(0, prev - 1));
  };
  const handleCarouselNext = () => {
    setCarouselIndex((prev) => Math.min(maxCarouselIndex, prev + 1));
  };

  // 현재 카테고리에 맞는 카드 배열
  const currentList = activeFilter === 0 ? sculptureDataBit : sculptureDataMarket;
  const currentSculpture = currentList[sculptureIndex];

  return (
    <div className="bg-[#04080b] w-full min-h-screen overflow-x-hidden">

      {/* ── HERO SECTION (Header + Title) ── */}
      <div className="relative w-full">
        <img
          src={imgFrame1}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        {/* Header */}
        <header className="relative z-20 bg-gradient-to-b from-black/75 to-transparent">
          <div className="flex items-center justify-between px-4 md:px-6 lg:px-12 py-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-white text-[22px] tracking-[-1.1px] font-bold" style={{ fontFamily: "'GamtanRoad Batang', sans-serif" }}>
                서울빛초롱축제
              </span>
              <span className="text-white text-[15px] tracking-[-0.75px]" style={{ fontFamily: "'GamtanRoad Batang', sans-serif" }}>
                광화문마켓
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {["2025 서울빛초롱축제", "2025 광화문마켓", "FAQ", "아카이브"].map((item) => (
                <button
                  key={item}
                  className="px-1 py-1 text-white text-[15px] tracking-[-0.75px] hover:opacity-80 transition-opacity whitespace-nowrap"
                  style={{ fontFamily: "'GamtanRoad Batang', sans-serif" }}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative w-[72px] h-[25px]">
                <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 75.5 29">
                  <path d={svgDesktop.p2bf3ae00} stroke="white" strokeWidth="3" />
                  <path d={svgDesktop.p2cd6a700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                </svg>
              </div>
              <div className="relative w-[28px] h-[17px]">
                <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 31 20">
                  <path d={svgDesktop.p34f65780} stroke="white" strokeLinecap="round" strokeWidth="3" />
                </svg>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="32" height="22" viewBox="0 0 35 23" fill="none">
                <path d={svgMobile.p15924ca0} stroke="white" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/90 px-4 pb-4">
              {["2025 서울빛초롱축제", "2025 광화문마켓", "FAQ", "아카이브"].map((item) => (
                <button
                  key={item}
                  className="block w-full text-left text-white py-3 border-b border-white/20 text-[15px]"
                  style={{ fontFamily: "'GamtanRoad Batang', sans-serif" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </header>

        {/* Hero Title */}
        <div className="relative z-10 px-4 md:px-6 lg:px-12 pb-8 md:pb-12 pt-8 md:pt-16">
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="text-white tracking-tight font-semibold" style={{ fontFamily: "Pretendard, sans-serif" }}>
              <p className="text-[36px] md:text-[56px] lg:text-[80px] leading-tight mb-0">2025</p>
              <p className="text-[36px] md:text-[56px] lg:text-[80px] leading-tight mb-0">서울빛초롱축제</p>
              <p className="text-[36px] md:text-[56px] lg:text-[80px] leading-tight">& 광화문 마켓</p>
            </div>
            <div className="text-[#cecece] text-[13px] md:text-[16px] lg:text-[24px] tracking-[-0.45px]" style={{ fontFamily: "Pretendard, sans-serif" }}>
              <p className="leading-normal mb-0">SEOUL LANTERN FESTIVAL</p>
              <p className="leading-normal">& GWANGHWAMUN MARKET</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTENT BACKGROUND SECTION ── */}
      <div className="relative w-full">
        <img
          src={imgFrame2}
          alt="Section Background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        <div className="relative z-10 px-4 md:px-6 lg:px-12 py-6 md:py-10 lg:py-[50px] flex flex-col gap-8 md:gap-12 lg:gap-[65px]">

          {/* ── NAVIGATION CARDS (Horizontal Scroll) ── */}
          <div className="overflow-x-auto pb-2 -mx-4 md:-mx-6 lg:-mx-12 px-4 md:px-6 lg:px-12">
            <div className="flex gap-4 md:gap-5 lg:gap-6" style={{ width: "max-content" }}>
              {navCards.map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between overflow-hidden rounded-[12px] p-4 shrink-0 group"
                  style={{
                    background: card.bg,
                    width: "clamp(200px, 32vw, 419px)",
                    height: "clamp(200px, 28vw, 288px)",
                  }}
                >
                  <div className="flex flex-col gap-3 text-white pt-2">
                    <p className="font-semibold text-[14px] md:text-[20px] lg:text-[28px] tracking-tight leading-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>
                      {card.title}
                    </p>
                    <p className="text-[10px] md:text-[13px] lg:text-[16px] tracking-tight leading-relaxed" style={{ fontFamily: "Pretendard, sans-serif" }}>
                      {card.desc}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <img src={card.icon} alt="" className="w-16 h-16 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:drop-shadow-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 주요 조형물 SECTION ── */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <h2 className="text-white font-semibold text-[28px] md:text-[48px] lg:text-[80px] tracking-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>
              주요 조형물
            </h2>

            {/* Filter Buttons — 카테고리 전환, 인덱스 리셋 */}
            <div className="flex gap-4 items-center">
              {["빛초롱 빛 조형물", "마켓 포토스팟"].map((label, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveFilter(i);
                    setSculptureIndex(0); // 카테고리 전환 시 첫 번째 카드로 리셋
                  }}
                  className={`px-4 md:px-5 py-1.5 rounded-full text-[12px] md:text-[16px] lg:text-[20px] tracking-tight transition-colors ${
                    activeFilter === i
                      ? "bg-[#c30a0a] text-white"
                      : "bg-white text-[#59433a]"
                  }`}
                  style={{ fontFamily: "Pretendard, sans-serif" }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* 카드 인덱스 표시 */}
            <div className="flex items-center gap-1">
              {currentList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSculptureIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === sculptureIndex
                      ? "bg-white w-4 h-2"
                      : "bg-white/40 w-2 h-2"
                  }`}
                />
              ))}
            </div>

            {/* Sculpture Card */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              {/* Photo */}
              <div className="flex-1 min-w-0 rounded-[12px] overflow-hidden bg-[#cca1a1] relative min-h-[220px]">
                <img
                  src={currentSculpture.img}
                  alt="조형물"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Description */}
              <div className="flex-1 min-w-0 bg-white rounded-[12px] p-4 md:p-5 lg:p-6 flex flex-col justify-between">
                <div className="flex flex-col gap-2 md:gap-3">
                  <p className="font-semibold text-[#59433a] text-[18px] md:text-[28px] lg:text-[40px] tracking-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>
                    {currentSculpture.title}
                  </p>
                  <p className="font-semibold text-[#59433a] text-[18px] md:text-[28px] lg:text-[40px] tracking-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>
                    ㅡ
                  </p>
                  <p className="text-[#59433a] text-[11px] md:text-[14px] lg:text-[20px] tracking-tight leading-relaxed" style={{ fontFamily: "Pretendard, sans-serif" }}>
                    {currentSculpture.desc}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <LocationPin />
                    <p className="text-[#59433a] text-[11px] md:text-[13px] lg:text-[20px] tracking-tight whitespace-normal" style={{ fontFamily: "Pretendard, sans-serif" }}>
                      {currentSculpture.location}
                    </p>
                  </div>
                </div>
                {/* Arrow Buttons — 같은 카테고리 내 카드 이동 */}
                <div className="flex items-center gap-2 mt-4 justify-end">
                  <button
                    onClick={() =>
                      setSculptureIndex((prev) =>
                        prev > 0 ? prev - 1 : currentList.length - 1
                      )
                    }
                    className="w-8 h-10 md:w-10 md:h-12 lg:w-[50px] lg:h-[50px] rounded-full border border-[#59433a] flex items-center justify-center text-[#59433a] hover:bg-[#59433a]/10 transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() =>
                      setSculptureIndex((prev) =>
                        prev < currentList.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="w-8 h-10 md:w-10 md:h-12 lg:w-[50px] lg:h-[50px] rounded-full border border-[#59433a] flex items-center justify-center text-[#59433a] hover:bg-[#59433a]/10 transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SOCIAL MEDIA SECTION ── */}
      <div className="bg-[#981a17] w-full px-4 md:px-6 lg:px-12 py-8 md:py-12 lg:py-[50px] flex flex-col gap-6 md:gap-8 lg:gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-white font-semibold text-[28px] md:text-[48px] lg:text-[80px] tracking-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>
            SOCIAL MEDIA
          </h2>
          <div className="text-[#cecece] text-[13px] md:text-[16px] lg:text-[24px] tracking-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>
            <p className="leading-normal mb-0">@seoullanternfestival @gwanghwamunmarket 인스타그램을 팔로우해보세요!</p>
            <p className="leading-normal">2025 서울빛초롱축제와 광화문 마켓의 주요 소식들을 가장 먼저 확인할 수 있습니다.</p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-0">
          {["2025 서울빛초롱축제", "2025 광화문 마켓"].map((tab, i) => (
            <button
              key={i}
              onClick={() => { setSocialTab(i); setCarouselIndex(0); }}
              className={`px-2 py-2 text-[15px] tracking-tight transition-colors ${
                socialTab === i
                  ? "text-white border-b border-white font-bold"
                  : "text-[#dad6d6]"
              }`}
              style={{ fontFamily: "Pretendard, sans-serif" }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative flex items-center gap-3 md:gap-4 lg:gap-6">
          {/* Prev Button */}
          <button
            onClick={handleCarouselPrev}
            disabled={carouselIndex === 0}
            className="shrink-0 bg-white rounded-full w-10 h-10 md:w-14 md:h-14 lg:w-[100px] lg:h-[100px] flex items-center justify-center text-[#59433a] text-[20px] md:text-[30px] lg:text-[45px] font-medium disabled:opacity-40 hover:bg-gray-100 transition-opacity shadow-md z-10"
          >
            {"<"}
          </button>

          {/* Cards Container */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-3 md:gap-4 lg:gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${carouselIndex} * (100% / ${visibleCards} + 1rem)))` }}
            >
              {instagramCards.map((src, i) => (
                <div
                  key={i}
                  className="shrink-0 rounded-[12px] overflow-hidden"
                  style={{
                    width: `calc((100%) / ${visibleCards} - 0.75rem)`,
                    aspectRatio: "155/217",
                  }}
                >
                  <img src={src} alt={`Instagram ${i + 1}`} className="w-full h-full object-cover rounded-[12px]" />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleCarouselNext}
            disabled={carouselIndex >= maxCarouselIndex}
            className="shrink-0 bg-white rounded-full w-10 h-10 md:w-14 md:h-14 lg:w-[100px] lg:h-[100px] flex items-center justify-center text-[#59433a] text-[20px] md:text-[30px] lg:text-[45px] font-medium disabled:opacity-40 hover:bg-gray-100 transition-opacity shadow-md z-10"
          >
            {">"}
          </button>
        </div>

        {/* Instagram Link Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          {["2025 서울빛초롱축제", "2025 광화문 마켓"].map((label) => (
            <button
              key={label}
              className="flex items-center gap-1.5 border border-white rounded-[16px] px-4 md:px-8 py-2 md:py-2.5 text-white text-[12px] md:text-[16px] lg:text-[20px] tracking-tight hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Pretendard, sans-serif" }}
            >
              <InstagramLogo size={12} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* ── 리플렛 SECTION ── */}
        <div className="flex flex-col gap-5 md:gap-6 mt-4 md:mt-6 lg:mt-8">
          <h2 className="text-white font-semibold text-[28px] md:text-[48px] lg:text-[80px] tracking-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>
            리플렛
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "리플렛", title1: "2025", title2: "서울빛초롱축제", btn: "다운로드→" },
              { label: "리플렛", title1: "2025", title2: "광화문 마켓", btn: "다운로드→" },
            ].map((item, i) => (
              <div key={i} className="bg-[#ad2924] rounded-[12px] px-5 md:px-6 py-4 md:py-5 flex items-end justify-between">
                <div className="flex flex-col gap-1 text-white">
                  <p className="text-[12px] md:text-[16px] lg:text-[20px] tracking-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>{item.label}</p>
                  <div className="font-semibold text-[22px] md:text-[32px] lg:text-[40px] tracking-tight leading-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>
                    <p className="mb-0">{item.title1}</p>
                    <p>{item.title2}</p>
                  </div>
                </div>
                <button className="border border-white rounded-[20px] px-4 py-1.5 text-white text-[12px] md:text-[16px] lg:text-[20px] tracking-tight whitespace-nowrap hover:bg-white/10 transition-colors" style={{ fontFamily: "Pretendard, sans-serif" }}>
                  {item.btn}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ SECTION ── */}
        <div className="flex flex-col gap-5 md:gap-6 mt-4 md:mt-2 lg:mt-0">
          <h2 className="text-white font-semibold text-[28px] md:text-[48px] lg:text-[80px] tracking-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>
            FAQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "자주하는 질문", title1: "2025", title2: "서울빛초롱축제", btn: "바로가기 →" },
              { label: "자주하는 질문", title1: "2025", title2: "광화문 마켓", btn: "바로가기 →" },
            ].map((item, i) => (
              <div key={i} className="bg-[#ad2924] rounded-[12px] px-5 md:px-6 py-4 md:py-5 flex items-end justify-between">
                <div className="flex flex-col gap-1 text-white">
                  <p className="text-[12px] md:text-[16px] lg:text-[20px] tracking-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>{item.label}</p>
                  <div className="font-semibold text-[22px] md:text-[32px] lg:text-[40px] tracking-tight leading-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>
                    <p className="mb-0">{item.title1}</p>
                    <p>{item.title2}</p>
                  </div>
                </div>
                <button className="border border-white rounded-[20px] px-4 py-1.5 text-white text-[12px] md:text-[16px] lg:text-[20px] tracking-tight whitespace-nowrap hover:bg-white/10 transition-colors" style={{ fontFamily: "Pretendard, sans-serif" }}>
                  {item.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 아카이브 SECTION ── */}
      <div className="bg-[#fef8eb] w-full px-4 md:px-6 lg:px-12 py-8 md:py-12 lg:py-[50px] flex flex-col gap-5 md:gap-6">
        {/* Header + Tabs */}
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[#59433a] font-semibold text-[28px] md:text-[48px] lg:text-[80px] tracking-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>
            아카이브
          </h2>
          <div className="flex items-center gap-4 md:gap-6 overflow-x-auto pb-1">
            {archiveTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveArchiveTab(i)}
                className={`shrink-0 px-2 py-2 text-[15px] md:text-[16px] tracking-tight transition-colors font-bold whitespace-nowrap ${
                  activeArchiveTab === i
                    ? "text-[#ad2924] border-b-2 border-[#ad2924]"
                    : "text-[#2d201b]"
                }`}
                style={{ fontFamily: "Pretendard, sans-serif" }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Archive Cards */}
        <div className="overflow-x-auto -mx-4 md:-mx-6 lg:-mx-12 px-4 md:px-6 lg:px-12 pb-2">
          <div className="flex gap-3 md:gap-4 lg:gap-4" style={{ width: "max-content" }}>
            {archiveItems.map((item, i) => (
              <div
                key={i}
                className="flex flex-col shrink-0 rounded-[12px] overflow-hidden bg-white shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)] group"
                style={{ width: "clamp(150px, 22vw, 300px)" }}
              >
                {/* Photo */}
                <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-[12px] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {/* Text */}
                <div className="px-3 md:px-4 pt-3 pb-4 md:pb-5 flex flex-col gap-2">
                  <div className="bg-[#c30a0a] inline-flex items-center justify-center px-1.5 py-0.5 rounded-[8px] self-start">
                    <span className="text-white text-[10px] font-semibold whitespace-nowrap" style={{ fontFamily: "Pretendard, sans-serif" }}>
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-black text-[11px] md:text-[12px] tracking-tight" style={{ fontFamily: "Pretendard, sans-serif" }}>
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
