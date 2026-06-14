import type { SVGProps } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Cpu,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Terminal,
  ArrowUpRight,
  FileText,
  Download,
} from "lucide-react";
import resumeAsset from "@/assets/Amarthya_Resume.pdf.asset.json";

const RESUME_URL = resumeAsset.url;

type SkillLogoProps = SVGProps<SVGSVGElement>;

function JavaLogo(props: SkillLogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="6" y="18" width="20" height="6" rx="2" fill="#007396" />
      <path d="M8 18c0-4 2.5-6 8-6s8 2 8 6" stroke="#007396" strokeWidth="2" />
      <path d="M10 10c3-4 8-4 10 0" stroke="#F89820" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 8c2-2 6-2 8 0" stroke="#F89820" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PythonLogo(props: SkillLogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 8c4-4 12-4 12 0v4H10a4 4 0 0 0-2 1.5V14a2 2 0 0 0 2 2h12v4c0 4-8 4-12 0v-4h10a4 4 0 0 0 2-1.5V14a2 2 0 0 0-2-2H8V8Z" fill="#306998" />
      <path d="M24 24c-4 4-12 4-12 0v-4h10a4 4 0 0 0 2-1.5V14a2 2 0 0 0-2-2H8v-4c0-4 8-4 12 0v4H10a4 4 0 0 0-2 1.5V14a2 2 0 0 0 2 2h12v4Z" fill="#FFD43B" opacity="0.9" />
      <circle cx="11" cy="10" r="1.2" fill="#FFFFFF" />
      <circle cx="21" cy="22" r="1.2" fill="#FFFFFF" />
    </svg>
  );
}

function CLogo(props: SkillLogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="16" cy="16" r="12" fill="#00599C" />
      <path d="M18 11c-6 0-6 10 0 10" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function JavascriptLogo(props: SkillLogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="32" height="32" rx="4" fill="#F7DF1E" />
      <path d="M13 11h2.5c1.8 0 2.5 1 2.5 2.5 0 1.5-1 2-2 2.3l2.5 3c1 0.5 1.7 1.5 1.7 3 0 2.2-1.7 3.5-4.5 3.5h-2.5v-2.7h1.5c0.8 0 1.4-0.4 1.4-1.3 0-0.8-0.4-1.2-1.4-1.2H13V11Zm7 0h2.5c1.8 0 2.5 1 2.5 2.5 0 1.5-1 2-2 2.3l2.5 3c1 0.5 1.7 1.5 1.7 3 0 2.2-1.7 3.5-4.5 3.5H20v-2.7h1.5c0.8 0 1.4-0.4 1.4-1.3 0-0.8-0.4-1.2-1.4-1.2H20V11Z" fill="#000000" />
    </svg>
  );
}

function ReactLogo(props: SkillLogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="16" cy="16" r="3" fill="#61DAFB" />
      <ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="2" />
      <ellipse cx="16" cy="16" rx="10" ry="4" transform="rotate(60 16 16)" stroke="#61DAFB" strokeWidth="2" />
      <ellipse cx="16" cy="16" rx="10" ry="4" transform="rotate(-60 16 16)" stroke="#61DAFB" strokeWidth="2" />
    </svg>
  );
}

function NodeLogo(props: SkillLogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 9.2l8-4.6 8 4.6v9.6l-8 4.6-8-4.6V9.2Z" fill="#83CD29" />
      <path d="M13 12.5v7.2l6 3.4V15.9L13 12.5Z" fill="#FFFFFF" opacity="0.9" />
      <path d="M15 11.5h4v8.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ExpressLogo(props: SkillLogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="32" height="32" rx="4" fill="#000000" />
      <path d="M10 12h12v2H10v-2Zm0 6h12v2H10v-2Zm0 4h8v2h-8v-2Z" fill="#FFFFFF" />
    </svg>
  );
}

function MySQLLogo(props: SkillLogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="16" cy="16" r="12" fill="#00758F" />
      <path d="M12 14c0-3 3-5 4-5s4 2 4 5-2 5-4 5-4-2-4-5Z" fill="#FFFFFF" />
      <path d="M16 21s2-1 2-4" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MongoDBLogo(props: SkillLogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 4s6 4 6 9c0 6-6 12-6 12s-6-6-6-12c0-5 6-9 6-9Z" fill="#47A248" />
      <path d="M16 4s3 3 3 7c0 4-3 8-3 8s-3-4-3-8c0-4 3-7 3-7Z" fill="#A7D384" />
    </svg>
  );
}

function FirebaseLogo(props: SkillLogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 4 24 20 16 16 8 20 16 4Z" fill="#FFCA28" />
      <path d="M16 16 24 20 18 28 16 16Z" fill="#FFB300" />
      <path d="M16 16 8 20 14 28 16 16Z" fill="#FF6F00" />
    </svg>
  );
}

function GeminiLogo(props: SkillLogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="5" fill="#4D8AF0" />
      <circle cx="20" cy="20" r="5" fill="#E39F27" />
      <path d="M13 10h6v2h-6v6h-2v-6H7v-2h4V7h2v3Z" fill="#FFFFFF" />
    </svg>
  );
}

function RestApiLogo(props: SkillLogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 20h16" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
      <circle cx="8" cy="20" r="2.5" fill="#2563EB" />
      <circle cx="24" cy="20" r="2.5" fill="#2563EB" />
      <path d="M16 10v10" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
      <circle cx="16" cy="10" r="2.5" fill="#2563EB" />
    </svg>
  );
}

const SKILL_LOGOS: Record<string, (props: SkillLogoProps) => JSX.Element> = {
  Java: JavaLogo,
  Python: PythonLogo,
  C: CLogo,
  "JavaScript": JavascriptLogo,
  "React.js": ReactLogo,
  "Node.js": NodeLogo,
  "Express.js": ExpressLogo,
  MySQL: MySQLLogo,
  MongoDB: MongoDBLogo,
  "Firebase Firestore": FirebaseLogo,
  "Git & GitHub": (props) => <Github {...props} />,
  "Firebase Auth/Hosting": FirebaseLogo,
  "Gemini AI": GeminiLogo,
  "REST APIs": RestApiLogo,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amarthya Thirunahari — Software Engineer Portfolio" },
      { name: "description", content: "CS engineer building full-stack and AI-powered applications. Skilled in Java, Python, React, Node.js, MongoDB and Firebase." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "education", label: "education" },
  { id: "credentials", label: "credentials" },
  { id: "contact", label: "contact" },
];

function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <main className="mx-auto max-w-6xl px-6 pb-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">~/</span>
          <span className="text-foreground">amarthya</span>
          <span className="text-primary">.dev</span>
        </a>
        <nav className="hidden gap-1 md:flex">
          {NAV.map((n, i) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="group rounded-md px-3 py-1.5 font-mono text-sm text-muted-foreground transition-all hover:bg-background/70 hover:text-foreground"
            >
              <span className="text-primary">0{i + 1}.</span> {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[88vh] flex-col justify-center py-20">
      <p className="fade-up font-mono text-sm text-primary">WHO AM I</p>
      <h1 className="fade-up mt-4 font-sans text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
        Thirunahari <br />
        <span className="text-gradient">Amarthya.</span>
      </h1>
      <p className="fade-up mt-6 max-w-2xl font-mono text-sm text-muted-foreground md:text-base">
        <span className="text-accent">const</span> role ={" "}
        <span className="text-primary">"Software Engineer"</span>;
      </p>
      <p className="fade-up mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        A Computer Science engineer who builds <span className="text-foreground">full-stack web applications</span>{" "}
        and <span className="text-foreground">AI-powered systems</span>. I care about clean code, intuitive
        interfaces and scalable architecture.
        <span className="caret ml-1 h-5 align-middle" />
      </p>

      <div className="fade-up mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          view_projects() <ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=amarthya00@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-mono text-sm transition-colors hover:border-primary/50 hover:text-primary"
        >
          <Mail className="h-4 w-4" /> get_in_touch()
        </a>
      </div>

      <div className="fade-up mt-14 grid grid-cols-2 gap-4 border-t border-border pt-8 font-mono text-xs sm:grid-cols-4">
        {[
          { k: "CGPA", v: "7.55 / 10" },
          { k: "Projects", v: "2+ Shipped" },
          { k: "Publications", v: "IEEE — ICCPCT" },
          { k: "Events Led", v: "10+" },
        ].map((s) => (
          <div key={s.k}>
            <div className="text-muted-foreground">// {s.k}</div>
            <div className="mt-1 text-base text-foreground">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ index, title, caption }: { index: string; title: string; caption: string }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4 border-b border-border pb-4">
      <div>
        <p className="font-mono text-sm text-primary">{index}. {caption}</p>
        <h2 className="mt-2 font-sans text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      </div>
      <span className="hidden font-mono text-xs text-muted-foreground sm:block">/* {caption}.tsx */</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <SectionTitle index="01" caption="about" title="A bit about me." />
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Hi, I'm <span className="text-foreground font-medium">Amarthya</span> — a final-year B.Tech
            Computer Science student at <span className="text-foreground">B V Raju Institute of Technology</span>,
            Hyderabad. I'm looking for challenging software engineering roles where I can apply my skills in
            programming, problem-solving and algorithms.
          </p>
          <p>
            I enjoy designing systems that bring together <span className="text-primary">technology</span>,
            <span className="text-accent"> user-friendly design</span> and scalability. My recent work spans
            full-stack web apps, Generative-AI integrations and real-time data systems.
          </p>
          <p>
            Outside of code, I led the <span className="text-foreground">Cultural Club at BVRIT</span> as Event
            Manager — organizing 10+ college-level events and managing teams under tight timelines.
          </p>
        </div>
        <aside className="md:col-span-2">
          <div className="glow-border rounded-lg bg-card p-5 font-mono text-xs">
            <div className="flex items-center gap-1.5 border-b border-border pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
              <span className="ml-2 text-muted-foreground">profile.json</span>
            </div>
            <pre className="mt-4 text-[12px] leading-6">
{`{
  "name": "Amarthya T.",
  "role": "Software Engineer",
  "location": "Hyderabad, IN",
  "degree": "B.Tech CSE '26",
  "focus": [
    "Full-Stack Web",
    "Generative AI",
    "Scalable Systems"
  ],
  "status": "open_to_work"
}`}
            </pre>
          </div>
        </aside>
      </div>
    </section>
  );
}

const SKILLS = [
  {
    icon: Code2,
    title: "Languages",
    items: [
      { title: "Java", logo: SKILL_LOGOS.Java },
      { title: "Python", logo: SKILL_LOGOS.Python },
      { title: "C", logo: SKILL_LOGOS.C },
      { title: "JavaScript", logo: SKILL_LOGOS["JavaScript"] },
    ],
  },
  {
    icon: Cpu,
    title: "Frameworks & Libraries",
    items: [
      { title: "React.js", logo: SKILL_LOGOS["React.js"] },
      { title: "Node.js", logo: SKILL_LOGOS["Node.js"] },
      { title: "Express.js", logo: SKILL_LOGOS["Express.js"] },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: [
      { title: "MySQL", logo: SKILL_LOGOS.MySQL },
      { title: "MongoDB", logo: SKILL_LOGOS.MongoDB },
      { title: "Firebase Firestore", logo: SKILL_LOGOS["Firebase Firestore"] },
    ],
  },
  {
    icon: Terminal,
    title: "Tools & Platforms",
    items: [
      { title: "Git & GitHub", logo: SKILL_LOGOS["Git & GitHub"] },
      { title: "Firebase Auth/Hosting", logo: SKILL_LOGOS["Firebase Auth/Hosting"] },
      { title: "Gemini AI", logo: SKILL_LOGOS["Gemini AI"] },
      { title: "REST APIs", logo: SKILL_LOGOS["REST APIs"] },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <SectionTitle index="02" caption="skills" title="My technical toolkit." />
      <div className="grid gap-4 sm:grid-cols-2">
        {SKILLS.map((s) => (
          <div
            key={s.title}
            className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-md border border-border bg-background p-2 text-primary">
                <s.icon className="h-4 w-4" />
              </span>
              <h3 className="font-mono text-sm text-muted-foreground">{s.title}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li
                  key={it.title}
                  className="group relative flex h-9 min-w-[6rem] items-center justify-center rounded border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground transition-colors hover:border-primary/40 cursor-pointer"
                >
                  <it.logo className="absolute inset-0 m-auto h-5 w-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <span className="transition-opacity duration-200 group-hover:opacity-0">{it.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    n: "01",
    title: "Gen-AI Powered Event Management System",
    desc: "A web platform where users register, browse events and resources, and apply for specific events. Built with a focus on intuitive UI, seamless frontend–backend integration, and reliable data handling for users and events at scale.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    highlights: ["Auth & event registration flow", "REST API integration", "Published at IEEE ICCPCT 2024"],
  },
  {
    n: "02",
    title: "FinTax — AI Tax Assistant",
    desc: "A tax-filing web app with manual data entry, ITR form selection, auto-filled reports, downloadable PDF returns, and a tax-history dashboard. Integrated an AI chatbot powered by Gemini for live tax queries; backed by Firebase for auth, Firestore data, and hosting.",
    stack: ["React.js", "Gemini AI", "Firebase Auth", "Firestore", "Firebase Hosting"],
    highlights: ["AI chatbot for tax queries", "PDF report generation", "Real-time Firestore sync"],
  },
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <SectionTitle index="03" caption="projects" title="Selected work." />
      <div className="space-y-6">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 md:p-8 transition-all hover:border-primary/40"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-primary">project / {p.n}</p>
                <h3 className="mt-2 font-sans text-2xl font-semibold tracking-tight md:text-3xl">
                  {p.title}
                </h3>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{p.desc}</p>

            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-primary/30 bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const items = [
    {
      icon: GraduationCap,
      title: "B.Tech, Computer Science & Engineering",
      org: "B V Raju Institute of Technology",
      meta: "2022 – 2026  ·  CGPA 7.55",
    },
    {
      icon: BookOpen,
      title: "Intermediate (MPC)",
      org: "Alphores Junior College",
      meta: "2020 – 2022  ·  89.3%",
    },
    {
      icon: Briefcase,
      title: "Event Manager — Cultural Club",
      org: "BVRIT",
      meta: "Coordinated 10+ college-level events; led the club team end-to-end.",
    },
  ];
  return (
    <section id="education" className="scroll-mt-24 py-24">
      <SectionTitle index="04" caption="education" title="Education & leadership." />
      <ol className="relative border-l border-border pl-6">
        {items.map((it) => (
          <li key={it.title} className="mb-8 last:mb-0">
            <span className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full border border-border bg-card">
              <it.icon className="h-3 w-3 text-primary" />
            </span>
            <h3 className="font-sans text-lg font-semibold">{it.title}</h3>
            <p className="font-mono text-sm text-primary">{it.org}</p>
            <p className="mt-1 text-sm text-muted-foreground">{it.meta}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Credentials() {
  const certs = [
    { t: "Introduction to Machine Learning", o: "Infosys SpringBoard", d: "Oct 2024" },
    { t: "Python Artificial Intelligence", o: "Infosys SpringBoard", d: "Jun 2025" },
    { t: "Python for Data Science", o: "Infosys SpringBoard", d: "Jun 2025" },
  ];
  return (
    <section id="credentials" className="scroll-mt-24 py-24">
      <SectionTitle index="05" caption="credentials" title="Certificates & publications." />
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <Award className="h-4 w-4 text-primary" /> certificates
          </h3>
          <ul className="space-y-3">
            {certs.map((c) => (
              <li key={c.t} className="rounded-md border border-border bg-card p-4">
                <p className="font-medium">{c.t}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {c.o} · <span className="text-primary">{c.d}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <FileText className="h-4 w-4 text-primary" /> publications
          </h3>
          <div className="rounded-md border border-border bg-card p-5">
            <p className="font-medium leading-snug">
              <a
                href="https://ieeexplore.ieee.org/document/10673057"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-primary/50 hover:text-foreground"
              >
                Event Management System Using Generative AI
              </a>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Thirunahari Amarthya (2024). 7<sup>th</sup> International Conference on Circuit Power and
              Computing Technologies (ICCPCT), pp. 624–628.
            </p>
            <p className="mt-3 font-mono text-xs text-primary">
              doi: 10.1109/ICCPCT61902.2024.1067305
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <SectionTitle index="06" caption="contact" title="Let's build something." />
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12 text-center glow-border">
        <p className="font-mono text-sm text-primary">$ ./connect.sh</p>
        <h3 className="mt-4 font-sans text-3xl font-semibold tracking-tight md:text-4xl">
          Open to <span className="text-gradient">software engineering</span> roles.
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Whether it's a full-time role, an internship or a collaboration on something interesting —
          my inbox is open. I'll get back to you.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:amarthya00@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" /> amarthya00@gmail.com
          </a>
          <a
            href="tel:+919392957285"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 font-mono text-sm transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Phone className="h-4 w-4" /> +91 93929 57285
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            download
            className="inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/20"
          >
            <Download className="h-4 w-4" /> download_resume.pdf
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 font-mono text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" /> Hyderabad, India
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/amarthya-thirunahari/"
            target="_blank" rel="noreferrer"
            className="rounded-md border border-border bg-background p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            aria-label="GitHub"
            href="https://github.com/Amarthya00"
            target="_blank" rel="noreferrer"
            className="rounded-md border border-border bg-background p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 font-mono text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Amarthya Thirunahari · All rights reserved.</span>
        <span>
          <span className="text-primary">{'<'}</span>built with care &amp; caffeine
          <span className="text-primary">{' />'}</span>
        </span>
      </div>
    </footer>
  );
}
