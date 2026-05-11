import { GraduationCap, BookOpen, Code2, Award, Brain, Compass, Target, Library, Lightbulb, ScrollText } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const blocks = [
  {
    tag: "Formal",
    icon: GraduationCap,
    title: "Secondary Education — Class 9",
    org: "Panjataniyah Higher Secondary School, Barwani",
    period: "2014 — Present",
    points: [
      { label: "Focus", text: "Advanced mathematics, logical reasoning, and the foundational sciences that quietly underpin computer science." },
      { label: "Outcome", text: "A fluency in translating abstract academic concepts into concrete, real-world software architecture and algorithmic problem-solving." },
      { label: "Discipline", text: "A study rhythm built around daily problem-sets, written derivations, and end-of-week reviews — the same loop I now apply to code." },
    ],
  },
  {
    tag: "Self-directed",
    icon: Code2,
    title: "Independent Technical Studies",
    org: "Self-taught researcher, builder, and shipper",
    period: "2023 — Present",
    points: [
      { label: "Python", text: "Two years of intensive study covering automation pipelines, async programming, data structures, clean architecture, and battle-tested error handling." },
      { label: "Web", text: "End-to-end frontend craft: HTML5 semantics, modern CSS layout, Tailwind design systems, responsive UI/UX, and component-driven React." },
      { label: "Backend", text: "REST API design with Node.js and Express, MongoDB schema modelling, caching layers, and the discipline of writing services that survive the third user." },
      { label: "Hours", text: "400+ deliberate hours invested in shipping functional, production-grade tools — currency terminals, SaaS prototypes, file-system automations, and more." },
    ],
  },
];

const philosophy = [
  { icon: BookOpen, title: "Read", desc: "Official documentation, RFCs, and source code — primary sources will always beat tutorial summaries." },
  { icon: Code2, title: "Build", desc: "Every concept I encounter becomes a small working artifact within forty-eight hours, or it doesn't truly exist in my head." },
  { icon: Award, title: "Ship", desc: "Done beats perfect. Real users, real feedback loops, and real bug reports are the only honest teachers." },
];

const curriculum = [
  { icon: Brain, title: "Computer Science Foundations", desc: "Data structures, algorithms, time/space complexity, recursion, and the mental models behind a clean abstraction.", topics: ["Big-O", "Trees & Graphs", "Hash maps", "Recursion"] },
  { icon: Compass, title: "Systems & Architecture", desc: "REST design, caching strategies, rate-limiting, queue patterns, and the trade-offs between consistency and availability.", topics: ["REST", "Caching", "Rate-limit", "MongoDB"] },
  { icon: Target, title: "Engineering Practice", desc: "Git workflows, semantic versioning, README discipline, code reviews against my own past self, and CI/CD mindsets.", topics: ["Git", "Semver", "Docs", "Testing"] },
];

const Education = () => (
  <SiteLayout>
    <PageHeader
      index="01"
      title="Education"
      subtitle="Formal schooling intersecting thousands of hours of self-directed engineering. Where the syllabus ends, the project begins — and where the project ends, the next study cycle quietly begins again."
    />

    <section className="container py-14 md:py-20">
      <div className="grid lg:grid-cols-2 gap-5 md:gap-6">
        {blocks.map((b, i) => (
          <Reveal key={b.title} delay={i * 100}>
            <article className="soft-card p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="h-10 w-10 rounded-lg bg-accent/15 grid place-items-center">
                  <b.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </div>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-subtle text-muted-foreground">
                  {b.tag}
                </span>
              </div>
              <h2 className="font-semibold text-xl md:text-2xl tracking-tight">{b.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">{b.org}</p>
              <p className="text-xs text-muted-foreground mt-1 font-mono">{b.period}</p>

              <div className="mt-6 pt-6 border-t border-border space-y-4">
                {b.points.map((p) => (
                  <div key={p.label} className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-3">
                    <span className="eyebrow pt-0.5">{p.label}</span>
                    <p className="text-sm leading-relaxed">{p.text}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="border-t border-border bg-subtle/40">
      <div className="container py-16 md:py-24">
        <Reveal>
          <p className="eyebrow mb-3">Learning loop</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight max-w-xl">
            Read. Build. Ship.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
            A three-step loop I have refined into muscle memory. Skip any of these stages and the
            knowledge evaporates within a week — execute all three and it compounds for years.
            Every meaningful skill in my toolkit was forged inside this exact rhythm.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-14">
          {philosophy.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="soft-card p-6 h-full">
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                <p.icon className="h-6 w-6 mt-4 text-accent" strokeWidth={1.75} />
                <h3 className="font-semibold text-lg mt-4">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-border">
      <div className="container py-16 md:py-24">
        <Reveal>
          <p className="eyebrow mb-3">Self-built curriculum</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight max-w-2xl">
            The syllabus I wrote for myself.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
            No bootcamp, no degree program, no instructor. Just a well-curated reading list, a
            terminal, and a refusal to let any concept stay theoretical for more than two days.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-14">
          {curriculum.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="soft-card p-6 flex flex-col h-full">
                <c.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="font-semibold text-lg mt-5">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {c.topics.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-subtle text-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Reading list */}
    <section className="border-t border-border bg-subtle/30">
      <div className="container py-16 md:py-24">
        <Reveal>
          <p className="eyebrow mb-3">Reading shelf</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight max-w-2xl">
            The texts that shaped how I think about software.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
            A rotating shelf of books, papers, and source repositories that I return to whenever a
            decision feels uncertain. Most of them argue against the trend cycle.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-10">
          {[
            { icon: Library, title: "The Pragmatic Programmer", desc: "A working developer's bible — every chapter has saved me from a future bug at least once." },
            { icon: Lightbulb, title: "A Philosophy of Software Design", desc: "Ousterhout's quiet, rigorous case for shallow modules, deep functions, and complexity that earns its keep." },
            { icon: ScrollText, title: "Source code of mature OSS", desc: "Reading FastAPI, Express, and Tailwind internals teaches more than ten tutorials ever could." },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <div className="soft-card p-6 h-full">
                <b.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="font-semibold text-lg mt-5">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Languages */}
    <section className="border-t border-border">
      <div className="container py-16 md:py-24 grid lg:grid-cols-[1fr_1.4fr] gap-10">
        <Reveal>
          <p className="eyebrow mb-3">Languages</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight">
            The languages I think and write in.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-4">
            {[
              { lang: "English", level: "Professional fluency — all technical writing and client communication." },
              { lang: "Hindi", level: "Native speaker — primary day-to-day language." },
              { lang: "Urdu", level: "Conversational — second native language at home." },
              { lang: "Arabic", level: "Reading proficiency — religious and classical texts." },
            ].map((l) => (
              <div key={l.lang} className="soft-card p-5 flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-accent/15 grid place-items-center shrink-0">
                  <span className="text-accent font-mono text-sm">{l.lang.slice(0, 2)}</span>
                </div>
                <div>
                  <p className="font-semibold">{l.lang}</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{l.level}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  </SiteLayout>
);

export default Education;
