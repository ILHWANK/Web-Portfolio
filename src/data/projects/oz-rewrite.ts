export type MediaItem =
    | { type: "image"; src: string; alt: string }
    | { type: "gif"; src: string; alt: string }
    | { type: "video"; src: string; poster?: string };

export type FeatureCard = {
  title: string;
  summary: string;
  media?: MediaItem[];
  points?: string[];
  notionHref?: string;
};

export type CaseSection = {
  kind: "case";
  id: string;
  title: string;
  subtitle?: string;
  cards: FeatureCard[];
};

export type BulletsSection = {
  kind: "bullets";
  id: string;
  title: string;
  bullets: string[];
};

export type ProjectSection = CaseSection | BulletsSection;

export type ProjectData = {
  slug: string;
  title: string;
  tagline?: string;
  headline?: string;
  description?: string;
  tags?: string[];
  primaryMedia?: MediaItem;
  sections: ProjectSection[];
};

const ROOT = `${import.meta.env.BASE_URL}media/projects/oz-rewrite`;
const IMG = `${ROOT}/image`;
const VID = `${ROOT}/video`;

const ozRewrite: ProjectData = {
  slug: "oz-rewrite",
  title: "OZ:Rewrite",
  tagline: "Unity(UGUI) 기반 라이브 서비스 클라이언트",
  headline: "라이브 서비스 UI·연출·최적화 사례를 미디어 중심으로 정리",
  description:
      "상점·친구·메일·미션·인벤토리 등 핵심 UI 콘텐츠와 이벤트 미니게임/왕국/스테이지/영웅 정보/소환 시스템을 설계·구현하고, 운영 이슈를 구조적으로 개선했습니다.",
  tags: ["Unity", "UGUI", "Addressables", "UniTask", "Timeline", "Spine"],

  sections: [
    // -----------------------------
    // 0. 기술 스택
    // -----------------------------
    {
      kind: "bullets",
      id: "tech-stack",
      title: "0. 기술 스택",
      bullets: [
        "Unity(UGUI) 기반 라이브 서비스 클라이언트 개발",
        "Addressables 운영 / UniTask 비동기 구조 / DOTween · Timeline 연출",
        "CRIWARE 영상·오디오 / Cinemachine · NavMesh",
        "LoopScrollRect / Spine / Shader",
        "Unity Profiler · Xcode Instruments · Memory Profiler",
        "Jenkins · Jira · Confluence · Slack / Rider",
        "C# · 객체지향 설계 · 디자인 패턴 기반 구조화",
      ],
    },

    // -----------------------------
    // 1. 라이브 서비스 핵심 콘텐츠 UI 시스템
    // -----------------------------
    {
      kind: "bullets",
      id: "core-ui-overview",
      title: "1. 라이브 서비스 핵심 콘텐츠 UI 시스템",
      bullets: [
        "담당: 상점/친구/메일/창고(인벤토리)/미션 등 핵심 UI 콘텐츠 전반 설계·구현",
        "문제: 재화/구매 방식/개편 요청이 반복되어 구조가 파편화될 위험",
        "목표: 유저 불편 최소화 + 변경을 흡수 가능한 재사용 구조 유지",
      ],
    },
    {
      kind: "case",
      id: "core-ui-cases",
      title: "1-1. 구현 / 개선 사례",
      subtitle: "대표 UI 콘텐츠별 미디어(이미지/영상) + 핵심 포인트",
      cards: [
        {
          title: "Shop",
          summary: "공통 Slot + UIStyle로 다양한 재화/구매 분기 UI를 통합",
          media: [
            { type: "image", src: `${IMG}/shop_main1.jpg`, alt: "상점 메인" },
            { type: "image", src: `${IMG}/shop_payment2.jpg`, alt: "상점 다수 구매" },
            { type: "image", src: `${IMG}/shop_main2.jpg`, alt: "상점 메인2" },
            { type: "image", src: `${IMG}/shop_payment1.jpg`, alt: "상점 단일 구매" },
          ],
          points: [
            "UIStyle 개념으로 공통 Slot Prefab 구조화(표현 차이만 분리)",
            "일괄/개별/제한 수량 구매 등 분기 지원 + 소모 재화 변경 대응",
            "재화 추가에도 최소 수정으로 확장 가능하도록 Prefab/코드 설계",
            "구매 확인/결과/경고 등 구매 관련 팝업 UI 전반 개발",
            "구조 재사용으로 이후 ‘왕국 자판기’ 콘텐츠를 빠르게 구현(상점 Prefab/Code Common 공용화 포함)",
          ],
          notionHref: "#",
        },

        {
          title: "Mail",
          summary: "대량 메일에서도 서버 부하를 줄이는 점진 로딩 구조",
          media: [
            { type: "image", src: `${IMG}/mail_main.jpg`, alt: "메일 리스트" },
            { type: "image", src: `${IMG}/mail_main2.jpg`, alt: "스크롤 후 추가 로딩" },
            { type: "gif", src: `${IMG}/mail_scroll.gif`, alt: "보상 수령" },
          ],
          points: [
            "메일 수신/정렬/보상 수령 등 메일 기능 전반 개발",
            "전량 1회 수신 방식의 서버 부하 이슈를 점진 로딩으로 개선",
            "예: 50개 단위 요청 → 40개 열람 시 51~100 추가 요청",
            "TCP 딜레이 체감을 줄이기 위해 약간의 여유를 두고 다음 구간을 선요청",
          ],
          notionHref: "#",
        },

        {
          title: "Friend",
          summary: "확장(지원 영웅) 대비 진입 구조 + 테스트 효율 개선",
          media: [
            { type: "image", src: `${IMG}/temppng.png`, alt: "친구 메인" },
            { type: "image", src: `${IMG}/temppng.png`, alt: "친구 메인2" },
            { type: "image", src: `${IMG}/temppng.png`, alt: "등록/검색" },
            { type: "image", src: `${IMG}/temppng.png`, alt: "Info Popup" },
          ],
          points: [
            "추후 ‘지원 영웅’ 기능을 고려해 Panel 진입점/기본 구조 선구축",
            "개발/테스트 효율을 위한 테스트 Packet + Cheat(Tool) 추가",
            "UID → IMID 검색 기준 변경에 맞춰 검색/유효성 검사 로직 수정",
            "친구 등록/정보 확인용 Info Popup 개발",
          ],
          notionHref: "#",
        },

        {
          title: "Mission",
          summary: "일일/주간/업적/이벤트 미션을 공통 구조로 분리",
          media: [
            { type: "image", src: `${IMG}/mission_01.png`, alt: "탭 전환" },
            { type: "image", src: `${IMG}/mission_02.png`, alt: "완료 상태" },
            { type: "image", src: `${IMG}/mission_03.png`, alt: "보상 수령" },
          ],
          points: [
            "일일/주간/업적/전체 미션 기능 전반 개발",
            "이벤트 미션에도 재사용 가능하도록 기본 로직/ UI 분리 설계",
          ],
          notionHref: "#",
        },

        {
          title: "Inventory",
          summary: "기간성 아이템/만료 처리 등 운영 이슈를 구조적으로 반영",
          media: [
            { type: "image", src: `${IMG}/inv_01.png`, alt: "인벤토리 메인" },
            { type: "image", src: `${IMG}/inv_02.png`, alt: "바로가기/획득 경로" },
            { type: "image", src: `${IMG}/inv_03.png`, alt: "확률 띠지" },
            { type: "image", src: `${IMG}/inv_04.png`, alt: "기간/만료 안내" },
          ],
          points: [
            "창고(인벤토리) 기본 기능 개발 + UI 리뉴얼 대응",
            "기간 제한 아이템 남은 기간 표기",
            "만료/이벤트 아이템 변환 재화 안내 팝업",
            "서버와 협업해 만료 시점을 통일 → 불필요 Packet 최소화",
          ],
          notionHref: "#",
        },

        {
          title: "Event UI",
          summary: "이벤트 메인 + 상점/미션 재활용 구조로 개발 속도 단축",
          media: [
            { type: "image", src: `${IMG}/eventui_01.png`, alt: "이벤트 메인1" },
            { type: "image", src: `${IMG}/eventui_02.png`, alt: "이벤트 메인2" },
            { type: "image", src: `${IMG}/eventui_03.png`, alt: "상점 재활용" },
            { type: "image", src: `${IMG}/eventui_04.png`, alt: "미션 재활용" },
          ],
          points: [
            "이벤트 메인 화면 전반 개발(공용화 작업은 다른 담당)",
            "이벤트 재화 보너스/효과 관련 팝업 및 UI 작업",
            "이벤트 상점/미션은 기존 구조/코드 재사용하여 개발",
          ],
          notionHref: "#",
        },

        {
          title: "기타 UI/구조 개선",
          summary: "운영/기획 변경을 ‘땜질’이 아니라 구조 개선으로 흡수",
          points: [
            "아이템 확률 띠지(높음/보통/낮음) 기능 추가 + 테이블 구조 변경 방향 제안",
            "아이템 설명/획득 경로 Popup 리뉴얼: 설명 + 획득경로 통합, Command 기반 바로가기 로직 개선",
            "UI 구조/Addressables 구조 변경 대응: 기존 코드 전반 정리·수정",
            "해상도 대응 컴포넌트(ResolutionBG/Fit/Effect) 개발 + SafeArea 고려",
          ],
          notionHref: "#",
        },
      ],
    },
    {
      kind: "bullets",
      id: "core-ui-result",
      title: "1-2. 결과",
      bullets: [
        "핵심 UI 전반을 안정적으로 운영 가능한 구조로 정립",
        "재화 추가/기획 변경/UI 개편에도 최소 수정으로 대응",
        "서버 부하와 유저 체감 성능을 함께 고려한 구조 개선",
        "이후 콘텐츠 개발 시 UI/로직 재사용으로 개발 속도 단축",
      ],
    },

    // -----------------------------
    // 2. 이벤트용 미니게임 시스템 구현
    // -----------------------------
    {
      kind: "bullets",
      id: "event-minigame-overview",
      title: "2. 이벤트용 미니게임 시스템 구현",
      bullets: [
        "담당: 이벤트 기간 한정 미니게임 콘텐츠 시스템 전반",
        "영웅 투표/타일 깨기/술래 찾기 등 서로 다른 규칙의 미니게임 3종 구현",
        "문제: 짧은 기간, 협업 일정 불일치로 클라가 병목이 되기 쉬움",
        "목표: 단순 기능 구현을 넘어 연출 완성도까지 확보",
      ],
    },
    {
      kind: "case",
      id: "event-minigame-cases",
      title: "2-1. 미니게임 3종",
      subtitle: "미니게임 영상 + 핵심 포인트",
      cards: [
        {
          title: "술래 찾기",
          summary: "Factory/Strategy/State로 생성·행동을 분리해 확장 가능한 구조",
          media: [
            {
              type: "video",
              src: `${VID}/taggerfind.mp4`,
              poster: `${IMG}/temppng.png`,
            },
          ],
          points: [
            "SD 캐릭터 Factory 생성(상태/데이터에 따라 사이즈/속도/대사/오브젝트 등 변형)",
            "술래/일반 행동 차이를 Strategy로 분리",
            "공통 행동은 State로 관리(Idle/Tagger 등)",
            "미니게임 맵 선제 제작으로 아트 협업 지원",
          ],
          notionHref: "#",
        },
        {
          title: "타일 깨기",
          summary: "획득·파괴·발견·라운드 전환까지 UI/로직을 신규 구현",
          media: [{ type: "video", src: `${VID}/tilebreak.mp4` }],
          points: [
            "이벤트 재화로 타일 획득/파괴, 아이템 발견 단계별 연출",
            "NPC 대사/라운드 전환/폭탄 다중 파괴 기능",
            "보상 조건 달성 시 다음 라운드로 진행되는 구조",
          ],
          notionHref: "#",
        },
        {
          title: "영웅 투표",
          summary: "보상/연출 분기 + 라운드 종료 연출까지 포함한 이벤트 구조",
          media: [
            {
              type: "video",
              src: `${VID}/vote.mp4`,
              poster: `${IMG}/temppng.png`,
            },
          ],
          points: [
            "기존 메인 패널 기반으로 보상 정보 팝업/관련 UI 추가",
            "투표 시 캐릭터 투표 연출 적용 + 재화 상태에 따른 분기",
            "라운드 종료 MVP 여부에 따른 차별화 연출",
          ],
          notionHref: "#",
        },
      ],
    },
    {
      kind: "bullets",
      id: "event-minigame-result",
      title: "2-2. 결과",
      bullets: [
        "이벤트 기간 내 미니게임 콘텐츠를 문제 없이 개발·서비스",
        "유사 이벤트에서 구조/코드 재활용 가능",
        "서버·기획·UI 간 병목을 완화하며 협업에 기여",
        "연출 중심 개발 경험을 통해 체감 완성도 향상",
      ],
    },

    // -----------------------------
    // 3 ~ 7 섹션도 동일 원칙으로 경로만 IMG/VID로 치환하면 됨
    // (여긴 길어서 너가 편집하기 쉽게 핵심 규칙만 유지)
    // -----------------------------
  ],
};

export default ozRewrite;
