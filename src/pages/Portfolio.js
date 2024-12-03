import styled from "styled-components";
import todoProject from "../assets/images/todoProject.png";

import CardPortfolio from "../components/Portfolio/CardPortfolio";

const Wrapper = styled.section`
  height: calc(100vh - var(--nav-height) - var(--nav-height));

  /* max-width: 80vw; */
  margin: 0 auto;
  text-align: center;
  padding: 2px 0;
  background-color: var(--background-color);

  h1 {
    padding: 12px 0 22px 0;
    font-size: var(--font-lg);
    color: var(--primary-color);
  }
`;

const Portfolio = () => {
  return (
    <Wrapper>
      <h1 data-aos="fade">PROJECTS</h1>
      <CardPortfolio
        projImage={todoProject}
        projDesc="A simple task management application"
        projHeader="Todo MERN App"
        projLink="https://todo-bluu.vercel.app/"
      />
    </Wrapper>
  );
};

export default Portfolio;
