import { useEffect } from "react";

const BASE = "Shantigram Ahmedabad | Propraise Realtors";

/** Appends suffix before a site-wide base title (e.g. inner pages). */
export function usePageTitle(suffix?: string) {
  useEffect(() => {
    const next = suffix ? `${suffix} | ${BASE}` : BASE;
    const prev = document.title;
    document.title = next;
    return () => {
      document.title = prev;
    };
  }, [suffix]);
}

/** Sets document title to an exact string (e.g. SEO/legal page title). */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    return () => {
      document.title = prev;
    };
  }, [title]);
}
