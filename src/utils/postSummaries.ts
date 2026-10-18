import type { PostSummaries } from "@/services/notionApi";


export function selectSummary(summaries: PostSummaries | undefined, language: string, allowFallback = true): string {
  const languageCode = language.split(/[-_]/)[0];
  const locale = languageCode === "zh" ? "zh_Hant" : languageCode === "ja" ? "ja" : "en";
  const preferred = summaries?.[locale] || "";

  if (preferred.trim()) {
    return preferred;
  }

  if (!allowFallback) {
    return "";
  }

  return [summaries?.en, summaries?.zh_Hant, summaries?.ja].find((value) => value?.trim()) || "";
}
