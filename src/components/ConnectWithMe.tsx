import { Mail, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const CONTACT = {
  email: "munshiburhanuddin738@gmail.com",
  phoneIntl: "919516129270",
  instagram: "burhanuddin_munshi1",
};

const channels = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: `@${CONTACT.instagram}`,
    desc: "Behind-the-scenes of what I'm currently building, plus the occasional design teardown.",
    href: `https://instagram.com/${CONTACT.instagram}`,
    hue: "from-pink-500/20 via-fuchsia-500/15 to-purple-500/20",
  },
  {
    icon: Mail,
    label: "Email",
    handle: CONTACT.email,
    desc: "The best channel for project briefs, proposals, and anything that needs more than a paragraph.",
    href: `mailto:${CONTACT.email}`,
    hue: "from-sky-500/20 via-blue-500/15 to-indigo-500/20",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    handle: "+91 95161 29270",
    desc: "Fastest way to reach me for quick questions, scheduling calls, and time-sensitive conversations.",
    href: `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent("Hi Burhanuddin — saw your portfolio and wanted to connect.")}`,
    hue: "from-emerald-500/20 via-green-500/15 to-teal-500/20",
  },
];

const ConnectWithMe = () => (
  <section className="border-t border-border relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="container relative py-20 md:py-28">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-4">Connect with me</p>
          <h2 className="font-semibold text-3xl md:text-5xl tracking-tight leading-[1.1]">
            Three doors. Pick whichever feels right.
          </h2>
          <p className="text-muted-foreground mt-5 text-base md:text-lg leading-relaxed">
            Whether you're scoping a serious build, shipping a side project, or just want to talk
            about the craft of software — I'm a real human, and I read every message.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-12 md:mt-16">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 100}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-card p-6 md:p-7 group flex flex-col h-full relative overflow-hidden"
            >
              <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${c.hue} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`} />
              <div className="relative flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl bg-accent/15 grid place-items-center group-hover:scale-110 transition-transform">
                  <c.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="eyebrow mt-6 relative">{c.label}</p>
              <p className="font-semibold text-base md:text-lg mt-2 break-words relative">{c.handle}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed relative">{c.desc}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ConnectWithMe;
