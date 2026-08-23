import { BookOpen } from "lucide-react"; // add BookOpen to your existing lucide-react import
import echoProtocolCover from "@/assets/EchoProtocolCover.png";
import { ArrowUpRight, Github, Star, GitFork, Code2, Activity, RefreshCw, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import ConnectWithMe from "@/components/ConnectWithMe";
import { useGithubStats, type Repo } from "@/hooks/useGithubStats";

const GITHUB_PROFILE = "https://github.com/BurhanuddinMunshi53";

const langColor: Record<string, string> = {
  Python: "bg-blue-400",
  TypeScript: "bg-sky-400",
  JavaScript: "bg-yellow-400",
  HTML: "bg-orange-400",
  CSS: "bg-pink-400",
  Java: "bg-red-400",
  "C++": "bg-purple-400",
  Go: "bg-cyan-400",
  Rust: "bg-orange-500",
  Shell: "bg-emerald-400",
};

// Humanize a repo name like "Code-Companion-Pro_" -> "Code Companion Pro"
const humanize = (name: string) =>
  name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

// Infer a category label from topics or language so cards feel curated.
const inferCategory = (r: Repo): string => {
  const topic = r.topics?.[0];
  if (topic) return humanize(topic);
  const l = (r.language || "").toLowerCase();
  if (l === "python") return "Python · Automation";
  if (l === "typescript" || l === "javascript") return "Web · Full-Stack";
  if (l === "html" || l === "css") return "Web · UI";
  return "Open Source";
};

const timeAgo = (iso: string) => {
  const diff = Date.now() - new Date(iso).getTime();
  const d = Math.floor(diff / 86400000);
  if (d < 1) return "today";
  if (d < 30) return `${d}d ago`;
  const m = Math.floor(d / 30);
  if (m < 12) return `${m}mo ago`;
  return `${Math.floor(m / 12)}y ago`;
};

const PAGE_SIZE = 9;

const Projects = () => {
  const stats = useGithubStats();
  const [page, setPage] = useState(1);

  const ranked = useMemo(
    () => [...stats.repos].sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) return b.stargazers_count - a.stargazers_count;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    }),
    [stats.repos],
  );
  const featured = ranked.slice(0, 3);
  const rest = ranked.slice(3);
  const totalPages = Math.max(1, Math.ceil(rest.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = rest.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <SiteLayout>
      <PageHeader
        index="03"
        title="Projects"
        subtitle="Every project on this page is generated live from my public GitHub. Push a new repository — it appears here automatically with its description, language, stars, and topics. No manual curation, no stale cards."
      />

      {/* Live GitHub stats */}
      <section className="container pt-10 md:pt-14">
        <div className="flex items-center justify-between mb-5">
          <p className="eyebrow flex items-center gap-2">
            <Activity className="h-3.5 w-3.5 text-accent" />
            Live · github.com/BurhanuddinMunshi53
          </p>
          {stats.loading && (
            <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
              <RefreshCw className="h-3 w-3 animate-spin" /> syncing
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <StatCard label="Public repos" value={stats.loading ? "—" : String(stats.totalRepos)} />
          <StatCard label="Total stars" value={stats.loading ? "—" : String(stats.totalStars)} icon={<Star className="h-3.5 w-3.5" />} />
          <StatCard label="Forks" value={stats.loading ? "—" : String(stats.totalForks)} icon={<GitFork className="h-3.5 w-3.5" />} />
          <StatCard label="Top language" value={stats.topLanguage ?? "—"} icon={<Code2 className="h-3.5 w-3.5" />} />
        </div>

        {stats.languageBreakdown.length > 0 && (
          <div className="soft-card p-5 md:p-6 mt-4">
            <p className="eyebrow mb-4">Language distribution · across all public repositories</p>
            <div className="flex h-2 w-full overflow-hidden rounded-full bg-subtle">
              {stats.languageBreakdown.map((l) => (
                <div
                  key={l.language}
                  className={`${langColor[l.language] ?? "bg-muted-foreground"} h-full`}
                  style={{ width: `${l.percent}%` }}
                  title={`${l.language} · ${l.percent}%`}
                />
              ))}
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
              {stats.languageBreakdown.map((l) => (
                <li key={l.language} className="flex items-center gap-2 text-xs">
                  <span className={`h-2 w-2 rounded-full ${langColor[l.language] ?? "bg-muted-foreground"}`} />
                  <span className="font-medium">{l.language}</span>
                  <span className="text-muted-foreground">{l.percent}% · {l.count} {l.count === 1 ? "repo" : "repos"}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Featured (auto-ranked from GitHub) */}
      {featured.length > 0 && (
        <section className="container py-14 md:py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="eyebrow mb-2">Featured · auto-ranked</p>
              <h2 className="font-semibold text-2xl md:text-3xl tracking-tight">Most-starred &amp; recently active.</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Ordering is computed live: stars first, then last-pushed date. Click any card to open the repository.
            </p>
          </div>

          <div className="space-y-5 md:space-y-6">
            {featured.map((r, i) => (
              <article key={r.name} className="soft-card p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-accent/15 text-accent">
                      {inferCategory(r)}
                    </span>
                    {r.language && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <span className={`h-2 w-2 rounded-full ${langColor[r.language] ?? "bg-muted-foreground"}`} />
                        {r.language}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Star className="h-3 w-3" /> {r.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                      <GitFork className="h-3 w-3" /> {r.forks_count}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {timeAgo(r.updated_at)}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={r.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${r.name} on GitHub`}
                      className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-subtle hover:border-accent/40 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={r.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${r.name}`}
                      className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-subtle hover:border-accent/40 transition-colors"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <h2 className="font-semibold text-2xl md:text-3xl tracking-tight mt-4">{humanize(r.name)}</h2>
                <p className="text-xs font-mono text-muted-foreground mt-1.5">{r.name}</p>

                <p className="text-sm md:text-base text-foreground/80 mt-4 leading-relaxed max-w-3xl">
                  {r.description ?? "No description provided yet — open the repository to read the source and the README."}
                </p>

                {r.topics && r.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {r.topics.slice(0, 8).map((t) => (
                      <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-subtle border border-border text-muted-foreground">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              <article className="soft-card p-6 md:p-8">
  <div className="flex items-center gap-3 flex-wrap mb-4">
    <span className="text-xs font-mono text-muted-foreground">P</span>
    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-accent/15 text-accent">
      Math · Research
    </span>
    <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
      171 digits @ round 6
    </span>
    <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
      verified 2 independent ways
    </span>
  </div>

  <h2 className="font-semibold text-2xl md:text-3xl tracking-tight">
    Computing π with the Arithmetic-Geometric Mean
  </h2>
  <p className="text-sm md:text-base text-foreground/80 mt-3 leading-relaxed max-w-2xl">
    Two numbers converge toward each other every round — π falls out of the gap
    between them, doubling in accuracy each time.
  </p>

  <p className="eyebrow mt-7 mb-2">Formula 1 — the iteration</p>
  <div className="rounded-lg bg-subtle border border-border px-5 py-4 font-mono text-[13px] leading-loose overflow-x-auto">
    <div>a_new = (a + b) / 2</div>
    <div>b_new = √(a × b)</div>
    <div>t_new = t − p × (a − a_new)²</div>
    <div>p_new = 2 × p</div>
  </div>

  <p className="eyebrow mt-6 mb-2">Formula 2 — π falls out of</p>
  <div className="rounded-lg bg-subtle border border-border px-5 py-4 font-mono text-sm">
    π ≈ (a + b)² / (4t)
  </div>

  <p className="eyebrow mt-7 mb-3">Worked trace — first 3 rounds</p>
  <div className="overflow-x-auto rounded-lg border border-border">
    <table className="w-full text-xs md:text-sm font-mono">
      <thead>
        <tr className="bg-subtle text-muted-foreground">
          <th className="text-left px-4 py-2.5 font-medium">Round</th>
          <th className="text-left px-4 py-2.5 font-medium">a</th>
          <th className="text-left px-4 py-2.5 font-medium">b</th>
          <th className="text-left px-4 py-2.5 font-medium">t</th>
        </tr>
      </thead>
      <tbody>
        {trace.map((r) => (
          <tr key={r.round} className="border-t border-border">
            <td className="px-4 py-2.5 text-muted-foreground">{r.round}</td>
            <td className="px-4 py-2.5">{r.a}</td>
            <td className="px-4 py-2.5">{r.b}</td>
            <td className="px-4 py-2.5">{r.t}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <p className="eyebrow mt-7 mb-3">Correct digits per round — measured, not theoretical</p>
  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
    {digits.map((d) => (
      <div key={d.n} className="soft-card p-3 text-center">
        <p className="font-mono text-[11px] text-muted-foreground mb-1">round {d.n}</p>
        <p className="font-mono text-accent font-semibold">{d.d}</p>
      </div>
    ))}
  </div>

  <p className="eyebrow mt-7 mb-2">How to use it</p>
  <p className="text-sm text-muted-foreground leading-relaxed">
    Start at a=1, b=1/√2, t=1/4, p=1. Run the four update lines once, using each
    value's <em>previous</em> round — never the ones just computed. Feed the results
    back in as the next round's starting point and repeat.
  </p>

  <p className="eyebrow mt-7 mb-2">How it's built</p>
  <p className="text-sm text-muted-foreground leading-relaxed">
    Exact BigInt fixed-point arithmetic — including a Newton's-method square root
    written from scratch, since JavaScript has no built-in integer square root.
    Verified two independent ways before trusting any digit. The method is the
    Gauss–Legendre / Brent–Salamin algorithm (1970s); the implementation and
    verification above are mine.
  </p>

  <a
    href="https://github.com/BurhanuddinMunshi53"
    target="_blank"
    rel="noreferrer"
    className="link-underline inline-flex items-center gap-1.5 text-sm font-medium mt-6"
  >
    <Github className="h-3.5 w-3.5" />
    See the code
  </a>
</article>
              </article>
            ))}
          </div>
        </section>
      )}
      {/* Beyond code — manually added, not pulled from GitHub */}
<section className="container pb-14 md:pb-20">
  <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
    <div>
      <p className="eyebrow mb-2">Beyond the code · manually added</p>
      <h2 className="font-semibold text-2xl md:text-3xl tracking-tight">Also building: a novel.</h2>
    </div>
    <p className="text-sm text-muted-foreground max-w-md">
      Everything above is live from GitHub. This one isn't — it's a book, not a repo.
    </p>
  </div>

  <a
    href="/EchoProtocol.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="soft-card p-6 md:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 group"
  >
    <div className="w-full sm:w-40 flex-shrink-0">
      <img
        src={echoProtocolCover}
        alt="Echo Protocol book cover"
        className="w-full h-auto rounded-lg border border-border shadow-sm"
      />
    </div>

    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-accent/15 text-accent inline-flex items-center gap-1.5">
          <BookOpen className="h-3 w-3" />
          Fiction · Sci-Fi Thriller
        </span>
        <span className="text-[11px] text-muted-foreground">The Quantum Archives · Volume One</span>
      </div>

      <h3 className="font-semibold text-2xl md:text-3xl tracking-tight mt-4 group-hover:text-accent transition-colors">
        Echo Protocol
      </h3>

      <p className="text-sm md:text-base text-foreground/80 mt-3 leading-relaxed max-w-2xl">
        A reality-rewriting system. A researcher missing five years of memory. And a choice
        no one should have to make alone. A full-length novel — written, edited, and designed
        end to end.
      </p>

      <div className="flex items-center gap-2 mt-5 text-sm font-medium text-accent">
        Read the book
        <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </div>
  </a>
</section>

      {/* All repositories */}
      {rest.length > 0 && (
        <section className="container pb-16 md:pb-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
            <div>
              <p className="eyebrow mb-2">All repositories</p>
              <h2 className="font-semibold text-2xl md:text-3xl tracking-tight">
                Live from GitHub · {stats.totalRepos} public {stats.totalRepos === 1 ? "repo" : "repos"}
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {pageItems.map((r) => (
              <a
                key={r.name}
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-card p-5 group flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm truncate pr-2">{humanize(r.name)}</p>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                </div>
                <p className="text-[11px] font-mono text-muted-foreground mt-1 truncate">{r.name}</p>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-3 leading-relaxed flex-1">
                  {r.description ?? "—"}
                </p>
                {r.topics && r.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {r.topics.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-subtle border border-border text-muted-foreground">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-3 mt-4 text-[11px] text-muted-foreground">
                  {r.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${langColor[r.language] ?? "bg-muted-foreground"}`} />
                      {r.language}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1"><Star className="h-3 w-3" />{r.stargazers_count}</span>
                  <span className="inline-flex items-center gap-1"><GitFork className="h-3 w-3" />{r.forks_count}</span>
                  <span className="ml-auto">{timeAgo(r.updated_at)}</span>
                </div>
              </a>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-subtle disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`h-9 min-w-9 px-3 rounded-full text-xs font-mono transition-colors ${
                    n === safePage
                      ? "bg-accent text-accent-foreground"
                      : "border border-border hover:bg-subtle text-muted-foreground"
                  }`}
                >
                  {n.toString().padStart(2, "0")}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-subtle disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
          <p className="text-center text-[11px] font-mono text-muted-foreground mt-4">
            Page {safePage.toString().padStart(2, "0")} of {totalPages.toString().padStart(2, "0")} · {rest.length} repositories
          </p>
        </section>
      )}

      <section className="container pb-20">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">New repositories appear here automatically within minutes of pushing to GitHub.</p>
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full border border-border hover:border-accent/40 hover:bg-subtle text-sm font-medium transition-colors"
          >
            <Github className="h-4 w-4" />
            Visit GitHub profile
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <ConnectWithMe />
    </SiteLayout>
  );
};

const StatCard = ({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) => (
  <div className="soft-card p-4 md:p-5">
    <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
      {icon}
      {label}
    </p>
    <p className="font-semibold text-2xl md:text-3xl tracking-tight mt-2">{value}</p>
  </div>
);

export default Projects;
