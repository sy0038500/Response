import svgPaths from "./svg-qyrbugrvox";
import img from "figma:asset/46a64cdece3f20637c4509573cfc1134ea33afc5.png";
import img1 from "figma:asset/f62b816f989e175972942543a3cac06a50048bb3.png";
import img2 from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import img3 from "figma:asset/13280504daccd58bd49ca322199090bdf84f3cfd.png";
import img4 from "figma:asset/3461c9a09f6c09ba7a93a18804ee14caff767c10.png";
import img5 from "figma:asset/f0f64250a4bb5300af56e030d72b4c3f68dbb606.png";
import img6 from "figma:asset/cceceaf27999680eca7beeee46d8ca04594e18b1.png";
import img7 from "figma:asset/b22490d8555e61a3243c614c89525d38c4b7c8d7.png";
import img8 from "figma:asset/55b1b062a48ed4d2175c27ad31555f90caf17993.png";
import img9 from "figma:asset/ae08e5f9803d54ca5e4a6646bbc6f6002f4ddd38.png";
import img10 from "figma:asset/ab33551cf9477fccc92c02c3c1e617f9bb994700.png";
import img11 from "figma:asset/7815174a64ca2d32ab191491353995d4b59e16d6.png";
import img12 from "figma:asset/dd504d7be4ed23ce0d3b84f258a8bd07c5089d9c.png";
import img13 from "figma:asset/d94d735e849e34654111146df4954cd0f45f8ccd.png";
import img14 from "figma:asset/44044abf48f70d556a9d423e1b1b9b209feab0f6.png";
import img15 from "figma:asset/ad4c15d53db8ffc288291266422c8055facb577b.png";
import img16 from "figma:asset/3e82055d0694034f7c0b04bc090e9de58498a6d4.png";

function Component2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[269px] items-start justify-center left-[calc(50%+131.33px)] overflow-clip rounded-[12px] top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img} />
      <div className="h-[298px] rounded-[12px] shrink-0 w-[622px]" data-name="Rectangle" />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#cca1a1] h-[182px] min-w-[370px] overflow-clip relative rounded-[12px] shrink-0 w-[457.5px]" data-name="조형물사진">
      <Component2 />
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

function Component4() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">청계광장~광통교</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">시등의 순간</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        1887년 3월, 경복궁 건청궁에서 밝혀진 최초의 전등을 LED 영상과 한지 등(燈)을 통해 재현합니다. 옛 사람들이 넋을 놓고 바라본 첫 점등의 마법 같은 순간을 함께 느껴보세요.
      </p>
      <Component4 />
    </div>
  );
}

function ArrowSet() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame />
          <ArrowSet />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[54px] top-[139px] w-[370px]" data-name="서울빛초롱축제 조형물 카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component1 />
        <Component3 />
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[269px] items-center justify-center left-[calc(50%+131.33px)] overflow-clip top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      <div className="h-[198px] shrink-0 w-[413px]" data-name="Rectangle" />
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#cca1a1] flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component7 />
    </div>
  );
}

function LocationLogo1() {
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

function Component9() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo1 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">광통교~광교</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">갓</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>{`힙한 트렌드로 재조명된 조선시대 선비의 '갓'을 모티브로 한 조명 연출로, 전통과 현대가 어우러진 글로벌 한국 문화를 선보입니다.`}</p>
      <Component9 />
    </div>
  );
}

function ArrowSet1() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame1 />
          <ArrowSet1 />
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[54px] top-[640px] w-[370px]" data-name="서울빛초롱축제 조형물 카드">
      <div className="content-start flex flex-wrap gap-[16px] h-[467px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component6 />
        <Component8 />
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="-translate-x-1/2 absolute h-[269px] left-[calc(50%+131.33px)] top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
    </div>
  );
}

function Component11() {
  return (
    <div className="flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img2} />
      <Component12 />
    </div>
  );
}

function LocationLogo2() {
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

function Component14() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo2 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">광교~장통교</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">청계의 빛 : 청계천의 과거</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>{`청계천 복원 20주년을 기념하여 제작된 서울빛초롱축제 특별전 작품입니다. 서울의 근현대사와 함께 '판자촌'과 '수표석'으로 서민들의 삶을 따뜻하게 재조명합니다. 50~60년대 청계천의 활기찬 공동체와 희망을 간직했던 사람들의 이야기를 담아 소중한 삶의 흔적을 가까이에서 느낄 수 있습니다. 과거에는 청계천의 수위를 측정하기 위해 수표석을 세워 강수량을 측정하였습니다.`}</p>
      <Component14 />
    </div>
  );
}

function ArrowSet2() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame2 />
          <ArrowSet2 />
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[64px] top-[1157px] w-[370px]" data-name="서울빛초롱축제 조형물 카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component11 />
        <Component13 />
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="absolute aspect-[542/422] left-[-197px] right-[-197px] top-[-100px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
    </div>
  );
}

function Component16() {
  return (
    <div className="flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component17 />
    </div>
  );
}

function LocationLogo3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="location_logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="location_logo">
          <path d={svgPaths.p1c8bc980} fill="var(--fill-0, #C30A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component19() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo3 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">장통교~삼일교</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">빛의 오로라</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        삼일교 하단의 프로젝션과 레이저로 연출하여 청계천에서 오로라를 보고 즐길 수 있습니다.
      </p>
      <Component19 />
    </div>
  );
}

function ArrowSet3() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame3 />
          <ArrowSet3 />
        </div>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[64px] top-[1691px] w-[370px]" data-name="서울빛초롱축제 조형물 카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component16 />
        <Component18 />
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="-translate-x-1/2 absolute h-[269px] left-[calc(50%+131.33px)] top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
    </div>
  );
}

function Component21() {
  return (
    <div className="bg-[#cca1a1] flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component22 />
    </div>
  );
}

function LocationLogo4() {
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

function Component24() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo4 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">우이교~쌍한교</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">어가행렬</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <div className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[0] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal] mb-0">2024년 서울빛초롱축제에서 다시 보고 싶은 조형물 1위!</p>
        <p className="leading-[normal]">종묘대제의 큰 의례인 임금행차, 조선시대의 어가행렬을 모티브로 연출하여 역사 속 서울(한양)에서 전통과 현대가 어우러진 빛의 연희를 함께 즐길 수 있습니다.</p>
      </div>
      <Component24 />
    </div>
  );
}

function ArrowSet4() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame4 />
          <ArrowSet4 />
        </div>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[64px] top-[2225px] w-[370px]" data-name="서울빛초롱축제 조형물 카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component21 />
        <Component23 />
      </div>
    </div>
  );
}

function Frame8() {
  return <div className="h-[182px] shrink-0 w-[382px]" />;
}

function Component27() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[269px] items-center justify-center left-[calc(50%+131.33px)] overflow-clip top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
      <Frame8 />
    </div>
  );
}

function Component26() {
  return (
    <div className="bg-[#cca1a1] flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component27 />
    </div>
  );
}

function LocationLogo5() {
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

function Component29() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo5 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">산타마을 곳곳에 마련된 크리스마스 포토존을 찾아 행복한 추억을 남겨보세요.</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        겨울동화 속 산타마을의 시작을 알리는 산타마을 동화책, 오감을 자극하는 호두까기 인형과 진저브레드 쿠키의 집, 산타마을의 전경을 배경으로 담을 수 있는 거울 포토존까지 놓치지 말고 모두 만나보세요!
      </p>
      <Component29 />
    </div>
  );
}

function ArrowSet5() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame5 />
          <ArrowSet5 />
        </div>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[578px] top-[43px] w-[370px]" data-name="광화문마켓 조형물_카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component26 />
        <Component28 />
      </div>
    </div>
  );
}

function Frame9() {
  return <div className="h-[196px] shrink-0 w-[421px]" />;
}

function Component32() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[269px] items-center justify-center left-[calc(50%+131.33px)] overflow-clip top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7} />
      <Frame9 />
    </div>
  );
}

function Component31() {
  return (
    <div className="bg-[#cca1a1] flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component32 />
    </div>
  );
}

function LocationLogo6() {
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

function Component34() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo6 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">① 산타마을 동화책</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        겨울동화 속 산타마을에 오신 여러분을 환영합니다! 마켓 입구에서 만나보실 수 있는 동화책이 어려분을 산타마을로 안내합니다.
      </p>
      <Component34 />
    </div>
  );
}

function ArrowSet6() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component33() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame6 />
          <ArrowSet6 />
        </div>
      </div>
    </div>
  );
}

function Component30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578px] top-[561px] w-[378px]" data-name="광화문마켓 조형물_카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-[370px]" data-name="호버">
        <Component31 />
        <Component33 />
      </div>
    </div>
  );
}

function Frame10() {
  return <div className="h-[188px] shrink-0 w-[406px]" />;
}

function Component37() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[269px] items-center justify-center left-[calc(50%+131.33px)] overflow-clip top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img8} />
      <Frame10 />
    </div>
  );
}

function Component36() {
  return (
    <div className="bg-[#cca1a1] flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component37 />
    </div>
  );
}

function LocationLogo7() {
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

function Component39() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo7 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">② 호두까기 인형의 집</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        호두까기, 발레리나 인형과 함께 연극의 한 장면 같은 포토존에서 사진을 찍어보세요. 포토존에서 흘러나오는 클래식한 음악이 마치 무대 속 주인공이 된 듯한 기분을 느끼게 해 줄 거에요!
      </p>
      <Component39 />
    </div>
  );
}

function ArrowSet7() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component38() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame7 />
          <ArrowSet7 />
        </div>
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578px] top-[1093px] w-[370px]" data-name="광화문마켓 조형물_카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component36 />
        <Component38 />
      </div>
    </div>
  );
}

function Component42() {
  return (
    <div className="-translate-x-1/2 absolute h-[269px] left-[calc(50%+131.33px)] top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img9} />
    </div>
  );
}

function Component41() {
  return (
    <div className="bg-[#cca1a1] flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component42 />
    </div>
  );
}

function LocationLogo8() {
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

function Component44() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo8 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">③ 행운의 목마</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        2026년은 붉은 말의 해! 산타마을이 궁금했던 행운의 목마가 크리스마스 장식으로 드레스코드를 맞춰 입고 놀러왔어요.
      </p>
      <Component44 />
    </div>
  );
}

function ArrowSet8() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component43() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame11 />
          <ArrowSet8 />
        </div>
      </div>
    </div>
  );
}

function Component40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578px] top-[1625px] w-[370px]" data-name="광화문마켓 조형물_카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component41 />
        <Component43 />
      </div>
    </div>
  );
}

function Component47() {
  return (
    <div className="-translate-x-1/2 absolute h-[269px] left-[calc(50%+131.33px)] top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img10} />
    </div>
  );
}

function Component46() {
  return (
    <div className="bg-[#cca1a1] flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component47 />
    </div>
  );
}

function LocationLogo9() {
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

function Component49() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo9 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">④ 진저브레드 쿠키의 집</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        산타마을을 진저브레드 쿠키 향으로 가득 채우는 과자집이에요. 진저브레드 쿠키의 집에서는 소원 편지도 접수 받고 있으니 크리스마스 소원이 있다면 여기서 알려주세요!
      </p>
      <Component49 />
    </div>
  );
}

function ArrowSet9() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component48() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame12 />
          <ArrowSet9 />
        </div>
      </div>
    </div>
  );
}

function Component45() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578px] top-[2133px] w-[370px]" data-name="광화문마켓 조형물_카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component46 />
        <Component48 />
      </div>
    </div>
  );
}

function Component52() {
  return (
    <div className="-translate-x-1/2 absolute h-[269px] left-[calc(50%+131.33px)] top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img11} />
    </div>
  );
}

function Component51() {
  return (
    <div className="bg-[#cca1a1] flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component52 />
    </div>
  );
}

function LocationLogo10() {
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

function Component54() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo10 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">⑤ 산타마을 급행열차</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        산타가 두고 간 크리스마스 선물을 가득 싣고 산타마을 급행열차가 도착했어요!
      </p>
      <Component54 />
    </div>
  );
}

function ArrowSet10() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component53() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame13 />
          <ArrowSet10 />
        </div>
      </div>
    </div>
  );
}

function Component50() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578px] top-[2665px] w-[370px]" data-name="광화문마켓 조형물_카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component51 />
        <Component53 />
      </div>
    </div>
  );
}

function Component57() {
  return (
    <div className="-translate-x-1/2 absolute h-[269px] left-[calc(50%+131.33px)] top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img12} />
    </div>
  );
}

function Component56() {
  return (
    <div className="bg-[#cca1a1] flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component57 />
    </div>
  );
}

function LocationLogo11() {
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

function Component59() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo11 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">⑥ 눈꽃 분수대</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <div className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[0] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal] mb-0">눈꽃 분수대는 눈송이가 가득 담긴 산타마을의 명물이에요.</p>
        <p className="leading-[normal]">산타마을에는 분수대 꼭대기에 눈송이를 넣으면 행운이 찾아온다는 소문이 있는데요, 직접 눈송이를 던져 확인해보세요!</p>
      </div>
      <Component59 />
    </div>
  );
}

function ArrowSet11() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component58() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame15 />
          <ArrowSet11 />
        </div>
      </div>
    </div>
  );
}

function Component55() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578px] top-[3153px] w-[370px]" data-name="광화문마켓 조형물_카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component56 />
        <Component58 />
      </div>
    </div>
  );
}

function Component62() {
  return (
    <div className="-translate-x-1/2 absolute h-[269px] left-[calc(50%+131.33px)] top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img13} />
    </div>
  );
}

function Component61() {
  return (
    <div className="bg-[#cca1a1] flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component62 />
    </div>
  );
}

function LocationLogo12() {
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

function Component64() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo12 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">⑦ 회전목마 티켓부스</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <div className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[0] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal] mb-0">이곳에서 루돌프 회전목마 탑승을 위한 티켓을 받을 수 있습니다.</p>
        <p className="leading-[normal]">산타마을 스탬프 투어를 완료한 누구나 탑승 티켓을 받으실 수 있어요!</p>
      </div>
      <Component64 />
    </div>
  );
}

function ArrowSet12() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component63() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame16 />
          <ArrowSet12 />
        </div>
      </div>
    </div>
  );
}

function Component60() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578px] top-[3653px] w-[370px]" data-name="광화문마켓 조형물_카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component61 />
        <Component63 />
      </div>
    </div>
  );
}

function Component67() {
  return (
    <div className="-translate-x-1/2 absolute h-[269px] left-[calc(50%+131.33px)] top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img14} />
    </div>
  );
}

function Component66() {
  return (
    <div className="flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component67 />
    </div>
  );
}

function LocationLogo13() {
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

function Component69() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo13 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">⑧ 거울 포토존</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        캔디케인을 닮은 거울 포토존에서는 산타마을 빌리지 전경을 배경으로 사진을 남길 수 있어요.
      </p>
      <Component69 />
    </div>
  );
}

function ArrowSet13() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component68() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame17 />
          <ArrowSet13 />
        </div>
      </div>
    </div>
  );
}

function Component65() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578px] top-[4139px] w-[370px]" data-name="광화문마켓 조형물_카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component66 />
        <Component68 />
      </div>
    </div>
  );
}

function Component72() {
  return (
    <div className="-translate-x-1/2 absolute h-[269px] left-[calc(50%+131.33px)] top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img15} />
    </div>
  );
}

function Component71() {
  return (
    <div className="flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component72 />
    </div>
  );
}

function LocationLogo14() {
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

function Component74() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo14 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">⑨ 크리스마스 요정의 집</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        크리스마스 요정이 잠시 머무는 집이에요. 따듯한 벽난로에서 앞에서 몸을 녹이는 요정과 함께 사진을 찍어보세요.
      </p>
      <Component74 />
    </div>
  );
}

function ArrowSet14() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component73() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame18 />
          <ArrowSet14 />
        </div>
      </div>
    </div>
  );
}

function Component70() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578px] top-[4651px] w-[370px]" data-name="광화문마켓 조형물_카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component71 />
        <Component73 />
      </div>
    </div>
  );
}

function Component77() {
  return (
    <div className="-translate-x-1/2 absolute h-[269px] left-[calc(50%+131.33px)] top-0 w-[558.692px]" data-name="기본사진">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img16} />
    </div>
  );
}

function Component76() {
  return (
    <div className="bg-[#cca1a1] flex-[1_0_0] h-[182px] min-h-px min-w-[370px] overflow-clip relative rounded-[12px]" data-name="조형물사진">
      <Component77 />
    </div>
  );
}

function LocationLogo15() {
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

function Component79() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="카드_조형물_위치">
      <LocationLogo15 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">산타마을 입구, 산타마을 놀이광장, 산타마을 마켓 빌리지</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">⑩ 산타마을 이정표</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#59433a] text-[22px] tracking-[-1.1px] w-[min-content]">ㅡ</p>
      <p className="font-['Pretendard:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] w-[min-content]" style={{ fontVariationSettings: "'wght' 400" }}>
        산타마을의 끝을 안내하는 이정표입니다. 겨울동화 속 산타마을에서의 하루는 어떠셨나요? 산타마을을 모두 구경하고 이곳에서 인증 사진을 남겨보세요!
      </p>
      <Component79 />
    </div>
  );
}

function ArrowSet15() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="arrow set">
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">←</p>
      </div>
      <div className="content-stretch flex flex-col h-[50px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 w-[30px]" data-name="arrow_button">
        <div aria-hidden="true" className="absolute border-[#59433a] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#59433a] text-[12px] tracking-[-0.6px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Component78() {
  return (
    <div className="bg-white flex-[1_0_0] h-[269px] min-h-px min-w-px relative rounded-[12px]" data-name="주요 조형물">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[47px] items-end justify-center px-[17px] py-[24px] relative size-full">
          <Frame19 />
          <ArrowSet15 />
        </div>
      </div>
    </div>
  );
}

function Component75() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578px] top-[5163px] w-[370px]" data-name="광화문마켓 조형물_카드">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[370px] overflow-clip relative shrink-0 w-full" data-name="호버">
        <Component76 />
        <Component78 />
      </div>
    </div>
  );
}

export default function Frame14() {
  return (
    <div className="bg-white relative size-full">
      <Component />
      <Component5 />
      <Component10 />
      <Component15 />
      <Component20 />
      <Component25 />
      <Component30 />
      <Component35 />
      <Component40 />
      <Component45 />
      <Component50 />
      <Component55 />
      <Component60 />
      <Component65 />
      <Component70 />
      <Component75 />
    </div>
  );
}