import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Radio, Download, ArrowLeft, Mic2, Zap, TrendingUp, Headphones, Briefcase,
  Target, ShieldCheck, Search, CheckCircle2, XCircle, Sparkles, Wallet,
  Building2, LineChart as LineIcon, PlayCircle, Apple, Youtube, Rss,
  RadioTower, Car, Speaker, Wifi, Globe,
} from "lucide-react";
import { Waveform } from "@/components/deck/SlideShell";

export const Route = createFileRoute("/one-pager")({
  component: OnePager,
  head: () => ({
    meta: [
      { title: "Fastcast × Onyx — One-Pager" },
      { name: "description", content: "A one-page summary of the Fastcast × Onyx Processing partnership proposal." },
    ],
  }),
});

function OnePager() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top action bar — hidden when printing */}
      <header className="print:hidden sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <Link to="/" className="flex items-center gap-3 text-sm hover:opacity-80 transition">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Back to deck</span>
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="/fastcast-x-onyx-onepager.pdf"
              download="Fastcast x Onyx — One-Pager.pdf"
              className="glass px-4 py-2 rounded-lg text-xs flex items-center gap-2 hover:border-electric/50 transition"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </a>
          </div>
        </div>
      </header>

      <main className="relative bg-hero grain">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.6_0.1_235/0.25),transparent_70%)] blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-8 py-16 space-y-14">
          {/* HERO */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-electric-gradient flex items-center justify-center glow-electric">
                  <Radio className="w-5 h-5 text-background" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Fastcast / DNN</div>
                  <div className="text-base font-medium">The Daily News Now!</div>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Partnership Proposal · 2026
              </div>
            </div>

            <div className="px-3 py-1.5 inline-block rounded-full glass text-[10px] font-mono uppercase tracking-[0.3em] text-electric">
              Confidential · For Onyx Processing
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
              <span className="text-gradient">Fastcast + DNN</span>{" "}
              <span className="text-foreground/80">×</span>{" "}
              <span className="text-gradient">Onyx Processing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl font-light leading-snug">
              Building the future of <span className="text-foreground font-medium">contextual audio advertising</span>,
              where fintech meets the next generation of media.
            </p>
            <Waveform bars={50} className="opacity-90 h-10" />

            <div className="grid grid-cols-3 gap-6 pt-4">
              <Stat value="140K+" label="Weekly listens" />
              <Stat value="4" label="Business channels" />
              <Stat value="∞" label="Platforms" />
            </div>
          </section>

          <Divider />

          {/* OPPORTUNITY */}
          <Section eyebrow="The Opportunity" title="Attention is collapsing. Audio is winning.">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MiniStat icon={<Headphones className="w-4 h-4" />} value="546M" label="Listeners by 2026" tone="electric" />
              <MiniStat icon={<TrendingUp className="w-4 h-4" />} value="+47%" label="YoY short-form audio" tone="emerald" />
              <MiniStat icon={<Mic2 className="w-4 h-4" />} value="8 sec" label="Avg attention span" tone="violet" />
              <MiniStat icon={<Briefcase className="w-4 h-4" />} value="73%" label="Execs consume daily audio" tone="electric" />
            </div>
            <p className="text-base text-muted-foreground mt-5 max-w-3xl">
              Modern audiences are overwhelmed and tuning into short, intelligent audio instead — a TikTok-ification of every medium, with founders and SMBs commute-listening daily.
            </p>
          </Section>

          {/* WHAT IS A FASTCAST */}
          <Section eyebrow="Defining the category" title="What is a Fastcast?">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl glass p-6">
                <div className="flex items-center justify-between mb-4">
                  <Mic2 className="w-6 h-6 text-muted-foreground" />
                  <span className="px-2 py-0.5 rounded-full bg-foreground/10 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Yesterday</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-muted-foreground">Traditional Podcast</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["Weekly cadence", "45–90 min long-form", "Expensive production", "Slow to publish"].map((t) => (
                    <li key={t} className="flex items-center gap-2"><XCircle className="w-3.5 h-3.5 text-destructive/70 shrink-0" />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-6 border border-electric/30 bg-gradient-to-br from-[oklch(0.72_0.22_250/0.18)] to-[oklch(0.78_0.16_175/0.12)] glow-electric">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="w-6 h-6 text-electric" />
                  <span className="px-2 py-0.5 rounded-full bg-electric/20 text-[10px] font-mono uppercase tracking-widest text-electric">Today</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gradient">Fastcast</h4>
                <ul className="space-y-2 text-sm text-foreground">
                  {["Daily / multi-daily drops", "~2 minute episodes", "AI-assisted production", "Hyper-targeted niches"].map((t) => (
                    <li key={t} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* DNN REACH */}
          <Section eyebrow="DNN Network" title="140K+ weekly business listeners.">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-3">
                {[
                  { name: "Business & Finance News", listens: "105K", icon: <LineIcon className="w-4 h-4" />, color: "electric" },
                  { name: "Tech News", listens: "30K", icon: <Zap className="w-4 h-4" />, color: "violet" },
                  { name: "Bitcoin News", listens: "3.5K", icon: <Wallet className="w-4 h-4" />, color: "emerald" },
                  { name: "Real Estate News", listens: "2.5K", icon: <Building2 className="w-4 h-4" />, color: "electric" },
                ].map((c) => (
                  <div key={c.name} className="glass rounded-xl p-4 flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-lg glass flex items-center justify-center text-${c.color}`}>{c.icon}</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{c.name}</div>
                      <div className="mt-1.5 h-1.5 rounded-full bg-foreground/5 overflow-hidden">
                        <div className="h-full bg-electric-gradient rounded-full" style={{ width: `${Math.min(100, (parseFloat(c.listens) / 105) * 100)}%` }} />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-semibold tabular-nums">{c.listens}</div>
                      <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">weekly</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric mb-2">Audience overlap with Onyx ICP</div>
                <h4 className="text-lg font-semibold mb-4">Built-in alignment</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Founders", "eCommerce ops", "SMB owners", "Fintech users", "High-risk verts", "Online merchants"].map((t) => (
                    <div key={t} className="glass rounded-lg px-3 py-2 text-sm">{t}</div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  DNN's editorial mix indexes directly to the verticals Onyx serves — business, fintech, crypto, and commerce operators tuning in daily.
                </p>
              </div>
            </div>
          </Section>

          {/* WHY ONYX */}
          <Section eyebrow="Why this matters" title="Position Onyx as the infrastructure modern commerce trusts.">
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { i: <Target className="w-4 h-4" />, h: "Contextual", t: "Reach merchants while they consume finance content." },
                { i: <ShieldCheck className="w-4 h-4" />, h: "Trusted", t: "Embedded in editorial, not interrupting it." },
                { i: <Radio className="w-4 h-4" />, h: "Repetition", t: "Daily drops compound brand recall over weeks." },
                { i: <Search className="w-4 h-4" />, h: "Discoverable", t: "Indexes across Spotify, Apple, YouTube, Google." },
              ].map((p) => (
                <div key={p.h} className="glass rounded-xl p-5">
                  <div className="w-9 h-9 rounded-lg glass flex items-center justify-center text-electric mb-3">{p.i}</div>
                  <div className="text-base font-semibold mb-1">{p.h}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.t}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* PARTNERSHIP PHASES */}
          <Section eyebrow="Roadmap" title="A three-phase partnership.">
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { n: "01", h: "Sponsor", t: "Take over existing DNN inventory across Business, Tech, Bitcoin & Real Estate." },
                { n: "02", h: "Brand", t: "Launch Onyx-branded Fastcast channels — owned media, daily drops." },
                { n: "03", h: "Scale", t: "Expand into vertical & regional Fastcast networks. Onyx becomes the audio backbone." },
              ].map((p) => (
                <div key={p.n} className="glass rounded-2xl p-6">
                  <div className="font-mono text-4xl font-semibold text-gradient leading-none mb-3">{p.n}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric mb-1">Phase {p.n}</div>
                  <h4 className="text-lg font-semibold mb-2">{p.h}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.t}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* PRICING */}
          <Section eyebrow="Investment" title="Strategic, not transactional.">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl glass p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric mb-2">Sponsorship</div>
                <h4 className="text-lg font-semibold mb-3">DNN inventory</h4>
                <div className="text-3xl font-semibold tracking-tight">$3.5K<span className="text-lg text-muted-foreground"> – </span>$7.5K</div>
                <div className="font-mono text-xs text-muted-foreground mt-1">/ month</div>
                <div className="mt-4 space-y-1.5">
                  {["Pre-rolls + native reads", "Branded intros", "CTA + traffic to onyx.com", "Performance reporting"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-3.5 h-3.5 text-emerald" />{t}</div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl p-6 border border-electric/30 bg-gradient-to-br from-[oklch(0.72_0.22_250/0.18)] to-[oklch(0.7_0.22_300/0.15)] glow-electric relative">
                <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-electric/20 text-[9px] font-mono uppercase tracking-widest text-electric">Recommended</span>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric mb-2">Branded Channel</div>
                <h4 className="text-lg font-semibold mb-3">Onyx-owned Fastcast</h4>
                <div className="text-3xl font-semibold tracking-tight text-gradient">$2.5K<span className="text-lg text-muted-foreground"> – </span>$10K</div>
                <div className="font-mono text-xs text-muted-foreground mt-1">/ month per channel</div>
                <div className="mt-4 space-y-1.5">
                  {["Owned IP + brand integration", "AI-assisted daily production", "Cross-platform distribution", "Vertical-specific targeting"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-3.5 h-3.5 text-emerald" />{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* DISTRIBUTION */}
          <Section eyebrow="Distribution" title="One source. Everywhere people listen.">
            <div className="flex flex-wrap gap-2">
              {[
                { i: <PlayCircle className="w-3.5 h-3.5" />, n: "Spotify" },
                { i: <Apple className="w-3.5 h-3.5" />, n: "Apple Podcasts" },
                { i: <Youtube className="w-3.5 h-3.5" />, n: "YouTube" },
                { i: <Rss className="w-3.5 h-3.5" />, n: "RSS" },
                { i: <Search className="w-3.5 h-3.5" />, n: "Search engines" },
                { i: <RadioTower className="w-3.5 h-3.5" />, n: "TuneIn" },
                { i: <Car className="w-3.5 h-3.5" />, n: "CarPlay" },
                { i: <Speaker className="w-3.5 h-3.5" />, n: "Alexa" },
                { i: <Radio className="w-3.5 h-3.5" />, n: "Live Streams" },
                { i: <Wifi className="w-3.5 h-3.5" />, n: "Internet Radio" },
              ].map((p) => (
                <div key={p.n} className="glass rounded-full px-3 py-1.5 flex items-center gap-2 text-sm">
                  <span className="text-emerald">{p.i}</span>
                  <span>{p.n}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* CLOSING */}
          <section className="rounded-3xl bg-gradient-to-br from-[oklch(0.72_0.22_250/0.15)] to-[oklch(0.78_0.16_175/0.10)] border border-electric/30 p-10 space-y-6">
            <Waveform bars={50} className="opacity-80 h-10" />
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              <span className="text-gradient">The future of audio</span> <span className="text-foreground">is fast.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl font-light">
              Fastcasts combine the speed of modern media with the trust and intimacy of audio — and Onyx is positioned to own the category that matters most.
            </p>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="glass rounded-xl p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric mb-1">Contact</div>
                <div className="text-sm font-semibold">partners@fastcast.ai</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric mb-1">Network</div>
                <div className="text-sm font-semibold">thednn.ai</div>
              </div>
              <div className="glass rounded-xl p-4 border-electric/40">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric mb-1">Next step</div>
                <div className="text-sm font-semibold">Schedule a 30-min call</div>
              </div>
            </div>
          </section>

          <footer className="pt-6 pb-2 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <Globe className="w-3 h-3 inline mr-2" />
            Fastcast × Onyx Processing · One-Pager · 2026
          </footer>
        </div>
      </main>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-semibold">{value}</div>
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function MiniStat({ icon, value, label, tone }: { icon: React.ReactNode; value: string; label: string; tone: "electric" | "emerald" | "violet" }) {
  const text = tone === "electric" ? "text-electric" : tone === "emerald" ? "text-emerald" : "text-violet";
  return (
    <div className="glass rounded-xl p-4">
      <div className={`w-8 h-8 rounded-lg glass flex items-center justify-center ${text} mb-3`}>{icon}</div>
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-5">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-electric" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric">{eyebrow}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Divider() {
  return <div className="h-px horizon-line" />;
}
