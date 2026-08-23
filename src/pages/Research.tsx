import { ElementType } from "react";
import {
  Sigma,
  History,
  Cpu,
  CheckCircle2,
  BarChart3,
  ShieldAlert,
  Library,
  ArrowUpRight,
} from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

/* ----------------------------------------------------------------------- */
/*  Data                                                                    */
/* ----------------------------------------------------------------------- */

const iterationRows = [
  { label: "Start", a: "1.00000000", b: "0.70710678", t: "0.25000000" },
  { label: "Round 1", a: "0.85355339", b: "0.84089642", t: "0.22855339" },
  { label: "Round 2", a: "0.84722490", b: "0.84720127", t: "0.22847329" },
  { label: "Round 3", a: "0.84721308", b: "0.84721308", t: "0.22847329" },
];

const digitTable = [
  { n: 1, digits: 3 },
  { n: 2, digits: 8 },
  { n: 3, digits: 19 },
  { n: 4, digits: 41 },
  { n: 5, digits: 84, highlight: true },
  { n: 6, digits: 171 },
];

const benchmark = [
  { name: "This implementation", value: 84, max: 84, color: "bg-accent" },
  { name: "Chudnovsky (1988)", value: 70, max: 84, color: "bg-sky-400" },
  { name: "Ramanujan (1910)", value: 40, max: 84, color: "bg-muted-foreground/60" },
];

const references = [
  {
    n: "[1]",
    text:
      "C. F. Gauss, unpublished notes on the arithmetic-geometric mean, c. 1800\u20131809.",
  },
  {
    n: "[2]",
    text:
      "A. M. Legendre, Exercices de calcul int\u00e9gral, 1811 \u2014 independent work on elliptic integrals underlying the same identity.",
  },
  {
    n: "[3]",
    text:
      "R. P. Brent, \u201cFast multiple-precision evaluation of elementary functions,\u201d J. ACM 23 (1976).",
  },
  {
    n: "[4]",
    text:
      "E. Salamin, \u201cComputation of \u03c0 using arithmetic-geometric mean,\u201d Math. Comp. 30 (1976).",
  },
  {
    n: "[5]",
    text:
      "S. Ramanujan, \u201cModular equations and approximations to \u03c0,\u201d Quart. J. Math. 45 (1914).",
  },
  {
    n: "[6]",
    text:
      "D. Chudnovsky & G. Chudnovsky, \u201cApproximation and complex multiplication according to Ramanujan,\u201d 1989.",
  },
];

/* ----------------------------------------------------------------------- */
/*  Small building blocks                                                   */
/* ----------------------------------------------------------------------- */

const SectionHeading = ({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: ElementType;
  eyebrow: string;
  title: string;
}) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="h-9 w-9 rounded-lg bg-accent/15 grid place-items-center shrink-0">
      <Icon className="h-4.5 w-4.5 text-accent" strokeWidth={1.75} />
    </div>
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-semibold text-xl md:text-2xl tracking-tight">{title}</h2>
    </div>
  </div>
);

const MathBlock = ({ lines }: { lines: string[] }) => (
  <div className="rounded-lg bg-subtle border border-border px-5 py-4 font-mono text-[13px] md:text-sm leading-loose overflow-x-auto">
    {lines.map((l, i) => (
      <div key={i} className="whitespace-pre text-foreground/90">
        {l}
      </div>
    ))}
  </div>
);

/* ----------------------------------------------------------------------- */
/*  Page                                                                    */
/* ----------------------------------------------------------------------- */

const Research = () => (
  <SiteLayout>
    <PageHeader
      index="05"
      title="Research"
      subtitle="A from-scratch implementation and verification of the Gauss\u2013Legendre arithmetic-geometric-mean algorithm for computing \u03c0 \u2014 built on exact big-integer arithmetic, with zero floating-point shortcuts."
    />

    <article className="container py-14 md:py-20 max-w-3xl">

      {/* Abstract */}
      <Reveal>
        <section className="soft-card p-6 md:p-9 mb-14">
          <p className="eyebrow mb-4">Abstract</p>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            This paper documents an independent implementation of the Gauss\u2013Legendre
            arithmetic-geometric-mean (AGM) algorithm for computing \u03c0, built entirely
            from exact big-integer arithmetic \u2014 including a hand-written fixed-point
            square root via Newton's method. Unlike additive series such as Ramanujan's
            or the Chudnovsky brothers', which gain a roughly fixed number of correct
            digits per term, the AGM iteration <em>doubles</em> its correct digit count
            every round. The implementation is verified two independent ways \u2014 against
            a 400-digit high-precision floating reference, and against a from-scratch
            BigInt re-implementation \u2014 with both agreeing exactly at every checkpoint
            reported below.
          </p>
        </section>
      </Reveal>

      {/* 1. Background */}
      <Reveal>
        <section className="mb-14">
          <SectionHeading icon={History} eyebrow="01 \u00b7 Background" title="Prior art" />
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
            The arithmetic-geometric mean of two numbers was studied by Gauss around
            1800 in connection with elliptic integrals, with closely related work by
            Legendre. The specific algorithm used here \u2014 turning the AGM into a
            quadratically convergent method for computing \u03c0 itself \u2014 was discovered
            independently by Richard Brent and Eugene Salamin in 1975\u201376, and is
            sometimes called the Brent\u2013Salamin algorithm. It remains one of the
            fastest known methods for computing \u03c0 to extreme precision and has been
            used in several world-record digit computations.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            This is <strong className="text-foreground">not a new algorithm</strong>.
            What follows is my own implementation, my own from-scratch square-root
            routine, and my own independent verification of it \u2014 not a claim of new
            mathematics. Section 7 states this plainly again, on purpose.
          </p>
        </section>
      </Reveal>

      {/* 2. The Iteration */}
      <Reveal>
        <section className="mb-14">
          <SectionHeading icon={Sigma} eyebrow="02 \u00b7 The method" title="The AGM iteration" />
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
            Four numbers are tracked \u2014 <code className="font-mono text-foreground">a</code>,{" "}
            <code className="font-mono text-foreground">b</code>,{" "}
            <code className="font-mono text-foreground">t</code>, and{" "}
            <code className="font-mono text-foreground">p</code> \u2014 starting from:
          </p>
          <MathBlock lines={["a\u2080 = 1", "b\u2080 = 1 / \u221a2", "t\u2080 = 1/4", "p\u2080 = 1"]} />
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed my-5">
            Each round, all four are updated simultaneously from the previous round's
            values:
          </p>
          <MathBlock
            lines={[
              "a\u2099\u208a\u2081 = (a\u2099 + b\u2099) / 2",
              "b\u2099\u208a\u2081 = \u221a(a\u2099 \u00d7 b\u2099)",
              "t\u2099\u208a\u2081 = t\u2099 \u2212 p\u2099 \u00d7 (a\u2099 \u2212 a\u2099\u208a\u2081)\u00b2",
              "p\u2099\u208a\u2081 = 2 \u00d7 p\u2099",
            ]}
          />
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed my-5">
            After any round, \u03c0 is recovered from the current{" "}
            <code className="font-mono text-foreground">a</code>,{" "}
            <code className="font-mono text-foreground">b</code>,{" "}
            <code className="font-mono text-foreground">t</code> \u2014 not from{" "}
            <code className="font-mono text-foreground">a</code> or{" "}
            <code className="font-mono text-foreground">b</code> alone:
          </p>
          <MathBlock lines={["\u03c0 \u2248 (a + b)\u00b2 / (4t)"]} />

          <p className="eyebrow mt-8 mb-3">Worked trace (verified, 3 rounds)</p>
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
                {iterationRows.map((r) => (
                  <tr key={r.label} className="border-t border-border">
                    <td className="px-4 py-2.5 text-muted-foreground">{r.label}</td>
                    <td className="px-4 py-2.5">{r.a}</td>
                    <td className="px-4 py-2.5">{r.b}</td>
                    <td className="px-4 py-2.5">{r.t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-3">
            Note that <code className="font-mono">a</code> and{" "}
            <code className="font-mono">b</code> converge to each other \u2014 approximately
            0.8472130847\u2026 \u2014 which is <em>not</em> \u03c0. \u03c0 only appears once{" "}
            <code className="font-mono">(a+b)\u00b2/(4t)</code> is evaluated.
          </p>
        </section>
      </Reveal>

      {/* 3. Implementation */}
      <Reveal>
        <section className="mb-14">
          <SectionHeading icon={Cpu} eyebrow="03 \u00b7 Implementation" title="Exact arithmetic, no shortcuts" />
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
            Every value above is stored as a fixed-point integer (a JavaScript{" "}
            <code className="font-mono text-foreground">BigInt</code> scaled by 10
            raised to a chosen working-precision power) rather than a floating-point{" "}
            <code className="font-mono text-foreground">Number</code>. Two consequences
            follow from that choice:
          </p>
          <ul className="space-y-3">
            {[
              "No rounding error accumulates silently across rounds \u2014 every operation is an exact integer division or multiplication, truncated at a precision boundary the implementer controls explicitly.",
              "Square roots \u2014 the one non-trivial operation the algorithm needs \u2014 have no native BigInt equivalent, so a fixed-point Newton's-method square root was written from scratch: y\u2099\u208a\u2081 = (y\u2099 + x/y\u2099) / 2, seeded from an exact integer square root and refined a handful of iterations to full working precision.",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* 4. Verification */}
      <Reveal>
        <section className="mb-14">
          <SectionHeading icon={CheckCircle2} eyebrow="04 \u00b7 Verification" title="Checked two independent ways" />
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
            Correctness was never assumed from a single code path. Two independently
            written implementations were run against each other:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="soft-card p-5">
              <p className="text-xs font-mono text-accent mb-2">REFERENCE</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A 400-digit floating-point evaluation of the same four update equations,
                computed independently in Python (mpmath), sharing no code with the
                production implementation.
              </p>
            </div>
            <div className="soft-card p-5">
              <p className="text-xs font-mono text-accent mb-2">PRODUCTION</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The BigInt fixed-point implementation described in \u00a73, including the
                hand-written Newton's-method square root.
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
            Both agreed digit-for-digit at every checkpoint in Section 5, with no
            discrepancy at any tested round.
          </p>
        </section>
      </Reveal>

      {/* 5. Results */}
      <Reveal>
        <section className="mb-14">
          <SectionHeading icon={BarChart3} eyebrow="05 \u00b7 Results" title="Digits double, not add" />
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            Correct digit counts below were determined by direct string comparison
            against the reference value \u2014 not estimated from theory:
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mb-8">
            <table className="w-full text-sm font-mono">
              <thead>
                <tr className="bg-subtle text-muted-foreground">
                  <th className="text-left px-4 py-2.5 font-medium">Iteration</th>
                  <th className="text-left px-4 py-2.5 font-medium">Correct digits</th>
                </tr>
              </thead>
              <tbody>
                {digitTable.map((r) => (
                  <tr
                    key={r.n}
                    className={`border-t border-border ${r.highlight ? "bg-accent/10" : ""}`}
                  >
                    <td className="px-4 py-2.5 text-muted-foreground">{r.n}</td>
                    <td className={`px-4 py-2.5 ${r.highlight ? "text-accent font-semibold" : ""}`}>
                      {r.digits}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="eyebrow mb-4">Same number of steps, vs. the classic series</p>
          <div className="space-y-4">
            {benchmark.map((b) => (
              <div key={b.name}>
                <div className="flex justify-between text-xs md:text-sm font-mono mb-1.5">
                  <span className="text-foreground">{b.name}</span>
                  <span className="text-muted-foreground">{b.value} digits</span>
                </div>
                <div className="h-2.5 rounded-full bg-subtle overflow-hidden">
                  <div
                    className={`h-full rounded-full ${b.color}`}
                    style={{ width: `${(b.value / b.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-4">
            At 5 rounds / terms each: this implementation reaches 84 correct digits,
            ahead of Chudnovsky's series (\u2248 70) and well ahead of Ramanujan's 1910
            series (\u2248 40) at the same step count \u2014 a direct consequence of quadratic
            vs. linear convergence, not a claim about either series being flawed.
          </p>
        </section>
      </Reveal>

      {/* 6. Scope & Attribution */}
      <Reveal>
        <section className="mb-14">
          <div className="soft-card p-6 md:p-8 border-accent/25">
            <SectionHeading icon={ShieldAlert} eyebrow="06 \u00b7 Scope" title="What this is, plainly" />
            <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">The algorithm is not mine.</strong>{" "}
                The Gauss\u2013Legendre AGM method for \u03c0 is a well-established result,
                independently formalized by Brent and Salamin in 1975\u201376, itself built
                on Gauss and Legendre's 19th-century work on elliptic integrals.
              </p>
              <p>
                <strong className="text-foreground">The implementation and verification are mine.</strong>{" "}
                The exact fixed-point BigInt arithmetic, the from-scratch Newton's-method
                square root, and the two-implementation cross-check methodology in \u00a74
                were built and run independently for this work.
              </p>
              <p>
                This distinction is stated here deliberately, not as a disclaimer buried
                in fine print \u2014 accurate attribution is part of the engineering, not an
                afterthought to it.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 7. References */}
      <Reveal>
        <section>
          <SectionHeading icon={Library} eyebrow="07 \u00b7 References" title="Sources" />
          <ol className="space-y-2.5">
            {references.map((r) => (
              <li key={r.n} className="text-xs md:text-sm text-muted-foreground leading-relaxed flex gap-3">
                <span className="font-mono text-foreground/70 shrink-0">{r.n}</span>
                <span>{r.text}</span>
              </li>
            ))}
          </ol>

          <a
            href="https://github.com/BurhanuddinMunshi53"
            target="_blank"
            rel="noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-sm font-medium mt-8"
          >
            View implementation source on GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </section>
      </Reveal>

    </article>
  </SiteLayout>
);

export default Research;
