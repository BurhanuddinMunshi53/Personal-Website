import { Sigma, Wrench, Github } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const startValues = [
  { k: "a₀", v: "1" },
  { k: "b₀", v: "1 / √2" },
  { k: "t₀", v: "1 / 4" },
  { k: "p₀", v: "1" },
];

const trace = [
  { round: "Start", a: "1.00000000", b: "0.70710678", t: "0.25000000" },
  { round: "Round 1", a: "0.85355339", b: "0.84089642", t: "0.22855339" },
  { round: "Round 2", a: "0.84722490", b: "0.84720127", t: "0.22847329" },
  { round: "Round 3", a: "0.84721308", b: "0.84721308", t: "0.22847329" },
];

const FormulaBlock = ({ lines }: { lines: string[] }) => (
  <div className="rounded-lg bg-subtle border border-border px-5 py-4 font-mono text-[13px] md:text-sm leading-loose overflow-x-auto">
    {lines.map((l, i) => (
      <div key={i} className="whitespace-pre text-foreground/90">
        {l}
      </div>
    ))}
  </div>
);

const Research = () => (
  <SiteLayout>
    <PageHeader
      index="05"
      title="Research"
      subtitle="How I calculate π using the arithmetic-geometric-mean method — the formula, the reasoning behind it, and how I built it."
    />

    <article className="container py-14 md:py-20 max-w-3xl">

      {/* The formula */}
      <Reveal>
        <section className="mb-16">
          <p className="eyebrow mb-3">The formula</p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
            Everything below builds toward one final line. Four numbers — a, b, t, and p —
            get updated together, over and over, and each round they get closer to
            unlocking this:
          </p>
          <FormulaBlock lines={["π ≈ (a + b)² / (4t)"]} />
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-5">
            Nothing here is summed term by term like Ramanujan's or the Chudnovsky
            brothers' series. Instead, two numbers are pushed toward each other every
            round, and π falls out of that gap — a method called the arithmetic-geometric
            mean, or AGM for short.
          </p>
        </section>
      </Reveal>

      {/* How to calculate it */}
      <Reveal>
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-lg bg-accent/15 grid place-items-center shrink-0">
              <Sigma className="h-4.5 w-4.5 text-accent" strokeWidth={1.75} />
            </div>
            <h2 className="font-semibold text-xl md:text-2xl tracking-tight">
              How to calculate it
            </h2>
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
            Start with four values:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {startValues.map((s) => (
              <div key={s.k} className="soft-card p-4 text-center">
                <p className="font-mono text-accent text-sm mb-1">{s.k}</p>
                <p className="font-mono text-xs text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
            Then run one round: take all four values and update all four at once, using
            each other's <em>previous</em> values — never the ones you just calculated
            this round.
          </p>
          <FormulaBlock
            lines={[
              "a_new = (a + b) / 2",
              "b_new = √(a × b)",
              "t_new = t − p × (a − a_new)²",
              "p_new = 2 × p",
            ]}
          />

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-5 mb-5">
            That's one round. Feed the new a, b, t, p back in as the starting point for
            the next round, and repeat. Here's what the first three rounds actually look
            like, worked out in full:
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mb-6">
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

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Notice a and b end up almost identical — about 0.847213 — after just three
            rounds. That number by itself isn't π, and it's not supposed to be. Only once
            you plug that round's a, b, and t into <code className="font-mono text-foreground">(a + b)² / (4t)</code> does
            π actually appear. Do that after round 3 and you already get 3.14159265358979...,
            correct to 19 digits. Do it after round 5, and you're at 84 correct digits —
            each round roughly doubles what the last one got right.
          </p>
        </section>
      </Reveal>

      {/* How it's built */}
      <Reveal>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-lg bg-accent/15 grid place-items-center shrink-0">
              <Wrench className="h-4.5 w-4.5 text-accent" strokeWidth={1.75} />
            </div>
            <h2 className="font-semibold text-xl md:text-2xl tracking-tight">
              How it's built
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
            The version I actually run doesn't use JavaScript's regular numbers at all —
            regular floating-point math runs out of precision after about 15 digits,
            which defeats the point. Every value is stored as a plain integer scaled up
            by a huge power of ten, and every operation on it — including the square
            root, which has no built-in integer version — is done by hand. I wrote the
            square root as a fixed-point Newton's method: guess, refine, guess again,
            a few times over, until it's exact to however many digits I've asked for.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
            I checked it two separate ways before trusting any of the numbers above: once
            through a high-precision math library in Python, and once through my own
            from-scratch integer version, written independently. Both landed on the exact
            same digits at every round I tested.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            The method itself — using the arithmetic-geometric mean to compute π this
            way — isn't something I invented. Gauss and Legendre laid the groundwork in
            the early 1800s, and Richard Brent and Eugene Salamin turned it into this
            exact algorithm independently in the mid-1970s. What's mine is the
            implementation above: the exact arithmetic, the square root routine, and
            checking my own work until I trusted it.
          </p>

          <a
            href="https://github.com/BurhanuddinMunshi53"
            target="_blank"
            rel="noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-sm font-medium mt-8"
          >
            <Github className="h-3.5 w-3.5" />
            See the code on GitHub
          </a>
        </section>
      </Reveal>

    </article>
  </SiteLayout>
);

export default Research;
