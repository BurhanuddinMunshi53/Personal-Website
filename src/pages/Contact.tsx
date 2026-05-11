import { Phone, Mail, MapPin, Github, ArrowUpRight, Clock, Globe, MessageSquare, Calendar, Shield, Instagram, MessageCircle } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ConnectWithMe from "@/components/ConnectWithMe";

const PHONE = "+91 9516129270";
const PHONE_HREF = "tel:+919516129270";
const WHATSAPP = "https://wa.me/919516129270";
const EMAIL = "munshiburhanuddin738@gmail.com";
const INSTAGRAM = "https://instagram.com/burhanuddin_munshi1";
const ADDRESS = "Burhani Bagh Playground, Barwani, Madhya Pradesh, India";
const GITHUB = "https://github.com/BurhanuddinMunshi53";

const channels = [
  { icon: Phone, label: "Phone", value: PHONE, href: PHONE_HREF, hint: "Direct line — voice calls during working hours, IST." },
  { icon: MessageCircle, label: "WhatsApp", value: PHONE, href: WHATSAPP, hint: "Fastest channel for short questions and scheduling calls." },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, hint: "Best for project briefs, proposals, and detailed conversations." },
  { icon: Instagram, label: "Instagram", value: "@burhanuddin_munshi1", href: INSTAGRAM, hint: "Behind-the-scenes of current builds and the occasional design teardown." },
  { icon: MapPin, label: "Address", value: ADDRESS, href: "https://www.google.com/maps/search/?api=1&query=Burhani+Bagh+Playground+Barwani+MP+India", hint: "Based in Barwani, MP — available worldwide, remote-first." },
  { icon: Github, label: "GitHub", value: "@BurhanuddinMunshi53", href: GITHUB, hint: "Every public repository, every commit history — open and inspectable." },
];

const meta = [
  { icon: Clock, label: "Response time", value: "Within 24 hours, on most working days." },
  { icon: Globe, label: "Working hours", value: "09:00 — 22:00 IST · flexible for international clients." },
  { icon: Github, label: "GitHub", value: "@BurhanuddinMunshi53" },
];

const Contact = () => (
  <SiteLayout>
    <PageHeader
      index="04"
      title="Contact"
      subtitle="Open to freelance engagements, long-term collaborations, technical consulting, and the occasional interesting conversation. Pick whichever channel suits your message — every enquiry receives a real, considered reply."
    />

    <section className="container py-14 md:py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.label === "Address" ? "_blank" : undefined}
            rel={c.label === "Address" ? "noopener noreferrer" : undefined}
            className="soft-card p-6 md:p-7 flex flex-col group"
          >
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-lg bg-accent/15 grid place-items-center">
                <c.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <p className="eyebrow mt-6">{c.label}</p>
            <p className="font-semibold text-base md:text-lg mt-2 break-words">{c.value}</p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.hint}</p>
          </a>
        ))}
      </div>
    </section>

    <section className="border-t border-border bg-subtle/40">
      <div className="container py-16 md:py-24 grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
        <div>
          <p className="eyebrow mb-3">Working together</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight">
            What a good first message looks like.
          </h2>
          <p className="text-muted-foreground mt-5 text-base md:text-lg leading-relaxed">
            A short paragraph about the problem, your rough timeline, and any constraints
            (budget, stack, integrations). I will reply with a few clarifying questions and an
            honest assessment of fit — within one working day.
          </p>
        </div>

        <div className="space-y-4">
          {meta.map((m) => (
            <div key={m.label} className="soft-card p-5 flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-subtle grid place-items-center shrink-0">
                <m.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              </div>
              <div>
                <p className="eyebrow">{m.label}</p>
                <p className="text-sm md:text-base mt-1.5">{m.value}</p>
              </div>
            </div>
          ))}
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Github className="h-4 w-4" />
            Open GitHub profile
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="border-t border-border">
      <div className="container py-16 md:py-24">
        <Reveal>
          <p className="eyebrow mb-3">Frequently asked</p>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight max-w-2xl">
            Answers, before you ask.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mt-10">
          {[
            { icon: MessageSquare, q: "What's the best way to start a conversation?", a: "A short email outlining the problem, your timeline, and any hard constraints. I will reply within one working day with an honest read on fit." },
            { icon: Calendar, q: "What is your typical engagement length?", a: "Anything from a focused two-week sprint to a three-month build. I avoid open-ended retainers without a clear deliverable." },
            { icon: Shield, q: "Do you sign NDAs?", a: "Yes — happy to sign a mutual NDA before any commercial details are exchanged. Your idea is safe." },
            { icon: Globe, q: "Do you work with international clients?", a: "Absolutely. Most of my collaborations are remote-first across multiple time zones — flexible hours, async by default." },
          ].map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <div className="soft-card p-6 h-full">
                <f.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                <h3 className="font-semibold text-base mt-4">{f.q}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="border-t border-border bg-subtle/30">
      <div className="container py-16 md:py-24 text-center">
        <Reveal>
          <p className="eyebrow mb-4">Ready when you are</p>
          <h2 className="font-semibold text-3xl md:text-5xl tracking-tight max-w-2xl mx-auto leading-[1.1]">
            One real reply, every time.
          </h2>
          <p className="text-muted-foreground mt-5 max-w-lg mx-auto leading-relaxed">
            No funnels, no auto-responders, no booking calendars buried three clicks deep. Just a
            human reading your message and writing one back.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-medium mt-8 hover:opacity-90 transition-opacity"
          >
            <Mail className="h-4 w-4" />
            Send an email
          </a>
        </Reveal>
      </div>
    </section>

    <ConnectWithMe />
  </SiteLayout>
);

export default Contact;
