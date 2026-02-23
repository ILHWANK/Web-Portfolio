export type MediaItem =
    | { type: "image"; src: string; alt: string }
    | { type: "gif"; src: string; alt: string }
    | { type: "video"; src: string; poster?: string };

export type CardLink = {
    label: string;
    href: string;
    kind?: "code" | "doc" | "issue" | "etc";
};

export type FeatureCard = {
    title: string;
    summary: string;
    impact?: string;
    media?: MediaItem[];
    points?: string[];
    notionHref?: string;
    links?: CardLink[];
};

export type CaseSection = {
    kind: "case";
    id: string;
    title: string;
    subtitle?: string;
    cards: FeatureCard[];
};

// ✅ 추가: 중첩 bullet 지원
export type BulletItem =
    | string
    | {
    text: string;      // 메인 bullet
    sub?: string[];    // 하위 bullet(동그라미/들여쓰기용)
};

export type BulletGroup = {
    title: string;         // "UI · 콘텐츠" 같은 그룹 제목
    items: BulletItem[];   // 그룹 내 bullet들
};

export type BulletsSection = {
    kind: "bullets";
    id: string;
    title: string;

    // ✅ 추가: 섹션 상단 리드 문장(이미지의 2줄 설명)
    lead?: string;

    // ✅ 추가: 그룹형 렌더링
    groups?: BulletGroup[];

    // ✅ 기존 유지: 단순 bullets도 계속 지원
    bullets?: string[];
};

export type ProjectSection = CaseSection | BulletsSection;

export type ProjectThumb = { src: string; alt: string };

export type ProjectData = {
    slug: string;
    title: string;
    tagline?: string;
    headline?: string;
    description?: string;
    tags?: string[];
    primaryMedia?: MediaItem;
    thumb?: ProjectThumb;
    sections: ProjectSection[];
    notionLabel?: string;
};