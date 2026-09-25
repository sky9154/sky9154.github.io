export interface NotionTag {
  id?: string;
  name: string;
  color: string;
}

export interface PostSummary {
  id: string;
  title: string;
  summary: string;
  tags: NotionTag[];
  updatedAt: string;
}

export interface PostMetadata {
  id: string;
  title: string;
  tags: NotionTag[];
  updatedAt: string;
  category?: string | null;
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

interface LegacyText {
  plain_text: string;
}

interface LegacyPage {
  id: string;
  properties: {
    Title: { title: LegacyText[] };
    Summary?: { rich_text: LegacyText[] };
    Tags?: { multi_select: NotionTag[] };
    Updated?: { last_edited_time: string };
    Category?: { select?: { name: string } | null };
  };
  last_edited_time?: string;
}

interface LegacyCollectionResponse {
  results: LegacyPage[];
  next_cursor: string | null;
  has_more: boolean;
}

interface LegacyPostDetail {
  metadata: LegacyPage;
  markdown: string;
}

const API_BASE_URL = (
  import.meta.env.VITE_NOTION_API_URL || "https://notion.sky9154.com"
).replace(/\/$/, "");

const joinPlainText = (items: LegacyText[] | undefined) => (
  (items || []).map((item) => item.plain_text).join("")
);

const parseErrorMessage = async (response: Response) => {
  try {
    const payload = await response.json() as { message?: string };

    return payload.message || `Request failed (${response.status})`;
  } catch {
    return `Request failed (${response.status})`;
  }
};

const requestJson = async <T>(url: URL, signal?: AbortSignal): Promise<T> => {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Accept": "application/json" },
    signal
  });

  if (!response.ok) {
    throw new Error(await parseErrorMessage(response));
  }

  return response.json() as Promise<T>;
};

const normalizeLegacyPage = (page: LegacyPage): PostSummary => ({
  id: page.id,
  title: joinPlainText(page.properties.Title?.title),
  summary: joinPlainText(page.properties.Summary?.rich_text),
  tags: page.properties.Tags?.multi_select || [],
  updatedAt: page.properties.Updated?.last_edited_time || page.last_edited_time || ""
});

export async function fetchPostCollection(
  collection: "blog" | "projects",
  options: { query?: string; cursor?: string | null; signal?: AbortSignal } = {}
): Promise<CollectionResponse> {
  const url = new URL(`${API_BASE_URL}/${collection}`);

  if (options.cursor) {
    url.searchParams.set("cursor", options.cursor);
  }

  const query = options.query?.trim() ?? "";

  if (query.length >= 2) {
    url.searchParams.set("q", query);
  }

  const data = await requestJson<CollectionResponse | LegacyCollectionResponse>(
    url,
    options.signal
  );

  if ("hasMore" in data) {
    return data;
  }

  return {
    results: data.results.map(normalizeLegacyPage),
    nextCursor: data.next_cursor,
    hasMore: data.has_more
  };
}

export async function fetchPostDetail(
  id: string,
  signal?: AbortSignal,
  collection: "blog" | "projects" = "blog"
): Promise<PostDetail> {
  const url = new URL(`${API_BASE_URL}/${collection}/${encodeURIComponent(id)}`);
  const data = await requestJson<PostDetail | LegacyPostDetail>(url, signal);

  if ("title" in data.metadata) {
    return data as PostDetail;
  }

  const metadata = data.metadata;

  return {
    markdown: data.markdown,
    metadata: {
      id: metadata.id,
      title: joinPlainText(metadata.properties.Title?.title),
      tags: metadata.properties.Tags?.multi_select || [],
      updatedAt: metadata.properties.Updated?.last_edited_time || metadata.last_edited_time || "",
      category: metadata.properties.Category?.select?.name || null
    }
  };
}

export const formatPostDate = (value: string, locale: string) => {
  if (!value) {
    return "";
  }

  const normalizedLocale = locale.replace(/_/g, "-");

  return new Intl.DateTimeFormat(normalizedLocale, {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(value));
};