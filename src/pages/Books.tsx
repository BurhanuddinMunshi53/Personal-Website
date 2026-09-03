;import { BookOpen, ArrowUpRight, Sparkles } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import echoProtocolCover from "@/assets/EchoProtocolCover.png";
import theLoomCover from "@/assets/TheLoomCover.png";

interface Book {
  series: string;
  title: string;
  tagline: string;
  genres: string[];
  description: string[];
  pullQuote: string;
  href: string;
  status: "Available now" | "Coming soon";
  cover: string;
}

const books: Book[] = [
  {
    series: "The Quantum Archives · Volume One",
    title: "Echo Protocol",
    tagline: "Some memories aren't lost. They're hidden — for your own protection, and someone else's.",
    genres: ["Sci-Fi", "Thriller"],
    description: [
"New Atlas, 2048. Beneath the black-glass tower sits a machine that can rewrite reality.",

"Dr. Aiden Kade has worked at the Global Quantum Authority for twelve years. He remembers seven. That gap is one he trained himself not to notice — until a message arrives with no sender, timestamped thirty years in the future: Do not let Voss activate Echo Protocol.",
      
"To stop it, Aiden must recover his erased past with Dr. Maya Ilyas, the neuroscientist who built the tech now used against him; Sofia Reyes, ex-GQA running on instinct and an expired badge; and Noah Petrov, the engineer who tried to stop the prototype once and vanished for two years.",

"Above them is Director Elias Voss. Not a monster. That’s what makes him dangerous.",
      
"Three doors await — completion, severance, or synthesis — and each one costs something you don’t get to keep.",
    ],
    pullQuote: "A twisting, high-concept thriller about memory, identity, and the cost of playing god with both.",
    href: "/EchoProtocol.pdf",
    status: "Available now",
    cover: echoProtocolCover,
  },
  {
    series: "The Quantum Archives · Volume Two",
    title: "The Loom",
    tagline: "Some warnings aren't meant to be trusted, they are meant to be answered.",
    genres: ["Sci-Fi", "Thriller"],
    description: [
      "Six years after Echo Protocol, New Atlas has healed — imperfectly, but healed. The Continuity Council stands in daylight where the old agency stood in secret, and Aiden Kade has spent six years learning to be ordinary again with Maya, Sofia, and Noah.",

"Then a second signal arrives. Same encryption. Same impossible sender. Seven words: The cycle has started again, prepare. This time with coordinates beyond anywhere humanity has probed, and a line in his own handwriting: Find the Cradle before it finds you a reason not to.",

"Fifty days into deep space with pilot Kalinda Osei — who grew up reading his case files as coursework — and Director Marcus Webb, who is quietly preparing a contingency he doesn't share, they find a structure the size of a small moon that answers before they ask.",

"Inside waits the Loom — the memory of twelve prior worlds that reached the same crossroads and none solved cleanly. It speaks sometimes in the voice of a girl Aiden thought he'd lost.",

"Two doors: safety without sovereignty, or freedom without a safety net. Aiden must find a third.",
    ],
    pullQuote: "A twisting, high-concept thriller about inheritance, trust, and the cost of doubting the one person who's already lived through your mistake.",
    href: "/TheLoom.pdf",
    status: "Available now",
    cover: theLoomCover,
  },
];

const Books = () => (
  <SiteLayout>
    <PageHeader
      index="03"
      title="Books"
      subtitle="Outside of client work, I write. The Quantum Archives is a sci-fi thriller series about memory, trust, and the cost of choosing for people who never got a vote — written, edited, and designed end to end."
    />

    <section className="container py-14 md:py-20">
      <div className="flex flex-col gap-10 md:gap-14">
        {books.map((book, i) => {
          const reversed = i % 2 === 1;
          return (
            <Reveal key={book.title} delay={i * 100}>
              <article className="soft-card p-6 md:p-10">
                <div
                  className={`flex flex-col gap-8 md:gap-12 ${
                    reversed ? "md:flex-row-reverse" : "md:flex-row"
                  } md:items-center`}
                >
                  {/* Cover */}
                  <div className="w-full md:w-[240px] shrink-0">
                    <img
                      src={book.cover}
                      alt={`${book.title} book cover`}
                      className="w-full h-auto rounded-lg border border-border shadow-sm"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-4">
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-accent/15 text-accent inline-flex items-center gap-1.5">
                        <BookOpen className="h-3 w-3" />
                        {book.genres.join(" · ")}
                      </span>
                      <span className="text-[11px] text-muted-foreground font-mono">{book.series}</span>
                    </div>

                    <h2 className="font-semibold text-2xl md:text-4xl tracking-tight">{book.title}</h2>
                    <p className="text-sm md:text-base text-muted-foreground italic mt-3 max-w-xl">
                      "{book.tagline}"
                    </p>

                    <div className="mt-5 space-y-3">
                      {book.description.map((para, idx) => (
                        <p key={idx} className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-2xl">
                          {para}
                        </p>
                      ))}
                    </div>

                    <blockquote className="mt-6 pl-4 border-l-2 border-accent/40">
                      <p className="text-sm md:text-base italic text-foreground/90 leading-relaxed max-w-xl">
                        "{book.pullQuote}"
                      </p>
                    </blockquote>

                    <div className="flex items-center gap-4 mt-7 flex-wrap">
                      <a
                        href={book.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-opacity group"
                      >
                        Read now
                        <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                      <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5" />
                        {book.status}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>

    {/* Series continuity / what's next */}
    <section className="border-t border-border bg-subtle/40">
      <div className="container py-16 md:py-24">
        <Reveal>
          <p className="eyebrow mb-3">The Quantum Archives continue</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight max-w-xl">
            Volume Three is next.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
            The Loom ends with a new signal — from a system nobody's charted before, asking a
            question nobody's answered yet. That's where the series picks up next.
          </p>
        </Reveal>
      </div>
    </section>
  </SiteLayout>
);

export default Books;
