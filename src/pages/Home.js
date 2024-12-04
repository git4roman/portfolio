import styled from "styled-components";
import { devInfoDetails, introdata } from "../utils/devInfoDetails";
import DevImage from "../utils/devImage";
import Typewriter from "../utils/typeWriter";
import ButtonHero from "../utils/ButtonHero";
import ButtonSecond from "../utils/ButtonSecond";
import { Link } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Wrapper = styled.section`
  background-color: var(--background-color);
  height: calc(100vh - var(--nav-height));
  /* overflow: hidden; */
  font-size: var(--font-sm);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  /* scale: 1.2; */
  /* border: 2px solid red; */

  .homeContainer {
    max-width: 75vw;
    display: grid; /* Enable grid layout */
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    gap: 24px; /* Add spacing between grid items */
    justify-items: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    min-height: calc(
      100vh - var(--nav-height)
    ); /* Ensure it takes full screen height minus navbar */
  }

  .devInfo {
    color: var(--gray-color);
    max-width: 600px; /* Set max width for content */
    text-align: center; /* Center the text */
  }

  .mainInfo {
    font-size: var(--font-lg); /* Larger font for main info */
    font-weight: bold; /* Make text bold */
    margin-bottom: 16px; /* Add some space below */
  }
  .typewriterSection {
    font-size: calc(var(--font-sm) - 0.2rem);
  }

  .disclaimer {
    margin-top: 20px;
    font-size: var(--font-esm);
    color: var(--gray-color);
  }

  .buttonContainer {
    margin-top: 24px;
  }

  @media (max-width: 769px) {
    .homeContainer {
      max-width: 80vw;
    }
    .mainInfo {
      font-size: calc(var(--font-lg) - 0.4rem);
    }
    .typewriterSection {
      font-size: calc(var(--font-sm) - 0.4rem);
    }
    .disclaimer {
      font-size: calc(var(--font-esm) - 0.1rem);
    }
  }
  @media (max-width: 426px) {
    .homeContainer {
      grid-template-columns: 1fr; /* Two equal columns */
      gap: 2px;
      padding: 12px 0 64px 0;
    }
    .imgContainer {
      order: -1;
    }

    .mainInfo {
      font-size: calc(var(--font-lg) - 0.8rem);
    }
  }
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <div className="homeContainer">
          <div className="devInfo">
            <div className="mainInfo">{introdata.title}</div>
            <div className="typewriterSection">
              <Typewriter />
            </div>
            <div className="disclaimer">
              This website intends to connect people with me.
            </div>
            <p className="buttonContainer">
              <Link to="/portfolio">
                <ButtonHero
                  buttonClass="portfolio"
                  buttonContent="My portfolio"
                />
              </Link>
              <Link to="/contact">
                <ButtonSecond buttonClass="contact" buttonContent="Contact" />
              </Link>
            </p>
          </div>
          <div className="imgContainer">
            {" "}
            <DevImage />
          </div>
        </div>
      </Wrapper>
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};
export default Home;
