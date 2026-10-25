import styled from "styled-components";

const Wrapper = styled.footer`
  min-height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--line);
  color: var(--muted);
  background: var(--ink);
  font: 0.72rem "DM Mono", monospace;
`;

const Footer = () => <Wrapper>© Roman Khatri · Built for the web</Wrapper>;

export default Footer;
