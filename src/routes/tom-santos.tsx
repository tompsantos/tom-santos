import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Cpu,
  GraduationCap,
  Building2,
  Radar,
  FileSignature,
  Sparkles,
  Landmark,
} from "lucide-react";

const SITE_URL = "https://tom.orbeone.com.br";
const tomPhoto = {
  url: "/tom-santos.png",
  absoluteUrl: `${SITE_URL}/tom-santos.png`,
};
const CONTACT_EMAIL = "contato@orbeone.com.br";
const WHATSAPP_URL = "https://wa.me/5513960004079";
const GITHUB_URL = "https://github.com/tompsantos";
const LINKEDIN_URL = "https://www.linkedin.com/in/tompsantos";
const ORBEONE_URL = "https://orbeone.com.br";

export const Route = createFileRoute("/tom-santos")({
  head: () => ({
    meta: [
      { title: "Tom Santos | Arquiteto de IA Aplicada | orbeOne" },
      {
        name: "description",
        content:
          "Página institucional de Tom Santos, arquiteto de IA aplicada a governo, educação e negócios.",
      },
      {
        property: "og:title",
        content: "Tom Santos | IA aplicada, educação, governo e tecnologia cidadã",
      },
      {
        property: "og:description",
        content:
          "Inteligência artificial aplicada com responsabilidade pública, formação, segurança, automação, gestão pública, negócios e educação.",
      },
      { property: "og:image", content: tomPhoto.absoluteUrl },
      { name: "twitter:image", content: tomPhoto.absoluteUrl },
    ],
  }),
  component: TomSantosPage,
});

const NAV = [
  { id: "sobre", label: "sobre" },
  { id: "atuacao", label: "atuação" },
  { id: "educacao", label: "educação" },
  { id: "projetos", label: "lab" },
  { id: "credenciais", label: "credenciais" },
  { id: "documentos", label: "materiais" },
  { id: "contato", label: "contato" },
];

function OrbitalRings({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 600"
      className={`pointer-events-none absolute ${className}`}
    >
      <defs>
        <linearGradient id="ring" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.85 0.02 250)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.5 0.1 245)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#ring)" strokeWidth="1">
        <ellipse cx="300" cy="300" rx="280" ry="120" />
        <ellipse cx="300" cy="300" rx="240" ry="240" />
        <ellipse cx="300" cy="300" rx="180" ry="60" transform="rotate(30 300 300)" />
        <circle cx="300" cy="300" r="120" />
      </g>
    </svg>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl shadow-[0_8px_30px_-24px_rgba(0,0,0,0.9)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary/60">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
            <span className="absolute inset-0 rounded-full border border-primary/20" />
          </span>
          <span className="text-sm tracking-wide">
            <span className="font-medium">Tom Santos</span>
            <span className="text-muted-foreground"> · orbeOne</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="hidden items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-foreground/90 transition-colors hover:text-primary md:inline-flex"
        >
          conversar <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      style={{ background: "var(--gradient-hero)" }}
    >
      <OrbitalRings className="-left-40 top-10 h-[700px] w-[700px] opacity-60 animate-orbit-slow" />
      <OrbitalRings className="-right-52 bottom-0 h-[600px] w-[600px] opacity-40" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="animate-fade-up -mt-20 md:-mt-24 xl:-mt-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            orbeOne · arquitetura de IA aplicada
          </div>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            <span className="text-silver-gradient">Tom Santos</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-foreground/85 md:text-xl">
            arquiteto de IA aplicada a governo, educação e negócios
          </p>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            atuo na construção de propostas, sistemas e estratégias para uso responsável da
            inteligência artificial em contextos públicos, educacionais e organizacionais, com foco
            em segurança, clareza, formação e impacto real.
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            santos-sp · fundador da orbeOne Tecnologia · IA aplicada com responsabilidade pública
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_var(--primary)] transition-all hover:bg-primary/90 hover:shadow-[0_16px_40px_-14px_var(--primary)]"
            >
              <a href="#atuacao">conhecer atuação</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-transparent hover:bg-secondary/60">
              <a href="#educacao">ver proposta IA na educação</a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="hover:bg-secondary/40">
              <a href="#projetos">ver projetos em desenvolvimento</a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="hover:bg-secondary/40">
              <a href="#contato">entrar em contato</a>
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-up -mt-4 md:-mt-6 xl:-mt-8 [animation-delay:150ms]">
          <div className="relative mx-auto max-w-md">
            <div
              className="absolute -inset-4 rounded-[2.25rem] opacity-55 blur-3xl"
              style={{ background: "var(--gradient-primary)" }}
              aria-hidden
            />
            <div
              className="relative rounded-[1.85rem] p-px shadow-[0_40px_80px_-40px_rgba(0,0,0,0.85)]"
              style={{
                backgroundImage:
                  "linear-gradient(140deg, rgba(120,160,255,0.35), rgba(255,255,255,0.06) 40%, rgba(120,160,255,0.18))",
              }}
            >
              <div className="relative overflow-hidden rounded-[1.75rem] glass-card">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{ background: "var(--gradient-hero)" }}
                  aria-hidden
                />
                <img
                  src={tomPhoto.url}
                  alt="Retrato institucional de Tom Santos"
                  className="relative z-10 h-[560px] w-full object-cover object-top"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                <span aria-hidden className="pointer-events-none absolute left-4 top-4 z-20 h-4 w-4 border-l border-t border-primary/40" />
                <span aria-hidden className="pointer-events-none absolute right-4 top-4 z-20 h-4 w-4 border-r border-t border-primary/40" />
                <div className="absolute bottom-5 left-5 right-5 z-30 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span>Tom Santos</span>
                  <span className="text-primary">orbeOne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/40 md:grid-cols-4">
          {[
            { icon: Cpu, label: "IA aplicada" },
            { icon: Landmark, label: "GovTech" },
            { icon: GraduationCap, label: "educação cidadã" },
            { icon: Sparkles, label: "automação e agentes" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 bg-card px-5 py-5 text-sm">
              <Icon className="h-4 w-4 text-primary" />
              <span className="tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Positioning() {
  return (
    <section className="relative border-y border-border bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-primary">posicionamento</p>
        <h2 className="mt-5 font-display text-3xl leading-tight md:text-5xl">
          a inteligência artificial não deve ser tratada apenas como ferramenta de produtividade,
          <span className="text-silver-gradient"> mas como tema de cidadania</span>, gestão,
          segurança digital, aprendizagem e tomada de decisão.
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
          meu trabalho conecta tecnologia aplicada, experiência institucional e construção de soluções
          digitais para ajudar governos, escolas, empresas e organizações a adotarem IA com
          responsabilidade, método e utilidade prática.
        </p>
      </div>
    </section>
  );
}

function About() {
  const chips = [
    "IA aplicada",
    "automação",
    "agentes",
    "GovTech",
    "educação pública",
    "tecnologia cidadã",
    "segurança digital",
    "gestão pública",
    "negócios",
    "documentação e risco",
  ];

  return (
    <section id="sobre" className="relative py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-primary">sobre</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            arquiteto de IA <br /> com raiz institucional.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            perfil técnico-aplicado, com experiência anterior na administração pública municipal e
            foco em uso responsável da IA em contextos governamentais, corporativos e educacionais.
          </p>
        </div>

        <Card className="relative overflow-hidden border-border bg-card p-8 md:p-10">
          <OrbitalRings className="-right-40 -top-20 h-[500px] w-[500px] opacity-30" />
          <div className="relative space-y-5 text-[15px] leading-relaxed text-foreground/90">
            <p>
              <span className="font-medium">Tom Santos</span> é fundador da orbeOne Tecnologia e
              atua como arquiteto de IA aplicada, com trabalho voltado à automação, análise de
              processos, prototipação e formulação de estratégias para uso responsável da inteligência
              artificial.
            </p>
            <p className="text-muted-foreground">
              sua atuação combina vivência em administração pública, construção de soluções digitais e
              estudo contínuo em inteligência artificial, dados, processos, segurança digital e
              tecnologia cidadã.
            </p>
            <p className="rounded-lg border border-border bg-secondary/40 p-4 text-muted-foreground">
              a frente educacional não substitui especialistas em educação, currículo ou pedagogia. a
              contribuição é técnico-aplicada: traduzir IA, automação, dados, riscos e governança para
              apoiar decisões, formações, pilotos e políticas públicas construídas em diálogo com
              educadores, gestores e equipes técnicas.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((c) => (
              <Badge
                key={c}
                variant="secondary"
                className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-normal tracking-wide text-muted-foreground hover:text-foreground"
              >
                {c}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

const FRENTES = [
  {
    key: "governo",
    icon: Landmark,
    title: "governo",
    desc: "IA aplicada à gestão pública, automação de processos, documentos, atendimento, transparência, análise de dados, fluxos internos e apoio à decisão.",
    bullets: [
      "diagnóstico de processos e pontos de automação",
      "documentos, atendimento e apoio à decisão com IA",
      "dados, indicadores e transparência ativa",
    ],
    callout:
      "como isso pode ajudar: destravar rotinas administrativas, reduzir retrabalho e melhorar a experiência do cidadão.",
  },
  {
    key: "educacao",
    icon: GraduationCap,
    title: "educação",
    desc: "letramento em IA, segurança digital, formação crítica, futuro do trabalho e apoio técnico para ambientes educacionais em diálogo com professores, gestores e especialistas pedagógicos.",
    bullets: [
      "letramento e uso responsável de IA na escola",
      "segurança digital, deepfakes e proteção de dados",
      "pilotos e formações em diálogo com pedagogos",
    ],
    callout:
      "como isso pode ajudar: apoiar redes públicas e privadas a começar certo, com pensamento crítico e segurança.",
  },
  {
    key: "negocios",
    icon: Building2,
    title: "negócios",
    desc: "automação, agentes, atendimento, produtividade, organização de processos, análise de risco, sistemas internos e inteligência organizacional.",
    bullets: [
      "agentes e automações operacionais",
      "sistemas internos e organização de conhecimento",
      "produtividade, atendimento e inteligência comercial",
    ],
    callout:
      "como isso pode ajudar: transformar operações repetitivas em fluxos inteligentes e mensuráveis.",
  },
  {
    key: "seguranca",
    icon: ShieldCheck,
    title: "segurança e risco",
    desc: "proteção de dados, classificação documental, credibilidade, antifraude, governança, compliance e análise de sinais.",
    bullets: [
      "LGPD, governança e classificação de dados",
      "assinaturas digitais e validação documental",
      "antifraude, credibilidade e análise de sinais",
    ],
    callout:
      "como isso pode ajudar: reforçar confiança, conformidade e reduzir exposição institucional.",
  },
  {
    key: "estrategia",
    icon: Radar,
    title: "estratégia",
    desc: "desenho de jornadas, protótipos, arquitetura de soluções, integrações, fluxos inteligentes e implementação por fases.",
    bullets: [
      "arquitetura de soluções e jornadas",
      "protótipos e provas de conceito",
      "implementação por fases, com risco controlado",
    ],
    callout:
      "como isso pode ajudar: sair da ideia para o piloto, e do piloto para o sistema, sem sobressaltos.",
  },
];

function Frentes() {
  return (
    <section id="atuacao" className="relative border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary">frentes de atuação</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">cinco frentes, uma arquitetura.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            as frentes organizam a atuação pública de Tom sem transformar a página em catálogo de
            produtos. o ponto de partida é sempre escuta, diagnóstico e construção por fases.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {FRENTES.map((f) => (
            <Card key={f.key} className="border-border bg-card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/60">
                <f.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-5 font-display text-2xl">{f.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {f.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-4 flex-none bg-primary/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-lg border border-border bg-secondary/30 p-4 text-xs leading-relaxed text-foreground/90">
                {f.callout}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducacaoIA() {
  const riscos = [
    "desinformação",
    "plágio",
    "deepfakes",
    "fake nudes",
    "assédio digital",
    "exposição de dados",
    "uso acrítico de respostas prontas",
    "uso irresponsável de imagem e voz",
  ];
  const oportunidades = [
    "formação de professores",
    "letramento em IA",
    "pesquisa orientada",
    "inclusão digital",
    "produtividade pedagógica",
    "projetos escolares reais",
    "preparação para o futuro do trabalho",
    "cidadania digital",
  ];

  return (
    <section id="educacao" className="relative py-24 orbital-bg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-primary">frente especial</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            IA, educação pública <br />e tecnologia cidadã.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground/85">
            a inteligência artificial já chegou aos estudantes antes de chegar oficialmente à escola.
            ela aparece nas pesquisas, nas tarefas, nas redes sociais, nos conflitos digitais, nas
            imagens geradas, nos chatbots e nas novas expectativas sobre o futuro do trabalho.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            a questão pública não é apenas permitir ou proibir o uso de IA. a questão é formar
            estudantes, professores e gestores para compreender riscos, limites e oportunidades dessa
            tecnologia com segurança, pensamento crítico, criatividade e responsabilidade social.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            não precisamos começar grande. precisamos começar certo: com formação, escuta, proteção de
            dados, orientação pedagógica e projetos piloto de baixo custo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="relative overflow-hidden border-border bg-card p-8 transition-all duration-300 hover:border-destructive/30 hover:shadow-[inset_0_1px_0_oklch(1_0_0/0.05),0_24px_50px_-34px_rgba(200,60,60,0.4)]">
            <div className="mb-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-destructive/90">
              <ShieldCheck className="h-4 w-4" /> riscos que já existem
            </div>
            <div className="flex flex-wrap gap-2">
              {riscos.map((r) => (
                <span key={r} className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground/85">
                  {r}
                </span>
              ))}
            </div>
          </Card>
          <Card className="relative overflow-hidden border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[inset_0_1px_0_oklch(1_0_0/0.05),0_24px_50px_-34px_rgba(30,80,200,0.5)]">
            <div className="mb-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary">
              <Sparkles className="h-4 w-4" /> oportunidades reais
            </div>
            <div className="flex flex-wrap gap-2">
              {oportunidades.map((r) => (
                <span key={r} className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs text-foreground/90">
                  {r}
                </span>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center">
          <p className="font-display text-2xl md:text-3xl">
            professor no centro, estudante protegido, <span className="text-silver-gradient">tecnologia com método.</span>
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="/docs/ia-escolas-santos_proposta-executiva_v0.1.pdf" target="_blank" rel="noreferrer">ver proposta executiva</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

const PROJETOS = [
  {
    name: "orbeAI",
    status: "em desenvolvimento",
    desc: "assistente de IA para conversação, apoio técnico, organização de conhecimento, automação e experiência multimodal.",
  },
  {
    name: "orbegov",
    status: "linha de pesquisa",
    desc: "estudos sobre uso de IA em políticas públicas, documentos, atendimento, educação, transparência e processos administrativos.",
  },
  {
    name: "orbecorp",
    status: "em desenvolvimento",
    desc: "IA e automação para empresas, operações, atendimento, produtividade, documentos e inteligência organizacional.",
  },
  {
    name: "orberisk",
    status: "protótipo",
    desc: "IA para análise de risco documental, credibilidade, sinais de fraude e apoio à decisão.",
  },
  {
    name: "orbevault",
    status: "conceito",
    desc: "cofre digital inteligente para documentos, certificados, assinaturas, chaves e arquivos sensíveis.",
  },
  {
    name: "orberadar",
    status: "protótipo",
    desc: "inteligência comercial e estratégica para oportunidades, sinais de mercado, organizações e abordagem.",
  },
  {
    name: "orbeauto",
    status: "em desenvolvimento",
    desc: "gestão para oficinas, orçamentos, fluxo operacional e organização de processos.",
  },
  {
    name: "orbeZen",
    status: "conceito",
    desc: "bem-estar, autocuidado, apoio emocional, rotina e tecnologia sensível ao contexto humano.",
  },
];

function statusColor(s: string) {
  if (s === "em desenvolvimento") return "border-primary/40 bg-primary/10 text-primary";
  if (s === "protótipo") return "border-accent/40 bg-accent/10 text-accent";
  if (s === "linha de pesquisa") return "border-border bg-secondary/60 text-muted-foreground";
  return "border-border bg-secondary/40 text-muted-foreground";
}

function Projetos() {
  return (
    <section id="projetos" className="relative border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary">orbeOne lab</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              estudos, protótipos <br />e aplicações em desenvolvimento.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            o lab reúne linhas de estudo, protótipos e aplicações em construção. eles demonstram
            pesquisa, método e capacidade técnica, não um catálogo de venda imediata.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROJETOS.map((p, i) => (
            <Card
              key={p.name}
              className="group relative border-border bg-card p-6 shadow-[inset_0_1px_0_oklch(1_0_0/0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[inset_0_1px_0_oklch(1_0_0/0.08),0_28px_60px_-34px_rgba(30,80,200,0.55)]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-widest text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider ${statusColor(p.status)}`}>
                  {p.status}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/40 to-transparent transition-all duration-300 group-hover:from-primary/70" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

type IssuerMark = {
  key: string;
  issuer: string;
  logo: string;
  logoClass: string;
  logoLabel?: string;
  accent: string;
  items: string[];
  verify: string;
};

const CREDENCIAIS: IssuerMark[] = [
  {
    key: "gcp",
    issuer: "Google Cloud",
    accent: "66,133,244",
    logo: "/logos/logo-google-cloud.svg",
    logoClass: "h-7 w-auto",
    logoLabel: "Google Cloud",
    items: ["Introduction to Generative AI", "Machine Learning Operations (MLOps) to Generative AI"],
    verify: "credencial via LinkedIn",
  },
  {
    key: "ibm",
    issuer: "IBM",
    accent: "31,112,193",
    logo: "/logos/logo-ibm.svg",
    logoClass: "h-8 w-auto",
    items: ["Supercharge Your Data Analytics with Generative AI", "Introduction to Software Engineering"],
    verify: "credencial via LinkedIn",
  },
  {
    key: "databricks",
    issuer: "Databricks",
    accent: "255,54,33",
    logo: "/logos/logo-databricks.svg",
    logoClass: "h-7 w-7",
    logoLabel: "Databricks",
    items: ["Academy Accreditation – Generative AI Fundamentals"],
    verify: "formação verificada",
  },
  {
    key: "voitto",
    issuer: "Voitto — Lean Seis Sigma",
    accent: "245,166,35",
    logo: "/logos/logo-voitto.svg",
    logoClass: "h-7 w-auto",
    items: ["Yellow Belt em Lean Seis Sigma", "White Belt em Lean Seis Sigma"],
    verify: "formação verificada",
  },
];

function CredentialCard({ c }: { c: IssuerMark }) {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6"
      style={{
        backgroundImage: "linear-gradient(180deg, oklch(1 0 0 / 0.03), oklch(1 0 0 / 0.005))",
        boxShadow: `inset 0 1px 0 oklch(1 0 0 / 0.06), 0 20px 50px -30px rgba(${c.accent},0.25)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70"
        style={{ background: `linear-gradient(90deg, transparent, rgba(${c.accent},0.55), transparent)` }}
      />
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-[3.5rem] min-w-[9.5rem] items-center gap-3 rounded-xl border border-black/5 bg-[#F7F8FA] px-4 shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_12px_28px_-16px_rgba(0,0,0,0.55)]">
          <img
            src={c.logo}
            alt={`Logo ${c.issuer.split(" — ")[0]}`}
            className={`${c.logoClass} object-contain`}
            loading="lazy"
            decoding="async"
          />
          {c.logoLabel ? (
            <span className="font-sans text-[15px] font-semibold tracking-tight text-[#1B2A4E]">{c.logoLabel}</span>
          ) : null}
        </div>
        <span className="rounded-full border border-border/70 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70">
          emissor
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">credenciais</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <ul className="mt-4 space-y-2">
        {c.items.map((it) => (
          <li
            key={it}
            className="flex items-start gap-2.5 rounded-lg border border-border/70 bg-secondary/30 px-3 py-2.5 text-[13px] leading-snug text-foreground/90"
          >
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: `rgb(${c.accent})` }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.verify}</span>
        <span
          className="inline-flex h-5 items-center rounded-full px-2 text-[9px] font-medium uppercase tracking-[0.18em]"
          style={{
            color: `rgb(${c.accent})`,
            background: `rgba(${c.accent},0.10)`,
            border: `1px solid rgba(${c.accent},0.25)`,
          }}
        >
          {c.issuer.split(" — ")[0]}
        </span>
      </div>
    </div>
  );
}

function Credenciais() {
  return (
    <section id="credenciais" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary">credenciais</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">formação permanente, prática aplicada.</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              a atuação de Tom combina prática aplicada, estudo contínuo, construção de protótipos e
              desenvolvimento de propostas institucionais. suas credenciais reforçam uma trajetória em
              formação permanente nas áreas de inteligência artificial, dados, automação, processos,
              gestão e tecnologia aplicada.
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70">
              credenciais verificáveis via LinkedIn
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CREDENCIAIS.map((c) => (
              <CredentialCard key={c.key} c={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const DOCS = [
  {
    id: "d1",
    title: "proposta executiva: IA nas escolas de Santos",
    desc: "material introdutório para abrir diálogo sobre adoção responsável de inteligência artificial na educação, com foco em formação, segurança, LGPD, letramento em IA e piloto de baixo custo.",
    cta: { label: "abrir proposta executiva", icon: FileSignature, href: "/docs/ia-escolas-santos_proposta-executiva_v0.1.pdf" },
  },
  {
    id: "d2",
    title: "palestra: a inteligência artificial já chegou à escola. e agora?",
    desc: "riscos, oportunidades e caminhos para o uso consciente, seguro e criativo da IA em ambientes educacionais.",
    cta: { label: "solicitar conversa", icon: MessageCircle, href: "#contato" },
  },
  {
    id: "d3",
    title: "oficina: uso responsável de IA em ambientes educacionais",
    desc: "atividade prática para gestores, professores e equipes técnicas compreenderem ferramentas, limites, riscos e boas práticas.",
    cta: { label: "solicitar oficina", icon: MessageCircle, href: "#contato" },
  },
  {
    id: "d4",
    title: "conversa técnica: IA aplicada à gestão pública",
    desc: "diagnóstico inicial sobre processos, automação, atendimento, documentos, dados e oportunidades de melhoria.",
    cta: { label: "agendar conversa", icon: MessageCircle, href: "#contato" },
  },
  {
    id: "d5",
    title: "mapa de prontidão para IA",
    desc: "avaliação preliminar de maturidade, riscos, oportunidades e próximos passos para instituições.",
    cta: { label: "solicitar mapa", icon: FileSignature, href: "#contato" },
  },
];

function Documentos() {
  return (
    <section id="documentos" className="relative border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-[11px] uppercase tracking-[0.28em] text-primary">materiais institucionais</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">documentos para abrir diálogo.</h2>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          os materiais têm caráter introdutório e exploratório, voltados à abertura de diálogo técnico
          com educadores, gestores e instituições. o primeiro contato não parte de uma venda, mas de
          escuta, diagnóstico e contribuição responsável.
        </p>

        <Accordion type="single" collapsible className="mt-10 space-y-3.5">
          {DOCS.map((d) => (
            <AccordionItem
              key={d.id}
              value={d.id}
              className="group overflow-hidden rounded-xl border border-border bg-card px-5 transition-all duration-300 hover:border-primary/30 data-[state=open]:border-primary/45 data-[state=open]:bg-card data-[state=open]:shadow-[inset_0_1px_0_oklch(1_0_0/0.06),0_24px_50px_-32px_rgba(30,80,200,0.5)]"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold leading-snug hover:no-underline md:text-lg [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-primary/70">
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60 transition-colors duration-300 group-hover:border-primary/40 group-data-[state=open]:border-primary/50 group-data-[state=open]:bg-primary/10">
                    <FileSignature className="h-5 w-5 text-primary" />
                  </span>
                  <span className="text-pretty text-foreground">{d.title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-0 text-[15px] leading-relaxed text-muted-foreground sm:pl-[60px]">
                <p className="text-pretty">{d.desc}</p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-5 border-border bg-transparent text-sm font-medium transition-all hover:border-primary/40 hover:bg-secondary/60"
                >
                  <a href={d.cta.href}>
                    <d.cta.icon className="mr-2 h-4 w-4" />
                    {d.cta.label}
                  </a>
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contato() {
  const links = [
    { icon: Mail, label: "enviar e-mail", href: `mailto:${CONTACT_EMAIL}` },
    { icon: MessageCircle, label: "chamar no whatsapp", href: WHATSAPP_URL },
    { icon: Linkedin, label: "ver LinkedIn", href: LINKEDIN_URL },
    { icon: Github, label: "ver GitHub", href: GITHUB_URL },
    { icon: ExternalLink, label: "conhecer orbeOne", href: ORBEONE_URL },
  ];

  return (
    <section id="contato" className="relative overflow-hidden py-28" style={{ background: "var(--gradient-hero)" }}>
      <OrbitalRings className="left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-primary">contato</p>
        <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
          <span className="text-silver-gradient">vamos conversar sobre IA responsável?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          para conversas institucionais, reuniões exploratórias, palestras, oficinas ou diálogos
          técnicos sobre inteligência artificial aplicada à educação, governo e organizações.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <Button
              key={l.label}
              asChild
              variant="outline"
              size="lg"
              className="border-border bg-card/50 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_16px_36px_-22px_var(--primary)]"
            >
              <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <l.icon className="mr-2 h-4 w-4" />
                {l.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-2xl">Tom Santos</p>
          <p className="mt-2 text-sm text-muted-foreground">arquiteto de IA aplicada a governo, educação e negócios</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">orbeOne · santos-sp</p>
        </div>
        <div className="flex flex-wrap items-start gap-x-6 gap-y-2 text-sm md:justify-end">
          <a href={ORBEONE_URL} className="text-muted-foreground hover:text-foreground">orbeOne</a>
          <a href="#educacao" className="text-muted-foreground hover:text-foreground">IA na educação</a>
          <a href={LINKEDIN_URL} className="text-muted-foreground hover:text-foreground">LinkedIn</a>
          <a href={GITHUB_URL} className="text-muted-foreground hover:text-foreground">GitHub</a>
          <a href="#contato" className="text-muted-foreground hover:text-foreground">contato</a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-6 pt-6">
        <p className="text-xs text-muted-foreground">© 2026 Tom Santos. todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function TomSantosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Positioning />
        <About />
        <Frentes />
        <EducacaoIA />
        <Projetos />
        <Credenciais />
        <Documentos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
