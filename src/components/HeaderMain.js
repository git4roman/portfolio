import { useState } from "react";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeToggle from "../utils/ThemeToggle";

const Header = styled.header`
  position: relative;
  z-index: 10;
  height: var(--nav-height);
  border-bottom: 1px solid var(--line);
  background: var(--ink);
  color: var(--paper);
  .inner { width: min(1120px, calc(100% - 40px)); height: 100%; display: flex; align-items: center; justify-content: space-between; margin: 0 auto; }
  .logo { color: var(--paper); font: 600 1.15rem "DM Mono", monospace; letter-spacing: -0.05em; text-decoration: none; }
  .logo span { color: var(--lime); }
  nav { display: flex; align-items: center; gap: 26px; }
  nav a { color: var(--muted); font: 0.75rem "DM Mono", monospace; text-decoration: none; text-transform: uppercase; }
  nav a:hover { color: var(--lime); }
  .actions { display: flex; align-items: center; gap: 12px; }
  .menu { display: none; border: 0; color: var(--paper); background: transparent; cursor: pointer; font-size: 1.5rem; }
  .mobile-menu { position: fixed; inset: var(--nav-height) 0 0; display: flex; align-items: center; justify-content: center; background: var(--ink); }
  .mobile-menu nav { display: flex; flex-direction: column; gap: 28px; }
  .mobile-menu nav a { font-size: 1.1rem; }
  @media (max-width: 760px) { nav { display: none; } .menu { display: block; } }
`;

const HeaderMain = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const links = [["Experience", "#experience"], ["Toolkit", "#toolkit"], ["Contact", "#contact"]];

  return <Header><div className="inner"><Link className="logo" to="/">R<span>/</span>K</Link><nav>{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><div className="actions"><ThemeToggle /><button className="menu" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <VscClose /> : <VscGrabber />}</button></div></div>{open && <div className="mobile-menu"><nav>{links.map(([label, href]) => <a key={label} href={href} onClick={close}>{label}</a>)}</nav></div>}</Header>;
};

export default HeaderMain;
