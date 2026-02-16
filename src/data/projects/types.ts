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

export type ProjectThumb = {
    src: string;
    alt: string;
};

export type ProjectData = {
    slug: string;
    title: string;
    tagline?: string;
    headline?: string;
    description?: string;
    tags?: string[];
    primaryMedia?: MediaItem;

    // ✅ 홈 카드 썸네일
    thumb?: ProjectThumb;

    sections: ProjectSection[];
};
