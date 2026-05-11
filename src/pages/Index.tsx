import { Link } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Code2, Database, Globe, Wrench, Sparkles, ShieldCheck, Quote, Zap, Layers, Boxes } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import ConnectWithMe from "@/components/ConnectWithMe";
import portrait from "@/assets/portrait.jpg";

// 3D scene is lazy-loaded so the initial HTML/CSS paints instantly.
const Hero3D = lazy(() => import("@/components/Hero3D"));

const stats = [
  { value: "400+", label: "Hours shipped" },
  { value: "3+", label: "Years coding" },
  { value: "10+", label: "Projects built" },
  { value: "2", label: "SaaS prototypes" },
];

const stack = [
  { icon: Code2, title: "Python", desc: "Automation pipelines, scraping engines, financial tooling, and rigorously-tested backend logic." },
  { icon: Globe, title: "Frontend", desc: "Modern HTML5, semantic CSS, Tailwind systems and React for fast, accessible, responsive UI." },
  { icon: Database, title: "Backend", desc: "Node.js services, MongoDB schemas, REST APIs, and pragmatic caching for predictable performance." },
  { icon: Wrench, title: "Tooling", desc: "Git workflows, GitHub releases, documentation-first engineering, and a CI/CD mindset from day one." },
];

const principles = [
  { icon: Sparkles, title: "Clarity over cleverness", desc: "Code is read ten times more often than it is written. Every file should explain itself in under a minute." },
  { icon: ShieldCheck, title: "Resilience by default", desc: "Rate-limits, retries, caches, and graceful failure modes are not optional — they are the product." },
  { icon: Wrench, title: "Ship, then refine", desc: "A working v1 in production teaches more in a week than a perfect v3 stuck in planning ever will." },
];

const services = [
  { icon: Zap, title: "Automation & scripting", desc: "Custom Python tools that quietly remove the repetitive 30-minute tasks from your week — file pipelines, scrapers, schedulers, report generators." },
  { icon: Layers, title: "Full-stack web products", desc: "End-to-end React + Node.js applications with thoughtful UX, real authentication, persistent storage, and a deployment story you can trust." },
  { icon: Boxes, title: "API & data tooling", desc: "Resilient integrations with third-party APIs — caching, rate-limit shields, retry logic, and observable failure modes baked in from commit one." },
];

const ticker = [
  "Python", "TypeScript", "React", "Node.js", "MongoDB", "Tailwind", "Express",
  "Vite", "Git", "REST", "Async", "Caching", "Web scraping", "Automation",
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
  <SiteLayout>
    {/* Hero */}
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">
      <div
        className="absolute inset-0 grid-bg opacity-40 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <Suspense fallback={null}>
        <Hero3D />
      </Suspense>
      <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-3xl float-slow pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container relative pt-12 md:pt-24 pb-16 md:pb-28 grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6 inline-flex items-center gap-2 fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for serious projects · Q3 2026
          </p>
          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] fade-up" style={{ animationDelay: "60ms" }}>
            Engineering software with
            <span className="text-accent"> precision</span>,
            <br className="hidden sm:block" /> shipped with intent.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mt-6 md:mt-8 max-w-xl leading-relaxed fade-up" style={{ animationDelay: "140ms" }}>
            I'm <span className="text-foreground font-medium">Burhanuddin Munshi</span> — an
            independent developer based in Madhya Pradesh, India. For the past three years I have
            been quietly building Python automation systems, fintech terminals, and full-stack web
            products that survive contact with real users. Four hundred hours of deep, deliberate
            engineering — and counting.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8 md:mt-10 fade-up" style={{ animationDelay: "220ms" }}>
            <Link to="/projects" className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity pulse-ring">
              View selected work
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-subtle transition-colors">
              Start a conversation
            </Link>
          </div>
        </div>

        <div
          className="relative mx-auto lg:mx-0 w-full max-w-md"
          style={{ transform: `translateY(${scrollY * -0.06}px)` }}
        >
          <div className="absolute -inset-6 bg-[radial-gradient(circle_at_30%_20%,hsl(217_91%_60%/0.35),transparent_60%)] blur-2xl rounded-[2rem] pointer-events-none float-slow" />
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-accent/30" aria-hidden />
          <div className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-2xl border border-border" aria-hidden />

          <div className="relative rounded-2xl bg-gradient-to-br from-card to-subtle border border-border shadow-[0_30px_80px_-30px_hsl(217_91%_60%/0.45)] p-2.5">
            <div className="relative overflow-hidden rounded-xl ring-1 ring-border">
              <img
                src={portrait}
                alt="Portrait of Burhanuddin Munshi, independent Python and full-stack developer"
                className="w-full h-auto object-cover aspect-[4/5] grayscale-[15%] contrast-[1.05]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-md border border-border">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-wider">Online</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 px-2 pb-1">
              <div>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">// developer</p>
                <p className="font-semibold text-sm mt-0.5">Burhanuddin Munshi</p>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-border text-muted-foreground bg-subtle/60">
                Barwani · MP
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Tech ticker */}
    <section className="border-y border-border bg-subtle/30 overflow-hidden">
      <div className="marquee-mask py-5">
        <div className="marquee-track flex gap-10 whitespace-nowrap">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-accent mr-2">◆</span>{t}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-b border-border bg-subtle/40">
      <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className={`py-8 md:py-10 px-4 md:px-6 ${i === 0 ? 'border-l border-border' : ''}`}>
              <p className="font-semibold text-3xl md:text-4xl tracking-tight">{s.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1.5">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* About narrative */}
    <section className="container py-20 md:py-28 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
      <Reveal>
        <p className="eyebrow mb-3">00 — About</p>
        <h2 className="font-semibold text-3xl md:text-4xl tracking-tight">
          A quiet practice of building things that work.
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            I started writing Python in 2023, drawn in by the elegance of solving a tangible problem
            with a few lines of well-structured code. Three years on, that curiosity has matured into
            a disciplined practice spanning automation, financial data tooling, scraping, REST API
            design, and full-stack web development.
          </p>
          <p>
            I work alone — no team, no agency, no shortcuts. Every commit, every README, every
            deployment is owned end-to-end. This means I think deeply about caching, rate-limits,
            failure modes, documentation, and the long-tail experience of the people using what I
            ship. Software that runs on its own at 3 AM is the only kind worth building.
          </p>
          <p>
            When I'm not shipping code I'm reading source from libraries I admire, sketching system
            designs in plain text files, or studying how mature SaaS products handle the boring parts
            of their infrastructure — because that is usually where the craft lives. The work is
            patient, deliberate, and built to outlast the trend cycle.
          </p>
        </div>
      </Reveal>
    </section>

    {/* Services */}
    <section className="border-t border-border">
      <div className="container py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-3">Services</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight max-w-2xl">
            Three things I am genuinely good at.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
            Engagements typically run from a focused two-week sprint to a three-month build. Every
            project ends with documentation a future maintainer can actually read.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-14">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="soft-card p-6 md:p-7 h-full">
                <s.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="font-semibold text-lg mt-5">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Stack */}
    <section className="border-t border-border bg-subtle/30">
      <div className="container py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10 md:mb-14">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">01 — Stack</p>
              <h2 className="font-semibold text-3xl md:text-4xl tracking-tight">
                The tools I reach for, daily.
              </h2>
              <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">
                A deliberately small toolbox. I would rather know four technologies deeply than
                fourteen superficially — depth compounds, breadth rarely does.
              </p>
            </div>
            <Link to="/experience" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
              Full breakdown <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stack.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="soft-card p-6 h-full">
                <s.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                <h3 className="font-semibold text-lg mt-5">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Principles */}
    <section className="border-t border-border bg-subtle/40">
      <div className="container py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-3">02 — Principles</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight max-w-2xl">
            Three rules I refuse to compromise on.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-14">
          {principles.map((p, i) => (
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

    {/* Manifesto / quote */}
    <section className="border-t border-border">
      <div className="container py-20 md:py-28">
        <Parallax speed={0.12}>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="h-10 w-10 text-accent/60 mx-auto" strokeWidth={1.5} />
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mt-6 leading-[1.2]">
                "Software is a craft, not a sprint. The best code I have ever written looks
                effortless — and that is precisely how much effort it took."
              </p>
              <p className="eyebrow mt-8">— Personal manifesto, 2026</p>
            </div>
          </Reveal>
        </Parallax>
      </div>
    </section>

    {/* Process — six steps */}
    <section className="border-t border-border bg-subtle/30">
      <div className="container py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-3">03 — Process</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight max-w-2xl">
            How a project actually moves from email to production.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
            A simple, repeatable rhythm — designed to surface misunderstandings early, ship value
            weekly, and finish with documentation a future maintainer will thank you for.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-14">
          {[
            { n: "01", t: "Discovery call", d: "A 30-minute conversation to understand the problem, the stakeholders, and the constraints. No slides, no sales — just questions." },
            { n: "02", t: "Written proposal", d: "A short document covering scope, timeline, milestones, and a fixed price. You read it, redline it, sign it." },
            { n: "03", t: "Architecture sketch", d: "Plain-text system design before any code is written. We agree on the shape of the solution before committing to it." },
            { n: "04", t: "Weekly shipments", d: "Every seven days a working build lands in your inbox. No black boxes, no end-of-project surprises." },
            { n: "05", t: "Hardening pass", d: "Caching, rate-limits, retries, error reporting, and observability — the boring layer that decides whether the product survives Monday morning." },
            { n: "06", t: "Handover & docs", d: "A README a new engineer can follow on day one. Optional 30-day support window for questions and small adjustments." },
          ].map((step, i) => (
            <Reveal key={step.n} delay={i * 70}>
              <div className="soft-card p-6 h-full">
                <p className="text-xs font-mono text-accent">{step.n}</p>
                <h3 className="font-semibold text-lg mt-3">{step.t}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{step.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* What clients get */}
    <section className="border-t border-border">
      <div className="container py-20 md:py-28 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
        <Reveal>
          <p className="eyebrow mb-3">04 — Deliverables</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight">
            What you actually receive at the end.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Production-ready source code, hosted in your GitHub organisation",
              "A README that an engineer can follow on day one — no tribal knowledge",
              "Environment variable manifest with sensible defaults and a security note",
              "CI workflow for tests, type-checks, and linting on every push",
              "Deployment recipe for Vercel, Netlify, Render, or your own VPS",
              "30-day post-launch support window for questions and tiny adjustments",
            ].map((item, i) => (
              <li key={i} className="soft-card p-5 text-sm leading-relaxed">
                <span className="text-accent mr-2">→</span>{item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="container py-16 md:py-24">
      <Reveal>
        <div className="rounded-2xl bg-gradient-to-br from-accent/15 via-card to-card border border-border px-6 sm:px-10 py-12 md:py-20 text-center relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-60 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="eyebrow text-muted-foreground mb-4">Let's build</p>
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight max-w-2xl mx-auto leading-[1.1]">
              Got a problem worth solving?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-5 max-w-lg mx-auto leading-relaxed">
              From data pipelines to financial dashboards, from internal tools to customer-facing
              SaaS — I write code that ships, scales, and stays running long after the demo ends.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-medium mt-8 hover:opacity-90 transition-opacity">
              Reach out
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>

    <ConnectWithMe />
  </SiteLayout>
);
};

export default Index;
