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

import type { ProjectData } from "./types";

const ROOT = `${import.meta.env.BASE_URL}media/projects/lwc`;
const IMG = `${ROOT}/image`;
const VID = `${ROOT}/video`;

const lwc: ProjectData = {
    slug: "lwc",
    title: "편지와 마녀의 아이 (LWC)",
    tagline: "스토리 중심 2D 싱글 플레이 (Unity 2023.2.20)",
    // ✅ 홈 카드에서 쓸 썸네일
    thumb: {
        src: `${import.meta.env.BASE_URL}media/projects/lwc/image/thumbnail.jpg`,
        alt: "편지와 마녀의 아이 썸네일",
    },
    headline: "플레이 흐름 기반으로 UI·데이터·연출·리소스를 구조화하며 확장성을 검증한 개인 프로젝트",
    description:
        "기능 나열이 아니라 ‘실제 플레이 흐름’을 기준으로 시스템을 설계하고, 데이터 변경이 UI/플레이에 자연스럽게 반영되도록 구조를 검증하고 있습니다.",
    tags: ["Unity", "UGUI", "Addressables", "UniTask", "Yarn Spinner", "CSV", "Localization"],

    sections: [
        // -----------------------------
        // 0. 개요(짧게)
        // -----------------------------
        {
            kind: "bullets",
            id: "overview",
            title: "0. 프로젝트 개요",
            bullets: [
                "장르: 스토리 중심 2D 싱글 플레이 / 플랫폼: PC",
                "기술: Unity(UGUI), Addressables, UniTask, Yarn Spinner, CSV",
                "목표: 기능 추가/데이터 변경/연출 확장에도 구조가 무너지지 않는 흐름 검증",
            ],
        },

        // -----------------------------
        // 3. 플레이 흐름 기반 시스템(카드)
        // -----------------------------
        {
            kind: "case",
            id: "playflow",
            title: "3. 게임 플레이 흐름 기반 시스템 구성",
            subtitle: "플레이어의 실제 진행 순서(Title → 로딩 → 허브 → 상호작용 → 맵 전환 → 날짜/데이터 반영)를 기준으로 카드로 분해",
            cards: [
                {
                    title: "3-1. 게임 시작 & Title 분기 (New / Load)",
                    summary: "Title은 ‘진입 분기 + 준비 트리거’까지만 담당하고, 로딩 시퀀스는 별도 컨트롤러로 위임",
                    media: [
                        { type: "image", src: `${IMG}/title.png`, alt: "Title 화면" },
                    ],
                    points: [
                        "New/Load 버튼 입력을 진입점으로 분기",
                        "TitleUI는 UI 제어/트리거까지만 담당, 로딩은 LoadingUIController로 위임",
                        "NewGame 시 로드 캐시 정리 후 새 흐름으로 진입",
                        "PlayerData 기본 상태 보장(파일 없으면 기본값 생성) + 비동기 저장(ThreadPool)",
                    ],
                    notionHref: "#NOTION_LINK_TITLE_FLOW",
                },

                {
                    title: "3-2. Title → Loading → Fade → Game 진입",
                    summary: "큐 기반 로딩(함수 등록) + Label 기반 대상 수집 + Fade 연출 연결로 ‘로딩→연출→진입’ 플로우를 통합",
                    media: [
                        { type: "video", src: `${VID}/title_to_game.mp4`, poster: `${IMG}/title_to_game_poster.png` },
                    ],
                    points: [
                        "LoadingUIController가 로딩 큐를 관리(함수 기반으로 확장 가능)",
                        "Addressables Label 기반으로 로딩 대상을 수집해 하드코딩 제거",
                        "NewGame은 전체 해제 후 재로드 / LoadGame은 캐시 스킵 + 미로드만 로드",
                        "로드 완료 직후 FadeOut→FadeIn으로 전환을 자연스럽게 연결",
                    ],
                    notionHref: "#NOTION_LINK_LOADING_QUEUE",
                },

                {
                    title: "3-3. MagicBookPopup (메인 허브 UIPopup)",
                    summary: "허브 팝업 1개 + Content 분리(Inventory/Calendar/Menu)로 역할을 명확히 하고, PopupData로 진입 탭을 제어",
                    media: [
                        { type: "video", src: `${VID}/magicbook.mp4`, poster: `${IMG}/magicbook_poster.png` },
                    ],
                    points: [
                        "Scene에 UI를 상주시켜두지 않고 UIManager가 생명주기 관리",
                        "PopupData로 ‘어느 탭으로 열지’를 외부에서 결정 → 확장 시 구조 변경 최소화",
                        "Content는 OnEnter/OnExit로 정리해 탭 전환 안정성 확보",
                    ],
                    notionHref: "#NOTION_LINK_MAGICBOOK",
                },

                {
                    title: "3-4. 플레이어 조작 & Dialogue 진행 (Yarn)",
                    summary: "상호작용은 인터페이스로 위임하고, Dialogue는 노드명만 전달 + Yarn Command를 이벤트로 변환해 결합도를 낮춤",
                    media: [
                        { type: "video", src: `${VID}/interaction_dialogue.mp4`, poster: `${IMG}/interaction_dialogue_poster.png` },
                    ],
                    points: [
                        "Player는 ‘현재 상호작용 대상’만 관리하고 실제 동작은 IInteractable에 위임",
                        "Dialogue 시작은 노드 이름만 전달 → 게임 로직과 분리",
                        "Yarn Command → MessageSystem 이벤트로 변환해 UI/연출을 외부 시스템에서 처리",
                    ],
                    notionHref: "#NOTION_LINK_DIALOGUE_EVENT",
                },

                {
                    title: "3-5. 맵 이동 시스템 (Portal/Door + Fade 시퀀스)",
                    summary: "Door는 의도(MapType)만 전달, 실제 전환은 시스템이 처리(FadeOut→Load→Camera→FadeIn) + 맵 단위 로드/해제로 메모리 관리",
                    media: [
                        { type: "video", src: `${VID}/portal_mapchange.mp4`, poster: `${IMG}/portal_mapchange_poster.png` },
                    ],
                    points: [
                        "상호작용 오브젝트가 맵 시스템을 직접 제어하지 않도록 책임 분리",
                        "전환 시퀀스 순서 보장: FadeOut → Map Load → Camera Follow → FadeIn",
                        "이전 맵 리소스 해제 후 다음 맵 로드(맵 단위 메모리 관리)",
                        "Spot 캐싱으로 배치 로직에 활용",
                    ],
                    notionHref: "#NOTION_LINK_MAPSYSTEM",
                },

                {
                    title: "3-6. 일자 변경 & 데이터 반영",
                    summary: "Day 변경을 단일 이벤트로 통일하고, UI/시스템이 동시에 반응하도록 설계 (데이터 변경 즉시 저장)",
                    media: [
                        { type: "video", src: `${VID}/day_transition.mp4`, poster: `${IMG}/day_transition_poster.png` },
                    ],
                    points: [
                        "DayTransitionPanel은 연출/확인 역할만 담당, 종료 시점에 데이터/상태를 일괄 반영",
                        "DayUpdate 이벤트 1개로 전파 → 여러 시스템이 동기화",
                        "GameData에 Day/일과/난이도 집중 + 변경 즉시 비동기 저장",
                    ],
                    notionHref: "#NOTION_LINK_DAYUPDATE",
                },

                {
                    title: "3-7. 데이터 변경에 따른 UI 자동 갱신 (MessageSystem)",
                    summary: "UI가 데이터를 직접 감시하지 않고 이벤트 기반으로 반응 → 재진입 없이 최신 상태 유지",
                    media: [
                        { type: "video", src: `${VID}/ui_refresh.mp4`, poster: `${IMG}/ui_refresh_poster.png` },
                    ],
                    points: [
                        "DayUpdate 이벤트 구독 → MainUI 날짜 즉시 갱신",
                        "Calendar는 테이블 기반으로 구성 + 선택 변경 메시지로 부분 Refresh",
                        "Inventory는 변경 후 UI 직접 수정 대신 Refresh 재구성(선택/스크롤 UX 유지)",
                    ],
                    notionHref: "#NOTION_LINK_UI_REFRESH",
                },

                {
                    title: "3-8. 언어 변경 기능 (UI/폰트/Yarn 동기화)",
                    summary: "언어 변경 이벤트 1회로 UI 텍스트/폰트/Yarn Locale까지 즉시 전환되도록 구성",
                    media: [
                        { type: "video", src: `${VID}/localization.mp4`, poster: `${IMG}/localization_poster.png` },
                    ],
                    points: [
                        "LocalizedText가 LanguageChanged/FontChanged 메시지를 구독해 즉시 갱신",
                        "FontPolicyManager가 언어별 폰트를 Addressables로 로드 후 전역 적용",
                        "Yarn BuiltinLocalisedLineProvider의 LocaleCode 변경으로 대사 즉시 전환",
                        "GameData에 언어 저장 → 재시작 후에도 유지",
                    ],
                    notionHref: "#NOTION_LINK_LOCALIZATION",
                },
            ],
        },
    ],
};

export default lwc;