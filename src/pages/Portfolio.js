import styled from "styled-components";
import todoProject from "../assets/images/projects/todoProject.png";
import krishiSanchar from "../assets/images/projects/KrishiSanchar.png";
import CardPortfolio from "../components/Portfolio/CardPortfolio";
import emiImage from "../assets/images/projects/Emi.png";
import meroKuraImage from "../assets/images/projects/meroKura.png";
import crystalImage from "../assets/images/projects/CrystalImage.png";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  min-height: calc(100vh - var(--nav-height) - var(--nav-height));
  margin: 0 auto;
  text-align: center;
  padding: 40px 20px;
  background-color: var(--background-color);

  h1 {
    padding: 12px 0 32px 0;
    font-size: var(--font-lg);
    color: var(--primary-color);
  }
  p {
    span {
      color: var(--primary-color);
      text-decoration: underline;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
`;

const Portfolio = () => {
  return (
    <Wrapper>
      <h1 data-aos="fade">PROJECTS</h1>
      <Grid>
        <CardPortfolio
          projImage={krishiSanchar}
          projDesc="A multi-stack plant care and marketplace app."
          projHeader="KrishiSanchar"
          projLink="http://krishisancharbackend.runasp.net/index.html"
          techStack={["AI/ML", "FastAPI", ".NET Core", "React Native"]}
          contribution="Full Stack"
        />
        <CardPortfolio
          projImage={crystalImage}
          projDesc="An ERP Product of Crystal Solutions, where I was a part of the development team."
          projHeader="Crystal ERP"
          projLink="https://demo.thecrystalerp.com"
          techStack={[".NET Core MVC"]}
          contribution="Full Stack"
        />

        <CardPortfolio
          projImage={emiImage}
          projDesc="An EMI calculator Application; simple yet very helpful tool"
          projHeader="EMI Calculator"
          projLink="https://emi-calculator-inky.vercel.app/"
          techStack={["React"]}
          contribution="Frontend"
        />

        {/* <CardPortfolio
          projImage={meroKuraImage}
          projDesc="A dual-persona self-chatting app"
          projHeader="Mero Kura"
          projLink="https://merokura-monochat.vercel.app/"
          techStack={["React"]}
          contribution="Frontend"
        /> */}

        {/* <CardPortfolio
          projImage={todoProject}
          projDesc="A simple task management application."
          projHeader="Todo MERN App"
          projLink="https://todo-bluu.vercel.app/"
          techStack={["MongoDB", "Express", "React", "Node.js"]}
          contribution="Full Stack"
        /> */}
      </Grid>
      <p>
        Want to Know More About My Projects? Email me at{" "}
        <span>romanforgit@gmail.com</span>
      </p>
    </Wrapper>
  );
};

export default Portfolio;
