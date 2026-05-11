import { useEffect, useState } from "react";

export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
};

export type GithubStats = {
  loading: boolean;
  error: string | null;
  repos: Repo[];
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  languageBreakdown: { language: string; count: number; percent: number }[];
  topLanguage: string | null;
  lastPushed: string | null;
};

const USER = "BurhanuddinMunshi53";
const CACHE_KEY = `gh:${USER}:repos`;
const CACHE_TTL = 5 * 60 * 1000; // 5 min

export function useGithubStats(): GithubStats {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fromCache = () => {
      try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (!raw) return null;
        const { ts, data } = JSON.parse(raw);
        if (Date.now() - ts > CACHE_TTL) return null;
        return data as Repo[];
      } catch {
        return null;
      }
    };

    const cached = fromCache();
    if (cached) {
      setRepos(cached);
      setLoading(false);
    }

    fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`)
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub API ${r.status}`);
        return r.json();
      })
      .then((data: Repo[]) => {
        if (cancelled) return;
        setRepos(data);
        setError(null);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
        } catch {}
      })
      .catch((e) => !cancelled && setError(String(e?.message ?? e)))
      .finally(() => !cancelled && setLoading(false));

    return () => { cancelled = true; };
  }, []);

  const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
  const totalForks = repos.reduce((s, r) => s + (r.forks_count || 0), 0);

  const langCount = new Map<string, number>();
  repos.forEach((r) => {
    if (r.language) langCount.set(r.language, (langCount.get(r.language) ?? 0) + 1);
  });
  const totalLang = Array.from(langCount.values()).reduce((a, b) => a + b, 0) || 1;
  const languageBreakdown = Array.from(langCount.entries())
    .map(([language, count]) => ({ language, count, percent: Math.round((count / totalLang) * 100) }))
    .sort((a, b) => b.count - a.count);

  const lastPushed = repos
    .map((r) => r.updated_at)
    .sort()
    .reverse()[0] ?? null;

  return {
    loading,
    error,
    repos,
    totalRepos: repos.length,
    totalStars,
    totalForks,
    languageBreakdown,
    topLanguage: languageBreakdown[0]?.language ?? null,
    lastPushed,
  };
}
