export interface NotionTag {
  id?: string;
  name: string;
  color: string;
}

export interface PostSummary {
  id: string;
  title: string;
  summaries: PostSummaries;
  category: PostCategory;
  featured?: boolean;
  cover: string | null;
  tags: NotionTag[];
  updatedAt: string;
}

export type PostCollection = "articles" | "projects";

export type PostCategory = "Project" | "Article";

export interface PostSummaries {
  zh_Hant: string;
  en: string;
  ja: string;
}

export interface PostMetadata {
  id: string;
  title: string;
  tags: NotionTag[];
  updatedAt: string;
  summaries: PostSummaries;
  category: PostCategory;
  featured?: boolean;
  cover: string | null;
}

export interface PostDetail {
  metadata: PostMetadata;
  markdown: string;
}

interface CollectionResponse {
  results: PostSummary[];
  nextCursor: string | null;
  hasMore: boolean;
}

const API_BASE_URL = (
  import.meta.env.VITE_NOTION_API_URL || "https://notion.sky9154.com"
).replace(/\/$/, "");

async function parseErrorMessage(response: Response): Promise<string> {
  try {
    const payload = await response.json() as { message?: string };

    return payload.message || `Request failed (${response.status})`;
  } catch {
    return `Request failed (${response.status})`;
  }
}

async function requestJson<T>(url: URL, signal?: AbortSignal): Promise<T> {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Accept": "application/json" },
    signal
  });

  if (!response.ok) {
    throw new Error(await parseErrorMessage(response));
  }

  return response.json() as Promise<T>;
}

export async function fetchPostCollection(
  collection: PostCollection,
  options: { query?: string; cursor?: string | null; featured?: boolean; signal?: AbortSignal } = {}
): Promise<CollectionResponse> {
  const url = new URL(`${API_BASE_URL}/${collection}`);
  const isFeatured = collection === "projects" && options.featured;

  if (isFeatured) {
    url.searchParams.set("featured", "true");
  } else if (options.cursor) {
    url.searchParams.set("cursor", options.cursor);
  }

  const query = options.query?.trim() ?? "";

  if (!isFeatured && query.length >= 2) {
    url.searchParams.set("q", query);
  }

  return requestJson<CollectionResponse>(url, options.signal);
}

export async function fetchPostDetail(
  id: string,
  signal?: AbortSignal,
  collection: PostCollection = "articles"
): Promise<PostDetail> {
  const url = new URL(`${API_BASE_URL}/${collection}/${encodeURIComponent(id)}`);

  return requestJson<PostDetail>(url, signal);
}

export function formatPostDate(value: string, locale: string): string {
  if (!value) {
    return "";
  }

  const normalizedLocale = locale.replace(/_/g, "-");

  return new Intl.DateTimeFormat(normalizedLocale, {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(value));
}
