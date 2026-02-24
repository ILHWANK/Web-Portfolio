import type { ProjectData } from "./types";

const ROOT = `${import.meta.env.BASE_URL}/media/projects/lwc`;
const IMG = `${ROOT}/image`;
const VID = `${ROOT}/video`;

const lwc: ProjectData = {
    slug: "lwc",
    title: "편지와 마녀의 아이 (개인 프로젝트)",
    notionLabel: "상세 코드(Notion)",
    tagline: "플레이 흐름 기반 구조 설계 · 데이터/이벤트 중심 시스템 검증",
    thumb: {
        src: `${IMG}/lwc.png`,
        alt: "편지와 마녀의 아이 썸네일",
    },

    headline: "스토리 중심 2D 싱글 게임을 ‘플레이 흐름’ 기준으로 구조화한 개인 프로젝트",
    description:
        "Title→로딩/페이드→맵/상호작용→대화/스토리→날짜/루틴→UI 갱신까지 실제 플레이 순서로 시스템을 연결했습니다. " +
        "GameData + CSV Table + MessageSystem으로 ‘데이터 변경→이벤트→UI/표출 반영’을 전역 규칙으로 통일하고, " +
        "Dialogue(Yarn)와 StoryCut(테이블 기반 컷) 모두 진행 제어와 표시 계층을 분리해 확장 가능성을 검증 중입니다.",

    tags: [
        "Unity",
        "C#",
        "System Design",
        "Data-Driven Design",
        "UI Architecture",
        "Addressables",
        "Async Programming",
        "Localization",
    ],

    sections: [
        // -----------------------------
        // 프로젝트 요약
        // -----------------------------
        {
            kind: "bullets",
            id: "summary",
            title: "프로젝트 요약",
            lead: "프로젝트 성격과 핵심 설계 방향을 상단에서 빠르게 요약합니다.",
            bullets: [
                "최종 개선일: 2026.01.27",
                "GitHub: https://github.com/ILHWANK/Project-LWC.git",
                "하루 단위 플레이 흐름 속에서 스토리·UI·데이터·연출 시스템이 유기적으로 연결되는 스토리 중심 2D 싱글 플레이 게임",
                "개발 진행 중(구조 개선/기능 확장에 따라 내용 일부 변경 가능)",
            ],
        },

        // -----------------------------
        // 0. 기술 및 개발 경험
        // -----------------------------
        {
            kind: "bullets",
            id: "tech-stack",
            title: "0. 기술 및 개발 경험",
            lead:
                "기능 나열이 아니라 실제 플레이 흐름에서 구조가 유지되는지를 검증하는 프로젝트로, " +
                "데이터/이벤트/리소스/표출 계층을 분리해 확장 가능한 기반을 구축했습니다.",
            groups: [
                {
                    title: "[플레이 흐름 기반 구조]",
                    items: [
                        "Title → 로딩/페이드 → 맵/상호작용 → 대화/스토리 → 날짜/루틴 → UI 갱신을 실제 플레이 순서로 연결",
                        "진입 분기(New/Load)와 로딩 시퀀스(큐 기반)를 분리해 로딩 확장 가능성을 확보",
                    ],
                },
                {
                    title: "[데이터 · 이벤트 중심]",
                    items: [
                        "GameData + CSV Table 기반으로 상태/콘텐츠를 관리",
                        "MessageSystem(Pub/Sub)으로 ‘데이터 변경 → 이벤트 → UI/표출 반영’ 전역 규칙을 통일",
                    ],
                },
                {
                    title: "[리소스 · 비동기]",
                    items: [
                        "Addressables 기반 로드/캐시/해제 전략을 실제 플레이 흐름에서 검증",
                        "UniTask 기반 비동기 처리(로딩/저장/전환 시퀀스)로 메인 흐름을 분리",
                    ],
                },
                {
                    title: "[다국어 · 폰트 · 대사 동기화]",
                    items: [
                        "UI 문자열: CSV 키 기반 조회(LocalizationManager)",
                        "폰트 정책: FontPolicyManager가 언어별 폰트를 Addressables로 로드해 전역 적용",
                        "대사: Yarn LocaleCode 변경으로 런타임 즉시 전환",
                        "Story 텍스트: TextLocalStringTable 기반 언어별 문자열 주입",
                    ],
                },
                {
                    title: "[표출 계층 분리]",
                    items: [
                        "Dialogue(Yarn)와 StoryCut(테이블 기반 컷) 모두 진행 제어와 표시(View)를 분리",
                        "StoryCut: Core/Runner/Presenter/View 계층으로 타입 확장(월드 버블 외) 가능한 기반 마련",
                    ],
                },
            ],
        },

        // -----------------------------
        // 1. 프로젝트 개요
        // -----------------------------
        {
            kind: "bullets",
            id: "overview",
            title: "1. 프로젝트 개요",
            bullets: [
                "장르: 2D 싱글 플레이 / 스토리 중심",
                "플랫폼: PC",
                "엔진: Unity 2023.2.20",
                "사용 기술: C#, Unity UGUI, Addressables, Assembly, UniTask, Yarn Spinner, CSV, TMP",
                "진행 형태: 개인 프로젝트 (기획·개발 전반 단독)",
            ],
        },

        // -----------------------------
        // 2. 프로젝트 목적
        // -----------------------------
        {
            kind: "bullets",
            id: "goal",
            title: "2. 프로젝트 목적",
            bullets: [
                "스토리 중심 게임에서 UI/데이터/연출 흐름을 구조적으로 안정적으로 유지 가능한지 검증",
                "기능 추가/확장 시 구조가 무너지지 않도록 책임 분리(이벤트/인터페이스) 기준 확립",
                "CSV/저장 데이터 변경이 UI와 플레이 흐름에 자연스럽게 반영되는지 검증",
                "Addressables 기반 로딩/캐시/해제를 포함한 리소스 관리 전략을 플레이 흐름 속에서 검증",
                "다국어(UI/폰트/Yarn/Story 텍스트)가 런타임에서 즉시 전환되도록 구성",
            ],
        },

        // -----------------------------
        // 3. 플레이 흐름 기반 시스템 구성 (대표 사례)
        // -----------------------------
        {
            kind: "case",
            id: "playflow",
            title: "3. 플레이 흐름 기반 시스템 구성",
            subtitle:
                "기능 나열이 아니라 실제 플레이 흐름(진입→허브 UI→상호작용/대화→맵 전환→날짜 진행→갱신)을 기준으로 설계",
            cards: [
                {
                    title: "3-1. 게임 시작 & Title 화면",
                    summary:
                        "Title은 진입 분기(New/Load)와 데이터 준비까지만 담당하고, 실제 로딩 시퀀스는 LoadingUIController로 위임",
                    media: [{ type: "image", src: `${IMG}/title.png`, alt: "Title 화면" }],
                    points: [
                        "New/Load 분기와 ‘게임 진입 준비 흐름’ 트리거",
                        "TitleUI는 UI 제어 + 시작 트리거까지만 담당(로딩은 다음 단계로 위임)",
                        "PlayerData 파일이 없으면 기본값으로 초기화해 NewGame 기본 상태 보장",
                        "저장은 ThreadPool에서 파일 IO 처리(메인 스레드 부담 최소화)",
                    ],
                    notionHref: "#",
                    links: [
                        {
                            label: "관련 코드(Notion)",
                            href: "https://www.notion.so/Project-LWC-2026-01-27-2ce7c7e6db098009a8b4c7b579e4f103?source=copy_link#2d37c7e6db09807d8f9de76ae32e44a7",
                            kind: "code",
                        },
                    ],
                },

                {
                    title: "3-2. Title → Loading → Fade → Game 진입 (리소스 로드) [2026.01.27]",
                    summary:
                        "큐 기반 로딩(함수 등록) + Label 기반 대상 수집 + Fade 연출 연결로 ‘로딩→연출→진입’ 플로우를 통합",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/title_to_game.mp4`,
                            poster: `${IMG}/title_to_game_poster.png`,
                        },
                    ],
                    points: [
                        "LoadingUIController가 로딩 큐(_items) 관리: 함수 기반으로 로딩 확장 가능",
                        "Label 기반으로 Addressables 로딩 대상을 수집해 하드코딩 제거",
                        "NewGame: 캐시 전체 해제 후 재로드 / LoadGame: 캐시 스킵 + 미로드만 로드",
                        "로드 완료 직후 FadeOut → FadeIn으로 로딩→연출→진입을 하나의 흐름으로 연결",
                    ],
                    notionHref: "#",
                },

                {
                    title: "3-3. MagicBookPopup (메인 허브 UIPopup)",
                    summary:
                        "허브 팝업 1개 + Content 분리(Inventory/Calendar/Menu)로 역할을 고정하고, PopupData로 진입 탭을 제어",
                    media: [{ type: "video", src: `${VID}/magicbook.mp4`, poster: `${IMG}/magicbook_poster.png` }],
                    points: [
                        "Scene에 UI를 상주시켜두지 않고 UIManager가 생명주기 관리",
                        "PopupData로 ‘어느 탭으로 열지’를 외부에서 결정 → 확장 시 구조 변경 최소화",
                        "Content는 OnEnter/OnExit로 정리해 탭 전환 안정성 확보",
                    ],
                    notionHref: "#",
                },

                {
                    title: "3-4. 플레이어 조작 & Dialogue 진행 (Yarn)",
                    summary:
                        "상호작용은 IInteractable로 위임하고, Dialogue는 노드명만 전달 + Yarn Command를 이벤트로 변환해 결합도를 낮춤",
                    media: [
                        {
                            type: "video",
                            src: `${VID}/interaction_dialogue.mp4`,
                            poster: `${IMG}/interaction_dialogue_poster.png`,
                        },
                    ],
                    points: [
                        "Player는 ‘현재 상호작용 대상’만 관리하고 실제 동작은 IInteractable에 위임",
                        "Dialogue 시작은 노드 이름만 전달 → 게임 로직과 분리",
                        "Yarn Command → MessageSystem 이벤트로 변환해 UI/연출을 외부 시스템에서 처리",
                    ],
                    notionHref: "#",
                },

                {
                    title: "3-5. 맵 이동 시스템 (Portal/Door + Fade 시퀀스) [2026.01.14]",
                    summary:
                        "Door는 의도(MapType)만 전달, 실제 전환은 시스템이 처리(FadeOut→Load→Camera→FadeIn) + 맵 단위 로드/해제로 메모리 관리",
                    media: [
                        { type: "video", src: `${VID}/portal_mapchange.mp4`, poster: `${IMG}/portal_mapchange_poster.png` },
                    ],
                    points: [
                        "상호작용 오브젝트가 맵 시스템을 직접 제어하지 않도록 책임 분리",
                        "전환 시퀀스 순서 보장: FadeOut → Map Load → Camera Follow → FadeIn",
                        "이전 맵 리소스 해제 후 다음 맵 로드(맵 단위 메모리 관리)",
                        "Spot 캐싱으로 배치 로직에 활용",
                    ],
                    notionHref: "#",
                },

                {
                    title: "3-6. 일자 변경 & 데이터 반영",
                    summary: "Day 변경을 단일 이벤트로 통일하고, UI/시스템이 동시에 반응하도록 설계(데이터 변경 즉시 저장)",
                    media: [{ type: "video", src: `${VID}/day_transition.mp4`, poster: `${IMG}/day_transition_poster.png` }],
                    points: [
                        "DayTransitionPanel은 연출/확인 역할만 담당, 종료 시점에 데이터/상태를 일괄 반영",
                        "DayUpdate 이벤트 1개로 전파 → 여러 시스템이 동기화",
                        "GameData에 Day/일과/난이도 집중 + 변경 즉시 비동기 저장",
                    ],
                    notionHref: "#",
                },

                {
                    title: "3-7. 데이터 변경에 따른 UI 자동 갱신 (MessageSystem)",
                    summary: "UI가 데이터를 직접 감시하지 않고 이벤트 기반으로 반응 → 재진입 없이 최신 상태 유지",
                    media: [{ type: "video", src: `${VID}/ui_refresh.mp4`, poster: `${IMG}/ui_refresh_poster.png` }],
                    points: [
                        "DayUpdate 이벤트 구독 → MainUI 날짜 즉시 갱신",
                        "Calendar는 테이블 기반 구성 + 선택 변경 메시지로 부분 Refresh",
                        "Inventory는 변경 후 UI 직접 수정 대신 Refresh 재구성(선택/스크롤 UX 유지)",
                    ],
                    notionHref: "#",
                },

                {
                    title: "3-8. 언어 변경 기능 (UI/폰트/Yarn/Story 텍스트 동기화) [2026.01.27]",
                    summary: "언어 변경 이벤트 1회로 UI 텍스트/폰트/Yarn Locale/Story 텍스트까지 즉시 전환되도록 구성",
                    media: [{ type: "video", src: `${VID}/localization.mp4`, poster: `${IMG}/localization_poster.png` }],
                    points: [
                        "LocalizedText가 LanguageChanged/FontChanged 메시지를 구독해 즉시 갱신",
                        "FontPolicyManager가 언어별 폰트를 Addressables로 로드 후 전역 적용",
                        "Yarn BuiltinLocalisedLineProvider.LocaleCode 변경으로 대사 즉시 전환",
                        "Story 텍스트도 TextLocalStringTable 기반으로 동일 흐름에 편입",
                    ],
                    notionHref: "#",
                },

                {
                    title: "3-9. StoryCut 진행/표출 기능 (테이블 기반 컷신) [2026.02.17~]",
                    summary:
                        "CSV 기반 컷 데이터 로드 + Start/Advance 진행 코어 + Presenter/View 분리로 타입 확장 가능한 기반을 구축",
                    // ✅ 영상 파일이 아직 없으면 image로 두는 게 안전함
                    // media: [{ type: "video", src: `${VID}/storycut.mp4`, poster: `${IMG}/storycut_poster.png` }],
                    media: [{ type: "image", src: `${IMG}/storycut.png`, alt: "StoryCut 시스템" }],
                    points: [
                        "StoryCutTable.csv → Dictionary 캐시 빌드로 O(1) 조회(런타임 비용 최소화)",
                        "Core(StoryDirectorCore)는 진행 제어만 담당, Presenter/View에서 표출 전략 분리",
                        "RequestStartStoryMessage로 시작 트리거를 메시지화해 상호작용과 느슨하게 결합",
                        "WorldBubbleView는 SpeakerId→Anchor Registry로 월드 좌표 기반 버블 표시를 갱신",
                    ],
                    notionHref: "#",
                },
            ],
        },

        // -----------------------------
        // 4. 구조 설계 포인트
        // -----------------------------
        {
            kind: "bullets",
            id: "architecture-focus",
            title: "4. 구조 설계에서 중점적으로 고민한 부분",
            bullets: [
                "UIManager / Popup·Panel 생명주기 관리: 허브 1개 + Content 분리 + PopupData 진입 제어",
                "MessageSystem 기반 이벤트 아키텍처: DayUpdate/LanguageChanged/FontChanged/StoryStart 등 핵심 상태를 이벤트로 통일",
                "ResourceManager + Addressables: 로드/캐시/해제를 통합하고 맵 단위 메모리 관리 흐름을 구축",
                "CSV Table + GameData: 키 기반 조회 + 캐싱으로 비용과 의존도를 줄이고 확장 용이성 확보",
                "표출 계층 분리: Dialogue(Yarn) / StoryCut 모두 진행과 표시를 분리해 확장 가능하게 설계",
            ],
        },

        // -----------------------------
        // 5. 진행 중인 프로젝트
        // -----------------------------
        {
            kind: "bullets",
            id: "ongoing",
            title: "5. 진행 중인 프로젝트로서의 LWC",
            bullets: [
                "포트폴리오 제출 시점에도 개발이 진행 중인 프로젝트",
                "플레이 흐름 기반 구조는 유지한 채 기능을 단계적으로 확장 중",
                "다국어 런타임 전환(UI/폰트/Yarn/Story) 및 StoryCut(테이블 기반 컷 진행/표출)로 스토리 표출 방식을 확장",
                "단기 데모가 아니라 구조를 유지하며 콘텐츠를 늘려가는 장기 운영형 개인 프로젝트를 목표",
            ],
        },

        // -----------------------------
        // 6. 정리
        // -----------------------------
        {
            kind: "bullets",
            id: "wrapup",
            title: "6. 정리",
            bullets: [
                "스토리 중심 게임에서 필요한 전반 흐름을 ‘플레이 순서’ 기준으로 연결하고 구조 유지 가능성을 검증",
                "데이터(GameData/CSV) + 이벤트(MessageSystem) + 리소스(Addressables) + 표출 계층 분리를 하나의 규칙으로 통일",
                "기능 추가/변경에도 최소 수정으로 확장 가능한 기반을 지속적으로 보강 중",
            ],
        },
    ],
};

export default lwc;