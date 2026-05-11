import { Code2, Globe, FileText, Server, Cpu, GitBranch, Trophy, Rocket, Coffee } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const skills = [
  {
    icon: Code2,
    title: "Python Development",
    desc: "Production-grade automation, data processing, scraping engines, and backend logic powering CLI tools, terminals, and SaaS prototypes.",
    tags: ["Requests", "BeautifulSoup", "Pandas", "Async", "Regex"],
  },
  {
    icon: Globe,
    title: "Frontend Engineering",
    desc: "Responsive, mobile-first interfaces built on semantic HTML5, modern CSS layout, and Tailwind design systems — accessible by default, fast on first paint.",
    tags: ["HTML5", "CSS3", "Tailwind", "React", "TypeScript"],
  },
  {
    icon: FileText,
    title: "Technical Writing",
    desc: "Clear, structured documentation, READMEs, and project handbooks. Code without docs is half-shipped — and unmaintainable by month three.",
    tags: ["Markdown", "GitHub", "Handbooks", "API docs"],
  },
  {
    icon: Server,
    title: "Backend Architecture",
    desc: "REST APIs, schema modelling, authentication flows, and scalable services with Node.js, Express, and MongoDB — designed for graceful failure.",
    tags: ["Node.js", "Express", "MongoDB", "REST", "JWT"],
  },
  {
    icon: Cpu,
    title: "Systems & Performance",
    desc: "Caching strategies, rate-limit handling, retry logic, and the patient art of making third-party APIs feel instant for the end user.",
    tags: ["Caching", "Rate-limit", "Retries", "Profiling"],
  },
  {
    icon: GitBranch,
    title: "DevOps & Workflow",
    desc: "Git-based collaboration, semantic releases, environment management, and a CI/CD mindset baked in from the very first commit.",
    tags: ["Git", "GitHub Actions", "Semver", ".env"],
  },
];

const timeline = [
  {
    period: "2025 — 2026",
    title: "Advanced Systems & SaaS",
    desc: "Architecting the Global Currency Terminal and multi-profile SaaS systems built for professional, repeatable workflows. Deeper focus on caching strategy, intelligent rate-limit avoidance, resilient API design, and the operational discipline of running production services solo.",
    current: true,
  },
  {
    period: "2024 — 2025",
    title: "Web & Open Source",
    desc: "Expanded into full-stack web development with React, Tailwind, and Node.js. Began publishing technical work on GitHub — open repositories, written project handbooks, and reusable architectural patterns I could trust my future self to read.",
  },
  {
    period: "2023 — 2024",
    title: "The beginning",
    desc: "Started with Python — logic puzzles, mathematical scripts, file-system automations, and the foundational discipline of breaking complex problems into small, testable, named functions. Every script taught one specific lesson, and that lesson was always written down.",
  },
];

const Experience = () => (
  <SiteLayout>
    <PageHeader
      index="02"
      title="Experience"
      subtitle="Three years of self-directed, full-stack engineering. From early mathematical scripts to shipping multi-profile SaaS systems — every project chosen deliberately, every lesson documented, every result owned end-to-end."
    />

    <section className="container py-14 md:py-20">
      <p className="eyebrow mb-3">Core expertise</p>
      <h2 className="font-semibold text-3xl md:text-4xl tracking-tight max-w-xl">
        What I do, in detail.
      </h2>
      <p className="text-muted-foreground mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
        A focused stack covering both ends of a modern product — from raw Python automation in
        the basement to the polished React surface a customer actually sees and touches.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-12">
        {skills.map((s) => (
          <article key={s.title} className="soft-card p-6 md:p-7 flex flex-col">
            <div className="h-10 w-10 rounded-lg bg-accent/15 grid place-items-center">
              <s.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
            </div>
            <h3 className="font-semibold text-lg md:text-xl mt-5">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{s.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {s.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-subtle text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="border-t border-border bg-subtle/40">
      <div className="container py-16 md:py-24">
        <p className="eyebrow mb-3">Timeline</p>
        <h2 className="font-semibold text-3xl md:text-4xl tracking-tight max-w-xl">
          The journey, in chapters.
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
          Three years, three distinct eras — each one earned the right to the next by shipping
          something real and learning publicly from what broke.
        </p>

        <div className="mt-10 md:mt-14 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-8 md:space-y-10">
            {timeline.map((t) => (
              <div key={t.period} className="relative pl-8">
                <span
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                    t.current
                      ? "bg-accent border-accent"
                      : "bg-background border-foreground/40"
                  }`}
                />
                <p className="text-xs font-mono text-muted-foreground">{t.period}</p>
                <h3 className="font-semibold text-lg md:text-xl mt-1 flex items-center gap-2 flex-wrap">
                  {t.title}
                  {t.current && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">
                      Now
                    </span>
                  )}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="border-t border-border">
      <div className="container py-16 md:py-24 grid lg:grid-cols-[1fr_1.4fr] gap-10">
        <Reveal>
          <p className="eyebrow mb-3">Working style</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight">
            How I run a project, end to end.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <ol className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <li><span className="text-foreground font-medium">01 — Discovery.</span> A short written brief, the real constraints surfaced early, and a clear definition of "done" for v1.</li>
            <li><span className="text-foreground font-medium">02 — Architecture.</span> A plain-text system sketch covering data flow, caching, failure modes, and the smallest possible surface area.</li>
            <li><span className="text-foreground font-medium">03 — Build in slices.</span> Vertical, end-to-end slices over horizontal layers — every commit moves the product closer to shippable.</li>
            <li><span className="text-foreground font-medium">04 — Documentation.</span> README, architecture notes, and inline comments written alongside the code, never as a final-week chore.</li>
            <li><span className="text-foreground font-medium">05 — Ship and iterate.</span> Release early, watch the logs, fix the boring failures first, and let real usage shape the roadmap.</li>
          </ol>
        </Reveal>
      </div>
    </section>

    {/* Highlights */}
    <section className="border-t border-border bg-subtle/30">
      <div className="container py-16 md:py-24">
        <Reveal>
          <p className="eyebrow mb-3">Highlights</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight max-w-2xl">
            Moments that proved the practice.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-10">
          {[
            { icon: Trophy, title: "First production deploy", desc: "Shipped the Global Currency Terminal to real users — and watched the cache layer absorb a traffic spike on day one without a single 429." },
            { icon: Rocket, title: "First SaaS prototype", desc: "Code Companion Pro went from blank canvas to functional multi-profile workspace in under three weeks of focused, solo work." },
            { icon: Coffee, title: "400-hour milestone", desc: "Crossed four hundred deliberate engineering hours — measured, logged, and reviewed. Quality, not theatre." },
          ].map((h, i) => (
            <Reveal key={h.title} delay={i * 90}>
              <div className="soft-card p-6 h-full">
                <h.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="font-semibold text-lg mt-5">{h.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{h.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* What I do not do */}
    <section className="border-t border-border">
      <div className="container py-16 md:py-24 grid lg:grid-cols-[1fr_1.4fr] gap-10">
        <Reveal>
          <p className="eyebrow mb-3">Honest scope</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight">
            What I deliberately do not do.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <ul className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <li><span className="text-foreground font-medium">Pixel-perfect design from scratch.</span> I build clean, considered UI — but if you need brand-defining art direction, hire a designer first.</li>
            <li><span className="text-foreground font-medium">Native mobile apps.</span> My focus is web and Python. Mobile work is better routed to a specialist.</li>
            <li><span className="text-foreground font-medium">Sprawling enterprise migrations.</span> I thrive on focused, owned-end-to-end products — not coordinating ten-person committees.</li>
            <li><span className="text-foreground font-medium">Anything I cannot stand behind.</span> If a project is wrong for me, I will say so on day one and recommend someone better suited.</li>
          </ul>
        </Reveal>
      </div>
    </section>
  </SiteLayout>
);

export default Experience;
