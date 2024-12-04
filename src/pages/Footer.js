import styled from "styled-components";
import ReactImg from "../assets/images/skills/React-Dark.svg";

const Wrapper = styled.div`
  height: var(--nav-height);
  width: 100vw;
  background-color: var(--gray-color);
  color: color-mix(in srgb, var(--background-color) 75%, transparent);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: 0;
  /* position: absolute; */

  .built {
    display: inline-flex; /* Use inline-flex to ensure both the text and image align properly */
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 6px;

    h5 {
      display: inline; /* Ensure the text is treated as an inline element */
      margin: 0;
    }

    img {
      width: 20px;
      height: 20px; /* Set a specific height for the image */
      vertical-align: middle; /* Align the image vertically with the text */
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <div className="built">
        <h5>Built with: </h5>
        <img src={ReactImg} alt="React logo" />
      </div>
      <div className="copyrightTag">
        <h6>Copyright © Roman Ghimire Khatri 2024 All rights Reserved</h6>
      </div>
    </Wrapper>
  );
};

export default Footer;
