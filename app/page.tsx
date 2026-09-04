'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Smartphone,
  Sun,
  X,
} from 'lucide-react';

type Theme = 'light' | 'dark';

type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'Flight Booking Application',
    description: 'A complete booking flow for one-way, round-trip, and multi-city travel with API payload handling, payment steps, validation, and a mobile-first experience.',
    tags: ['React Native', 'Expo', 'REST API', 'Firebase'],
    featured: true,
  },
  {
    number: '02',
    title: 'Shree Airlines Mobile App',
    description: 'A production mobile application maintained across feature updates, bug fixes, an upgraded Expo SDK, and Google Play Store requirements.',
    tags: ['React Native', 'Expo', 'Android'],
  },
  {
    number: '03',
    title: 'Reusable UI Systems',
    description: 'Reusable components and patterns that make product interfaces more consistent, accessible, and faster to build across web and mobile.',
    tags: ['React', 'TypeScript', 'Design Systems'],
  },
];

const experiences = [
  {
    company: 'Dotnet Intern',
    role: 'Internship',
    period: 'Apr 2025 — Jul 2025',
    location: 'Biratmod, Nepal',
    points: [
      'Worked on ASP.NET Core MVC applications using C#, .NET 8, and EF Core.',
      'Collaborated with the development team using Git branching and merging workflows.',
      'Wrote unit tests with xUnit and Moq while learning clean code and architecture.',
    ],
    stack: 'ASP.NET Core, xUnit, Moq, Entity Framework, MySQL',
  },
  {
    company: 'React Native Intern',
    role: 'Internship',
    period: 'Sep 2025 — Dec 2025',
    location: 'Lalitpur, Nepal',
    points: [
      'Assisted in developing mobile and web applications using React Native, Expo, React, and Next.js.',
      'Contributed to UI development, reusable components, and REST API integration.',
      'Helped resolve bugs, refactor code, and improve TypeScript implementations.',
    ],
    stack: 'React Native, Expo, React, Next.js, Firebase, TypeScript',
  },
  {
    company: 'Junior Developer',
    role: 'Full-time',
    period: 'Dec 2025 — Present',
    location: 'Lalitpur, Nepal',
    points: [
      'Develop mobile and web applications within Agile/Scrum teams using feature-based architecture and design patterns.',
      'Build and maintain data flows, payment gateways, geolocation, push notifications, and deep linking.',
      'Support QA and pre-release workflows while collaborating with senior developers, designers, and backend teams.',
    ],
    stack: 'React Native, React, Native CLI, React Native Expo, JavaScript, Figma',
  },
];

const blogs = [
  { date: '01 / 2025', title: 'Building mobile experiences that feel at home', text: 'Notes on keeping mobile interfaces fast, clear, and human.' },
  { date: '12 / 2024', title: 'The small details behind reusable UI', text: 'A practical look at making components work harder without making them harder to use.' },
  { date: '10 / 2024', title: 'From API payload to a confident checkout', text: 'What I learned while shaping a multi-step booking experience.' },
];

export default function Home() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme') as Theme | null;
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Roman Khatri home">
          <span className="brand-mark"><Code2 size={17} strokeWidth={2.5} /></span>
          <span>roman<span className="text-primary">.dev</span></span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          {['Home', 'Portfolio', 'Blogs', 'Get In Touch'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <span className="availability"><span className="status-dot" />Available for work</span>
          <button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="menu-button icon-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" />Hi, I&apos;m Roman Khatri</div>
          <h1>Building digital<br /><span>experiences</span> that move.</h1>
          <p className="hero-lede">Frontend and mobile developer focused on turning complex ideas into simple, useful, and beautifully crafted products.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#portfolio">Explore my work <ArrowDownRight size={17} /></a>
            <a className="text-link" href="#get-in-touch">Let&apos;s talk <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> Jhapa, Nepal</span>
            <span className="meta-divider" />
            <span><Smartphone size={15} /> Web + Mobile</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-grid" />
            <img src="/images/devImage.jpg" alt="Roman Khatri standing on a bridge in Nepal" />
            <div className="portrait-tag"><span className="status-dot" />Currently building</div>
          </div>
          <div className="floating-card code-card">
            <span className="code-muted">const</span> <span className="code-key">roman</span> = <span className="code-value">&quot;developer&quot;</span>
          </div>
          <div className="floating-card year-card"><strong>01</strong><span>years<br />shipping</span></div>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><ArrowDownRight size={15} /></div>
      </section>

      <section id="portfolio" className="section-wrap portfolio-section">
        <div className="section-heading">
          <div><span className="section-kicker">02 / The journey</span><h2>Experience that<br /><em>turns into impact.</em></h2></div>
          <p>Every role has taught me something new about building with intention. Here&apos;s a snapshot of where I&apos;ve been putting that into practice.</p>
        </div>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={experience.company}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-main">
                <div className="experience-title"><h3>{experience.company}</h3><span>{experience.role}</span></div>
                <ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <div className="stack-line"><span>Technologies / </span>{experience.stack}</div>
              </div>
              <div className="experience-meta"><strong>{experience.period}</strong><span>{experience.location}</span></div>
            </article>
          ))}
        </div>

        <div className="projects-heading"><div><span className="section-kicker">03 / Selected work</span><h2>Things I&apos;ve<br /><em>helped ship.</em></h2></div><span className="mono-label">3 PROJECTS / 2024—25</span></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.number}>
              <div className="project-top"><span className="project-number">{project.number}</span><ArrowUpRight size={20} /></div>
              <div className="project-content"><h3>{project.title}</h3><p>{project.description}</p></div>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap toolkit-section">
        <div className="section-heading compact"><div><span className="section-kicker">04 / The toolkit</span><h2>Curious by<br /><em>default.</em></h2></div><p>The tools are always changing. The approach stays the same: learn quickly, communicate clearly, and make the next version better.</p></div>
        <div className="toolkit-grid">
          <div className="toolkit-card"><span className="toolkit-label">Frameworks + libraries</span><h3>React Native<br />React / Next.js<br />.NET 8 / EF Core</h3></div>
          <div className="toolkit-card"><span className="toolkit-label">Tools + platforms</span><h3>Git / Postman<br />Docker / CI/CD<br />Firebase</h3></div>
          <div className="toolkit-card"><span className="toolkit-label">Databases</span><h3>MySQL<br />SQLite</h3></div>
          <div className="toolkit-card toolkit-card-accent"><span className="toolkit-label">Also bringing</span><h3>Communication<br />Problem solving<br />Teamwork</h3></div>
        </div>
        <div className="credentials-row">
          <div><span className="section-kicker">Certificates</span><p>Django Workshop · 2023<br />AI / ML Workshop · 2025</p></div>
          <div><span className="section-kicker">Education</span><p>BSc. CSIT · Mechi Multiple Campus<br />Bhadrapur, Jhapa · 2022—2026</p></div>
        </div>
      </section>

      <section id="blogs" className="section-wrap blog-section">
        <div className="section-heading compact"><div><span className="section-kicker">04 / Field notes</span><h2>Writing from<br /><em>the process.</em></h2></div><a className="text-link" href="mailto:romanforgit@gmail.com?subject=Blog%20notes">Request a note <ArrowUpRight size={16} /></a></div>
        <div className="blog-list">
          {blogs.map((blog) => <a className="blog-item" href="mailto:romanforgit@gmail.com" key={blog.title}><span className="blog-date">{blog.date}</span><div><h3>{blog.title}</h3><p>{blog.text}</p></div><ChevronRight size={19} /></a>)}
        </div>
      </section>

      <section id="get-in-touch" className="contact-section section-wrap">
        <div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" />
        <div className="contact-content"><span className="section-kicker">06 / Start a conversation</span><h2>Have a good idea?<br /><em>Let&apos;s make it real.</em></h2><p>I&apos;m always open to thoughtful collaborations, new product ideas, and conversations about the craft.</p><a className="button button-light" href="mailto:romanforgit@gmail.com?subject=Hello%20Roman" onClick={() => setSent(true)}><Mail size={17} /> {sent ? 'Your email app is ready' : 'Get in touch'}</a></div>
      </section>

      <footer className="site-footer section-wrap"><span>© 2025 Roman Khatri</span><span className="footer-built"><span className="status-dot" />Built with curiosity & care</span><div className="social-links"><a href="mailto:romanforgit@gmail.com" aria-label="Email Roman"><Mail size={16} /></a><a href="https://github.com" aria-label="GitHub"><Github size={16} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={16} /></a></div></footer>
    </main>
  );
}
