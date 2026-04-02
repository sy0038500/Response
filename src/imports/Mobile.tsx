import svgPaths from "./svg-mj1e9nohxx";
import imgFrame1 from "figma:asset/a97cb445b4e1034d6d21dbd8d0519c8dc5f4f6fc.png";
import imgFrame2 from "figma:asset/08362fd938ed44f8247ce72759fbb225c629d035.png";
import img3DiconsWreathDynamicPremium from "figma:asset/40f29f7120386198a429bf2dbf5aefd4424a49c5.png";
import img3DiconsXmasTreeDynamicPremium from "figma:asset/075cbcc903a90c6f80f736e9b4e70b4666ee4359.png";
import img3DiconsXmasTreeDynamicPremium1 from "figma:asset/a3c92c88785406af8e0c676d1a7850638a446c54.png";
import img3DiconsGiftDynamicPremium from "figma:asset/38c50a50c7caa90e9f978921384f95d103b8c3de.png";
import img3DiconsLeafDynamicPremium from "figma:asset/2bf6a856ca0fdc99cb7d7c60b9c2835fa0b70475.png";
import img3DiconsPictureDynamicPremium from "figma:asset/2199e2f6baa9eeb9c40075106a7fd4512a00a8e4.png";
import img from "figma:asset/cceceaf27999680eca7beeee46d8ca04594e18b1.png";
import imgInstagramCard from "figma:asset/7ef2e174df3e9939e3eb237e3f2cabe4c53e52f5.png";
import imgInstagramCard1 from "figma:asset/f04701119dbaa17bf5459421243ff6eec37ad739.png";
import img1 from "figma:asset/d8814dc426659c6deeb99377d6382f9e9ac88cbd.png";
import img2 from "figma:asset/7fa67216256b8632be87c6dd5c7ee261542ea47e.png";
import img3 from "figma:asset/271b953e592e0c6bbebfb99a02bcaddf128e02eb.png";
import img4 from "figma:asset/3b084f664a3e7ac16cd1cbdce2f615ec63187761.png";

function Component() {
  return (
    <div className="content-stretch flex gap-[9px] h-[19px] items-center leading-[normal] not-italic relative shrink-0 text-center text-white whitespace-nowrap" data-name="헤더 좌측">
      <p className="font-['GamtanRoad_Batang:Bold',sans-serif] relative shrink-0 text-[22px] tracking-[-1.1px]">서울빛초롱축제</p>
      <p className="font-['GamtanRoad_Batang:Regular',sans-serif] relative shrink-0 text-[15px] tracking-[-0.75px]">광화문마켓</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[531px] items-center px-[16px] relative shrink-0 w-[402px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1} />
      <div className="bg-gradient-to-b content-stretch flex from-1/4 from-[rgba(0,0,0,0.75)] items-center justify-between overflow-clip py-[7px] relative shrink-0 to-[278.41%] to-[rgba(255,255,255,0)] w-full" data-name="헤더">
        <Component />
        <div className="content-stretch flex flex-col h-[30px] items-center p-[5px] relative shrink-0 w-[64px]" data-name="ICONs">
          <div className="h-[20px] relative shrink-0 w-[32px]" data-name="Vector">
            <div className="absolute inset-[-7.5%_-4.69%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 23">
                <path d={svgPaths.p15924ca0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="섹션1">
      <div className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[28px] text-white tracking-[-0.84px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">2025</p>
        <p className="leading-[normal] mb-0">서울빛초롱축제</p>
        <p className="leading-[normal]">{`& 광화문 마켓`}</p>
      </div>
      <div className="font-['Pretendard:Regular',sans-serif] min-w-full relative shrink-0 text-[#cecece] text-[15px] tracking-[-0.45px] w-[min-content]">
        <p className="leading-[normal] mb-0">SEOUL LANTERN FESTIVAL</p>
        <p className="leading-[normal]">{`& GWANGHWAMUN MARKET`}</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[normal] not-italic pb-[16px] pt-[20px] relative shrink-0 text-white w-full" data-name="카드 글">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[22px] tracking-[-1.1px] w-full">2025 서울빛초롱축제</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[12px] tracking-[-0.6px] w-full">{`<나의 빛, 우리의 꿈, 서울의 마법>을 주제로 서울의 겨울밤에 펼쳐지는 마법 같은 순간을 선사합니다.`}</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[90px]" data-name="카드 아이콘">
      <div className="absolute left-[-4px] size-[99px] top-[-5px]" data-name="3dicons-wreath-dynamic-premium">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DiconsWreathDynamicPremium} />
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[normal] not-italic pb-[16px] pt-[20px] relative shrink-0 text-white w-full" data-name="카드 글">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[22px] tracking-[-1.1px] w-full">2025 광화문 마켓</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[12px] tracking-[-0.6px] w-full">광화문광장이 겨울동화 속 산타마을로 변신합니다. 광화문 마켓에서 산타클로스와 동화 속 친구들을 만나보세요!</p>
    </div>
  );
}

function Component3DiconsXmasTreeDynamicPremium() {
  return (
    <div className="relative shrink-0 size-[90px]" data-name="3dicons-xmas-tree-dynamic-premium">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DiconsXmasTreeDynamicPremium} />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[normal] not-italic pb-[16px] pt-[20px] relative shrink-0 text-white w-full" data-name="카드 글">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[22px] tracking-[-1.1px] w-full">빛초롱 둘러보기</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[12px] tracking-[-0.6px] w-full">2025 서울빛초롱축제에서만 만날 수 있는 빛 조형물과 프로그램을 소개합니다.</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[90px]" data-name="카드 아이콘">
      <div className="absolute left-0 size-[91px] top-0" data-name="3dicons-xmas-tree-dynamic-premium">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DiconsXmasTreeDynamicPremium1} />
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[normal] not-italic pb-[16px] pt-[20px] relative shrink-0 text-white w-full" data-name="카드 글">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[22px] tracking-[-1.1px] w-full">마켓 둘러보기</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[12px] tracking-[-0.6px] w-full">2025 광화문 마켓 배치도와 구간별 세부내용을 확인하세요!</p>
    </div>
  );
}

function Component10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[90px]" data-name="카드 아이콘">
      <div className="absolute left-0 size-[90px] top-[-3px]" data-name="3dicons-gift-dynamic-premium">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DiconsGiftDynamicPremium} />
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic pb-[16px] pt-[20px] relative shrink-0 text-white w-full" data-name="카드 글">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[22px] tracking-[-1.1px] w-full">대중교통 오시는 길</p>
      <div className="font-['Pretendard:Regular',sans-serif] leading-[0] relative shrink-0 text-[12px] tracking-[-0.6px] w-full">
        <p className="leading-[normal] mb-0">2025 서울빛초롱축제</p>
        <p className="leading-[normal]">2025 광화문 마켓</p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="overflow-clip relative shrink-0 size-[90px]" data-name="카드 아이콘">
      <div className="absolute left-0 size-[96px] top-[-3px]" data-name="3dicons-leaf-dynamic-premium">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DiconsLeafDynamicPremium} />
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[normal] not-italic pb-[16px] pt-[20px] relative shrink-0 text-white w-full" data-name="카드 글">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[22px] tracking-[-1.1px] w-full">아카이브</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[12px] tracking-[-0.6px] w-full">2025 현장 사진과 역대 행사 사진은 이곳에서 둘러보세요!</p>
    </div>
  );
}

function Component14() {
  return (
    <div className="overflow-clip relative shrink-0 size-[90px]" data-name="카드 아이콘">
      <div className="absolute left-[-5px] size-[95px] top-[-3px]" data-name="3dicons-picture-dynamic-premium">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DiconsPictureDynamicPremium} />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[24px] h-[288px] items-start left-0 right-[-1335px] top-0" data-name="섹션1_카드">
      <div className="bg-[#ad2924] content-stretch flex flex-col h-[288px] items-end justify-between overflow-clip px-[16px] py-[18px] relative rounded-[12px] shrink-0 w-[254px]" data-name="카드">
        <Component4 />
        <Component5 />
      </div>
      <div className="bg-[#869b6a] content-stretch flex flex-col h-[288px] items-end justify-between overflow-clip px-[16px] py-[18px] relative rounded-[12px] shrink-0 w-[254px]" data-name="카드">
        <Component6 />
        <Component3DiconsXmasTreeDynamicPremium />
      </div>
      <div className="bg-[#87593e] content-stretch flex flex-col h-[288px] items-end justify-between overflow-clip px-[16px] py-[18px] relative rounded-[12px] shrink-0 w-[254px]" data-name="카드">
        <Component7 />
        <Component8 />
      </div>
      <div className="bg-[#00553b] content-stretch flex flex-col h-[288px] items-end justify-between overflow-clip px-[16px] py-[18px] relative rounded-[12px] shrink-0 w-[254px]" data-name="카드">
        <Component9 />
        <Component10 />
      </div>
      <div className="bg-[#002a2e] content-stretch flex flex-col h-[288px] items-end justify-between overflow-clip px-[16px] py-[18px] relative rounded-[12px] shrink-0 w-[254px]" data-name="카드">
        <Component11 />
        <Component12 />
      </div>
      <div className="bg-[#3e2300] content-stretch flex flex-col h-[288px] items-end justify-between overflow-clip px-[16px] py-[18px] relative rounded-[12px] shrink-0 w-[254px]" data-name="카드">
        <Component13 />
        <Component14 />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[288px] overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="섹션1 미디어">
      <Component3 />
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[370px]" data-name="섹션2 상단">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-white tracking-[-0.84px] w-full">주요 조형물</p>
    </div>
  );
}

function Component17() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0" data-name="버튼">
      <button className="bg-white content-stretch cursor-pointer flex h-[28px] items-center justify-center px-[20px] py-[7px] relative rounded-[16px] shrink-0 w-[114px]" data-name="버튼">
        <p className="flex-[1_0_0] font-['Pretendard:Regular',sans-serif] h-full leading-[normal] min-h-px min-w-px not-italic relative text-[#59433a] text-[12px] text-left tracking-[-0.6px]">빛초롱 빛 조형물</p>
      </button>
      <div className="bg-[#c30a0a] content-stretch flex h-[28px] items-center justify-center px-[20px] py-[7px] relative rounded-[16px] shrink-0" data-name="버튼">
        <p className="font-['Pretendard:Regular',sans-serif] h-full leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.6px] w-[74px]">마켓 포토스팟</p>
      </div>
    </div>
  );
}

function Frame10() {
  return <div className="h-[182px] shrink-0 w-[382px]" />;
}

function Component19() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[269px] items-center justify-center left-[calc(50%+131.33px)] overflow-clip top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
      <Frame10 />
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-[#cca1a1] flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component19 />
    </div>
  );
}

function LocationLogo() {
  return (
    <div className="h-[28px] relative shrink-0 w-[12px]" data-name="location_logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="location_logo">
          <path d={svgPaths.p1c8bc980} fill="var(--fill-0, #C30A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component21() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">산타마을 곳곳에 마련된 크리스마스 포토존을 찾아 행복한 추억을 남겨보세요.</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]">겨울동화 속 산타마을의 시작을 알리는 산타마을 동화책, 오감을 자극하는 호두까기 인형과 진저브레드 쿠키의 집, 산타마을의 전경을 배경으로 담을 수 있는 거울 포토존까지 놓치지 말고 모두 만나보세요!</p>
      <Component21 />
    </div>
  );
}

function ArrowSet() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <button className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] text-left tracking-[-0.6px] whitespace-nowrap">←</p>
      </button>
      <button className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] text-left tracking-[-0.6px] whitespace-nowrap">→</p>
      </button>
    </div>
  );
}

function Component20() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame2 />
          <ArrowSet />
        </div>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[583px] items-start relative shrink-0 w-full" data-name="섹션2">
      <Component16 />
      <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="조형물 미디어들">
        <Component17 />
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="광화문마켓 조형물_카드">
          <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
            <Component18 />
            <Component20 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1110px] items-center px-[16px] py-[20px] relative shrink-0 w-[402px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame2} />
      <Component1 />
      <Component2 />
      <Component15 />
    </div>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start not-italic relative shrink-0 w-full" data-name="섹션3 글">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[28px] text-white tracking-[-0.84px] w-full">SOCIAL MEDIA</p>
      <div className="font-['Pretendard:Regular',sans-serif] leading-[0] relative shrink-0 text-[#cecece] text-[15px] tracking-[-0.45px] w-full">
        <p className="leading-[normal] mb-0">@seoullanternfestival @gwanghwamunmarket 인스타그램을 팔로우해보세요!</p>
        <p className="leading-[normal]">2025 서울빛초롱축제와 광화문 마켓의 주요 소식들을 가장 먼저 확인할 수 있습니다.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component22 />
    </div>
  );
}

function SocialMediaBt() {
  return (
    <div className="content-stretch flex h-[34px] items-center p-[8px] relative shrink-0 w-[143px]" data-name="social media bt">
      <div aria-hidden="true" className="absolute border-b border-solid border-white inset-[0_0_-1px_0] pointer-events-none" />
      <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-left text-white tracking-[-0.45px] whitespace-nowrap">2025 서울빛초롱축제</p>
    </div>
  );
}

function SocialMediaBt1() {
  return (
    <div className="content-stretch flex h-[34px] items-center p-[8px] relative shrink-0 w-[121px]" data-name="social media bt" role="button" tabIndex="0">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dad6d6] text-[15px] text-left tracking-[-0.45px] whitespace-nowrap">2025 광화문 마켓</p>
    </div>
  );
}

function Component23() {
  return (
    <div className="absolute content-stretch flex gap-[7px] h-[217.337px] items-center left-[34px] top-[17px] w-[317px]" data-name="컨텐츠영역">
      <div className="h-full relative rounded-[12px] shrink-0 w-[155px]" data-name="instagram card">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgInstagramCard} />
      </div>
      <div className="aspect-[155/217.3369598388672] h-full relative rounded-[12px] shrink-0" data-name="instagram card">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgInstagramCard1} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-[303px] items-start overflow-clip relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="소셯미디어">
        <button className="content-stretch cursor-pointer flex items-start justify-between relative shrink-0 w-[287px]" data-name="소셜 버튼">
          <SocialMediaBt />
          <SocialMediaBt1 />
        </button>
        <div className="h-[253px] overflow-clip relative shrink-0 w-full" data-name="(모바일)서울빛 콘텐츠캐러셀">
          <Component23 />
          <button className="absolute bg-white content-stretch cursor-pointer flex flex-col items-center justify-center left-[-20px] px-[10px] py-[16px] rounded-[100px] size-[84px] top-[82px]" data-name="좌우버튼">
            <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#59433a] text-[45px] text-center tracking-[-2.25px] w-full">
              <p className="leading-[normal]">{`<`}</p>
            </div>
          </button>
          <button className="absolute bg-white content-stretch cursor-pointer flex flex-col h-[84px] items-end justify-center left-[329px] px-[10px] py-[16px] rounded-[100px] top-[83px] w-[85px]" data-name="좌우버튼">
            <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#59433a] text-[45px] text-center tracking-[-2.25px] w-full">
              <p className="leading-[normal]">{`>`}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="content-stretch flex gap-[11px] items-center justify-center relative shrink-0 w-[354px]" data-name="인스타그램 연동 버튼들">
      <div className="content-stretch flex gap-[2px] items-center justify-center px-[34px] py-[10px] relative rounded-[16px] shrink-0" data-name="social media button">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="relative shrink-0 size-[12px]" data-name="instagram logo">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p179a8d00} fill="var(--fill-0, white)" id="instagram logo" />
          </svg>
        </div>
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.6px] whitespace-nowrap">2025 서울빛초롱축제</p>
      </div>
      <div className="content-stretch flex gap-[2px] items-center justify-center px-[34px] py-[10px] relative rounded-[16px] shrink-0" data-name="social media button">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="relative shrink-0 size-[12px]" data-name="instagram logo">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p179a8d00} fill="var(--fill-0, white)" id="instagram logo" />
          </svg>
        </div>
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.6px] whitespace-nowrap">2025 광화문 마켓</p>
      </div>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="SOCIAL MEDIA">
      <Frame4 />
      <Frame5 />
      <Component24 />
    </div>
  );
}

function Component27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px min-w-px not-italic relative text-white" data-name="리플질문 좌측">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12px] tracking-[-0.6px] w-full">리플렛</p>
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[22px] tracking-[-1.1px] w-full">
        <p className="leading-[normal] mb-0">2025</p>
        <p className="leading-[normal]">서울빛초롱축제</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Component27 />
      <div className="content-stretch flex items-center justify-end px-[20px] py-[6px] relative rounded-[20px] shrink-0" data-name="다운로드 버튼">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[21px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.6px] whitespace-nowrap">{`다운로드->`}</p>
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px min-w-px not-italic relative text-white" data-name="리플질문 좌측">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12px] tracking-[-0.6px] w-full">리플렛</p>
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[22px] tracking-[-1.1px] w-full">
        <p className="leading-[normal] mb-0">2025</p>
        <p className="leading-[normal]">광화문 마켓</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Component28 />
      <div className="content-stretch flex items-center justify-end px-[20px] py-[6px] relative rounded-[20px] shrink-0" data-name="다운로드 버튼">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[21px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.6px] whitespace-nowrap">{`다운로드->`}</p>
      </div>
    </div>
  );
}

function Component26() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="리플렛 바로가기 버튼들">
      <div className="bg-[#ad2924] content-stretch flex flex-col items-start min-w-[371px] overflow-clip px-[25px] py-[21px] relative rounded-[12px] shrink-0 w-[371px]" data-name="리플질문 카드">
        <Frame6 />
      </div>
      <div className="bg-[#ad2924] content-stretch flex flex-col items-start min-w-[371px] overflow-clip px-[25px] py-[21px] relative rounded-[12px] shrink-0 w-[371px]" data-name="리플질문 카드">
        <Frame7 />
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="리플렛">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-white tracking-[-0.84px] w-full">리플렛</p>
      <Component26 />
    </div>
  );
}

function Component31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px min-w-px not-italic relative text-white" data-name="리플질문 좌측">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12px] tracking-[-0.6px] w-full">자주하는 질문</p>
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[22px] tracking-[-1.1px] w-full">
        <p className="leading-[normal] mb-0">2025</p>
        <p className="leading-[normal]">서울빛초롱축제</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Component31 />
      <div className="content-stretch flex items-center justify-end px-[20px] py-[6px] relative rounded-[20px] shrink-0" data-name="다운로드 버튼">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[21px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.6px] whitespace-nowrap">{`바로가기 ->`}</p>
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px min-w-px not-italic relative text-white" data-name="리플질문 좌측">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12px] tracking-[-0.6px] w-full">자주하는 질문</p>
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[22px] tracking-[-1.1px] w-full">
        <p className="leading-[normal] mb-0">2025</p>
        <p className="leading-[normal]">광화문 마켓</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Component32 />
      <div className="content-stretch flex items-center justify-end px-[20px] py-[6px] relative rounded-[20px] shrink-0" data-name="다운로드 버튼">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[21px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.6px] whitespace-nowrap">{`바로가기 ->`}</p>
      </div>
    </div>
  );
}

function Component30() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="질문 버튼들">
      <div className="bg-[#ad2924] content-stretch flex flex-col items-start min-w-[371px] overflow-clip px-[25px] py-[21px] relative rounded-[12px] shrink-0 w-[371px]" data-name="리플질문 카드">
        <Frame8 />
      </div>
      <div className="bg-[#ad2924] content-stretch flex flex-col items-start min-w-[371px] overflow-clip px-[25px] py-[21px] relative rounded-[12px] shrink-0 w-[371px]" data-name="리플질문 카드">
        <Frame9 />
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="질문답">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-white tracking-[-0.84px] w-full">FAQ</p>
      <Component30 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#981a17] content-stretch flex flex-col gap-[60px] h-[1315px] items-center overflow-clip px-[16px] py-[20px] relative shrink-0 w-[402px]">
      <SocialMedia />
      <Component25 />
      <Component29 />
    </div>
  );
}

function Component34() {
  return (
    <div className="content-stretch flex items-center overflow-x-auto overflow-y-clip relative shrink-0 w-[370px]" data-name="목차">
      <div className="content-stretch flex gap-[30px] items-center relative shrink-0" data-name="아카이브 버튼_최종">
        <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="아카이브 버튼_onoff">
          <div aria-hidden="true" className="absolute border-[#ad2924] border-b-2 border-solid inset-0 pointer-events-none" />
          <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ad2924] text-[15px] tracking-[-0.45px] whitespace-nowrap">2025 서울빛초롱축제 사진</p>
        </div>
        <button className="content-stretch cursor-pointer flex items-center justify-center p-[8px] relative shrink-0" data-name="아카이브 버튼_onoff">
          <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2d201b] text-[15px] text-left tracking-[-0.45px] whitespace-nowrap">서울빛초롱축제 역대 사진</p>
        </button>
        <button className="content-stretch cursor-pointer flex items-center justify-center p-[8px] relative shrink-0" data-name="아카이브 버튼_onoff">
          <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2d201b] text-[15px] text-left tracking-[-0.45px] whitespace-nowrap">2025 광화문 마켓 사진</p>
        </button>
        <button className="content-stretch cursor-pointer flex items-center justify-center p-[8px] relative shrink-0" data-name="아카이브 버튼_onoff">
          <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2d201b] text-[15px] text-left tracking-[-0.45px] whitespace-nowrap">광화문 마켓 역대 사진</p>
        </button>
      </div>
    </div>
  );
}

function Component33() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="아카이브 상단">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[28px] tracking-[-0.84px] whitespace-nowrap">아카이브</p>
      <Component34 />
    </div>
  );
}

function Frame12() {
  return <div className="flex-[1_0_0] h-[131px] min-h-px min-w-px" />;
}

function Component38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] w-full" data-name="사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img1} />
      <Frame12 />
    </div>
  );
}

function SmallButton() {
  return (
    <div className="bg-[#c30a0a] content-stretch flex items-center justify-center px-[6px] py-[3px] relative rounded-[8px] shrink-0" data-name="small button">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">서울빛초롱축제</p>
    </div>
  );
}

function Component40() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[16px] relative shrink-0 w-full" data-name="아카이브 내용">
      <SmallButton />
      <p className="font-['Pretendard:Regular',sans-serif] h-[14px] leading-[normal] min-w-full not-italic relative shrink-0 text-[12px] text-black tracking-[-0.6px] w-[min-content]">2025 서울빛초롱축제, 팔마</p>
    </div>
  );
}

function Component39() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)] w-[169px]" data-name="글 프레임">
      <div className="content-stretch flex flex-col items-start pb-[24px] pl-[15px] pr-[20px] pt-[2px] relative size-full">
        <Component40 />
      </div>
    </div>
  );
}

function Component37() {
  return (
    <div className="content-stretch flex flex-col h-[241px] items-start relative shrink-0 w-[169px]" data-name="기본">
      <Component38 />
      <Component39 />
    </div>
  );
}

function Frame13() {
  return <div className="flex-[1_0_0] h-[131px] min-h-px min-w-px" />;
}

function Component42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] w-full" data-name="사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img2} />
      <Frame13 />
    </div>
  );
}

function SmallButton1() {
  return (
    <div className="bg-[#c30a0a] content-stretch flex items-center justify-center px-[6px] py-[3px] relative rounded-[8px] shrink-0" data-name="small button">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">서울빛초롱축제</p>
    </div>
  );
}

function Component44() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[16px] relative shrink-0 w-full" data-name="아카이브 내용">
      <SmallButton1 />
      <p className="font-['Pretendard:Regular',sans-serif] h-[14px] leading-[normal] min-w-full not-italic relative shrink-0 text-[12px] text-black tracking-[-0.6px] w-[min-content]">2025 서울빛초롱축제, 시등의 순간</p>
    </div>
  );
}

function Component43() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)] w-full" data-name="글 프레임">
      <div className="content-stretch flex flex-col items-start pb-[24px] pl-[15px] pr-[20px] pt-[2px] relative size-full">
        <Component44 />
      </div>
    </div>
  );
}

function Component41() {
  return (
    <div className="content-stretch flex flex-col h-[241px] items-start relative shrink-0 w-[169px]" data-name="기본">
      <Component42 />
      <Component43 />
    </div>
  );
}

function Component36() {
  return (
    <div className="content-between flex flex-wrap gap-x-[16px] h-[208px] items-start justify-center relative shrink-0 w-[384px]" data-name="모.아 상단">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="아카이브">
        <Component37 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="아카이브">
        <Component41 />
      </div>
    </div>
  );
}

function Frame14() {
  return <div className="flex-[1_0_0] h-[131px] min-h-px min-w-px" />;
}

function Component47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] w-full" data-name="사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img3} />
      <Frame14 />
    </div>
  );
}

function SmallButton2() {
  return (
    <div className="bg-[#c30a0a] content-stretch flex items-center justify-center px-[6px] py-[3px] relative rounded-[8px] shrink-0" data-name="small button">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">서울빛초롱축제</p>
    </div>
  );
}

function Component49() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[16px] relative shrink-0 w-full" data-name="아카이브 내용">
      <SmallButton2 />
      <div className="font-['Pretendard:Regular',sans-serif] h-[14px] leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-black tracking-[-0.6px] w-[min-content]">
        <p className="leading-[normal] mb-0">2025 서울빛초롱축제, 옛빛</p>
        <p className="leading-[normal]">+최초의 전화기</p>
      </div>
    </div>
  );
}

function Component48() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)] w-full" data-name="글 프레임">
      <div className="content-stretch flex flex-col items-start pb-[24px] pl-[15px] pr-[20px] pt-[2px] relative size-full">
        <Component49 />
      </div>
    </div>
  );
}

function Component46() {
  return (
    <div className="content-stretch flex flex-col h-[241px] items-start relative shrink-0 w-[169px]" data-name="기본">
      <Component47 />
      <Component48 />
    </div>
  );
}

function Frame15() {
  return <div className="flex-[1_0_0] h-[131px] min-h-px min-w-px" />;
}

function Component51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[12px] w-full" data-name="사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img4} />
      <Frame15 />
    </div>
  );
}

function SmallButton3() {
  return (
    <div className="bg-[#c30a0a] content-stretch flex items-center justify-center px-[6px] py-[3px] relative rounded-[8px] shrink-0" data-name="small button">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">서울빛초롱축제</p>
    </div>
  );
}

function Component53() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[16px] relative shrink-0 w-full" data-name="아카이브 내용">
      <SmallButton3 />
      <p className="font-['Pretendard:Regular',sans-serif] h-[14px] leading-[normal] min-w-full not-italic relative shrink-0 text-[12px] text-black tracking-[-0.6px] w-[min-content]">2025 서울빛초롱축제, 움직이는 빛</p>
    </div>
  );
}

function Component52() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)] w-full" data-name="글 프레임">
      <div className="content-stretch flex flex-col items-start pb-[24px] pl-[15px] pr-[20px] pt-[2px] relative size-full">
        <Component53 />
      </div>
    </div>
  );
}

function Component50() {
  return (
    <div className="content-stretch flex flex-col h-[241px] items-start relative shrink-0 w-[169px]" data-name="기본">
      <Component51 />
      <Component52 />
    </div>
  );
}

function Component45() {
  return (
    <div className="content-start flex flex-wrap gap-[67px_16px] h-[208px] items-start justify-center relative shrink-0 w-[384px]" data-name="모.아 하단">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="아카이브">
        <Component46 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="아카이브">
        <Component50 />
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="content-start flex flex-wrap gap-y-[56px] h-[526px] items-start justify-between relative shrink-0 w-[384px]" data-name="모바일 아카이브">
      <Component36 />
      <Component45 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#fef8eb] content-stretch flex flex-col gap-[18px] h-[1513px] items-center overflow-clip pt-[20px] px-[16px] relative shrink-0 w-[402px]" data-name="Frame4">
      <Component33 />
      <Component35 />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[#1c3142] content-stretch flex flex-col items-center pb-[17px] pt-[36px] px-[16px] relative size-full" data-name="Mobile">
      <Frame />
      <Frame1 />
      <Frame3 />
      <Frame11 />
    </div>
  );
}