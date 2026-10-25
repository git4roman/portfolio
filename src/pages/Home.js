import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import portrait from "../assets/images/devImage.jpg";

const Page = styled.main`
  background: var(--ink);
  color: var(--paper);

  .container { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
  #experience, #toolkit, #contact { scroll-margin-top: 20px; }
  .eyebrow { color: var(--lime); font: 600 0.76rem/1.2 "DM Mono", monospace; letter-spacing: 0.14em; text-transform: uppercase; }
  .hero { min-height: min(760px, calc(100svh - var(--nav-height))); display: grid; grid-template-columns: 1.1fr 0.9fr; align-items: center; gap: 72px; padding: 36px 0 52px; }
  .hero h1 { max-width: 720px; margin: 16px 0 20px; font-size: clamp(2.8rem, 6vw, 5.8rem); line-height: 0.94; letter-spacing: -0.07em; font-weight: 500; }
  .hero h1 span { color: var(--lime); }
  .hero-copy { max-width: 580px; color: var(--muted); font: 1.08rem/1.75 "DM Sans", sans-serif; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
  .button { display: inline-flex; align-items: center; gap: 12px; border: 1px solid var(--lime); border-radius: 999px; padding: 14px 20px; color: var(--ink); background: var(--lime); font: 600 0.87rem "DM Sans", sans-serif; text-decoration: none; transition: transform 180ms ease, background 180ms ease; }
  .button:hover { transform: translateY(-3px); background: #dfff64; }
  .button.secondary { color: var(--paper); background: transparent; border-color: var(--line); }
  .button.secondary:hover { border-color: var(--lime); }
  .portrait-wrap { position: relative; justify-self: end; width: min(390px, 100%); }
  .portrait-wrap::before { content: ""; position: absolute; inset: 22px -18px -18px 18px; border: 1px solid var(--lime); border-radius: 24px; transform: rotate(5deg); }
  .portrait { display: block; position: relative; width: 100%; aspect-ratio: 0.84; object-fit: cover; border-radius: 20px; filter: grayscale(100%); }
  .portrait-label { position: absolute; right: -18px; bottom: 22px; z-index: 1; padding: 10px 13px; color: var(--ink); background: var(--lime); font: 600 0.72rem "DM Mono", monospace; }
  .proof { border-block: 1px solid var(--line); padding: 24px 0; }
  .proof-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .proof strong { display: block; color: var(--paper); font: 500 2rem "DM Sans", sans-serif; }
  .proof span { display: block; margin-top: 5px; color: var(--muted); font: 0.78rem "DM Mono", monospace; text-transform: uppercase; }
  .section { padding: 116px 0; }
  .section-heading { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin-bottom: 42px; }
  .section h2 { max-width: 580px; margin-top: 14px; font-size: clamp(2.3rem, 5vw, 4.5rem); line-height: 0.98; letter-spacing: -0.06em; font-weight: 500; }
  .section-intro { max-width: 360px; color: var(--muted); font: 0.95rem/1.6 "DM Sans", sans-serif; }
  .experience { display: grid; grid-template-columns: 0.65fr 1.35fr; gap: 55px; border-top: 1px solid var(--line); padding-top: 30px; }
  .career-list { border-top: 1px solid var(--line); }
  .career-item { display: grid; grid-template-columns: 54px 0.65fr 1.35fr; gap: 28px; padding: 30px 0; border-bottom: 1px solid var(--line); }
  .career-item.current { background: linear-gradient(90deg, rgba(199, 243, 107, 0.07), transparent 65%); }
  .career-index { color: var(--lime); font: 0.78rem "DM Mono", monospace; padding-top: 4px; }
  .role-meta { color: var(--muted); font: 0.82rem/1.7 "DM Mono", monospace; }
  .role-meta strong { display: block; margin-bottom: 5px; color: var(--paper); font: 600 1.25rem "DM Sans", sans-serif; }
  .role h3 { margin-bottom: 15px; font-size: 1.5rem; font-weight: 500; }
  .role p, .role li { color: var(--muted); font: 0.96rem/1.7 "DM Sans", sans-serif; }
  .role ul { display: grid; gap: 10px; padding-left: 20px; }
  .role li::marker { color: var(--lime); }
  .stack { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
  .tag { border: 1px solid var(--line); border-radius: 999px; padding: 7px 11px; color: var(--muted); font: 0.72rem "DM Mono", monospace; }
  .work-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
  .project { min-height: 310px; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid var(--line); border-radius: 18px; padding: 26px; background: var(--panel); transition: border 180ms ease, transform 180ms ease; }
  .project:hover { border-color: var(--lime); transform: translateY(-5px); }
  .project h3 { margin: 42px 0 10px; font-size: 1.5rem; font-weight: 500; }
  .project p { max-width: 430px; color: var(--muted); font: 0.94rem/1.6 "DM Sans", sans-serif; }
  .project-top { display: flex; justify-content: space-between; align-items: start; color: var(--lime); font: 0.72rem "DM Mono", monospace; }
  .project-top svg { font-size: 1.1rem; }
  .toolkit { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .tool-group { border-top: 1px solid var(--line); padding-top: 17px; }
  .tool-group h3 { margin-bottom: 14px; color: var(--lime); font: 0.78rem "DM Mono", monospace; text-transform: uppercase; }
  .tool-group p { color: var(--paper); font: 1.05rem/1.7 "DM Sans", sans-serif; }
  .contact { margin-bottom: 100px; border: 1px solid var(--lime); border-radius: 22px; padding: clamp(28px, 6vw, 70px); background: var(--lime); color: var(--ink); }
  .contact h2 { max-width: 680px; margin: 12px 0 24px; }
  .contact p { max-width: 560px; font: 1.05rem/1.6 "DM Sans", sans-serif; }
  .contact .eyebrow { color: var(--ink); }
  .contact-links { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 28px; }
  .contact-links a { display: inline-flex; align-items: center; gap: 8px; color: var(--ink); font: 600 0.9rem "DM Sans", sans-serif; text-decoration: none; }
  .contact-links a:hover { text-decoration: underline; }
  @media (max-width: 760px) {
    .hero { grid-template-columns: 1fr; gap: 36px; padding: 36px 0 64px; }
    .portrait-wrap { justify-self: start; width: min(300px, 82%); }
    .proof-grid { grid-template-columns: repeat(2, 1fr); }
    .section { padding: 78px 0; }
    .section-heading, .experience { display: block; }
    .career-item { grid-template-columns: 38px 1fr; gap: 14px; }
    .career-item .role { grid-column: 2; }
    .section-intro { margin-top: 18px; }
    .role-meta { margin-bottom: 24px; }
    .work-grid, .toolkit { grid-template-columns: 1fr; }
  }
`;

const tags = ["Next.js", "TypeScript", "React Native", "Redux Toolkit", "Tailwind CSS", "REST APIs", "Figma", "Docker"];

const Home = () => (
  <Page>
    <div className="container">
      <section className="hero" id="top">
        <div><div className="eyebrow">Full-stack developer · Lalitpur, Nepal</div><h1>Interfaces that make complex products feel <span>simple.</span></h1><p className="hero-copy">I’m Roman Khatri, a full-stack developer building production web and mobile experiences across travel, booking, and business software.</p><div className="hero-actions"><a className="button" href="#experience">Explore my experience <FaArrowRight /></a><a className="button secondary" href="/CV_Roman_Khatri.pdf" download>Download résumé</a></div></div>
        <div className="portrait-wrap"><img className="portrait" src={portrait} alt="Roman Khatri" /><div className="portrait-label">AVAILABLE FOR GOOD PROBLEMS</div></div>
      </section>
      <section className="proof" aria-label="Career highlights"><div className="proof-grid"><div><strong>3 roles</strong><span>career progression</span></div><div><strong>1+ yr</strong><span>production experience</span></div><div><strong>Web + mobile</strong><span>one connected toolkit</span></div></div></section>
      <section className="section"><div className="section-heading" id="experience"><div><div className="eyebrow">01 / Experience</div><h2>Three roles. One growing product mindset.</h2></div><p className="section-intro">I joined Mantra IT as a Dotnet Intern, moved into React Native, and now ship frontend features as a Junior Developer.</p></div><div className="career-list">
        <article className="career-item current"><div className="career-index">03</div><div className="role-meta"><strong>Junior Developer</strong>Mantra IT · Full-time<br />Dec 2025 — Present<br />Lalitpur · On-site</div><div className="role"><h3>Flight booking platform</h3><ul><li>Co-developed a 26-route Next.js and TypeScript product across domestic, international, one-way, round-trip, and multi-city journeys.</li><li>Owned search, fare revalidation, passenger forms, payments, PNR creation, ticket issuance, trip history, cancellations, and add-on requests.</li><li>Contributed to React Native apps with Firebase Auth, push notifications, deep links, maps, analytics, and production release support.</li></ul><div className="stack">{tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>
        <article className="career-item"><div className="career-index">02</div><div className="role-meta"><strong>React Native Intern</strong>Mantra IT · Internship<br />Sep 2025 — Dec 2025<br />Lalitpur · Hybrid</div><div className="role"><h3>Web & mobile foundations</h3><ul><li>Built UI screens, reusable components, and REST API integrations for web and mobile apps using React Native, Expo, React, and Next.js.</li><li>Supported flight booking features, bug fixes, refactoring, and the team’s TypeScript improvements.</li></ul><div className="stack"><span className="tag">React Native</span><span className="tag">Expo</span><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Figma</span></div></div></article>
        <article className="career-item"><div className="career-index">01</div><div className="role-meta"><strong>Dotnet Intern</strong>Crystal Solutions · Internship<br />Apr 2025 — Jul 2025<br />Birtamod · On-site</div><div className="role"><h3>ERP engineering foundations</h3><ul><li>Worked on an ASP.NET Core MVC ERP using C#, .NET 8, EF Core, Telerik, and MySQL within a layered architecture.</li><li>Used Git workflows and wrote unit tests with xUnit and Moq while learning production engineering practices.</li></ul><div className="stack"><span className="tag">ASP.NET Core</span><span className="tag">C#</span><span className="tag">.NET 8</span><span className="tag">EF Core</span><span className="tag">xUnit</span><span className="tag">Moq</span></div></div></article>
      </div></section>
      <section className="section"><div className="section-heading" id="toolkit"><div><div className="eyebrow">02 / Toolkit</div><h2>Comfortable across the stack, focused on the interface.</h2></div></div><div className="toolkit"><div className="tool-group"><h3>Build</h3><p>TypeScript, JavaScript, React, Next.js, React Native, Expo</p></div><div className="tool-group"><h3>Design systems</h3><p>Tailwind CSS, shadcn/ui, responsive design, ARIA, keyboard navigation</p></div><div className="tool-group"><h3>Ship</h3><p>Redux Toolkit, REST APIs, Axios, Jest, Git, Docker, CI/CD, Firebase</p></div></div></section>
      <section className="contact" id="contact"><div className="eyebrow">03 / Let’s work together</div><h2>Have a product that deserves a clearer interface?</h2><p>Tell me what you’re building, what feels stuck, or what needs to ship. I’m always interested in thoughtful teams and real product problems.</p><div className="contact-links"><a href="mailto:romanforgit@gmail.com"><FaEnvelope /> romanforgit@gmail.com</a><a href="https://www.linkedin.com/in/romankhatri8/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a><a href="https://github.com/git4roman" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a></div></section>
    </div>
  </Page>
);

export default Home;
