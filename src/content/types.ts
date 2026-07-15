export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  /** Only set when a post is edited after publishing — powers schema's dateModified. */
  updated?: string;
  category: string;
  /** Extra terms for schema.org `keywords` — category/brand terms are added automatically in BlogPost. */
  keywords: string[];
  img: string;
  imageAlt: string;
  draft: boolean;
  /** Rendered HTML from the post's markdown body — render with dangerouslySetInnerHTML. */
  bodyHtml: string;
};
