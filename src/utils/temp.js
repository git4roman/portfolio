import styled from "styled-components";
import devImage from "../assets/images/devImage.jpg";

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
  border-radius: 20px;
  background-color: color-mix(in srgb, var(--gray-color) 20%, transparent);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 30% 30%,
      var(--primary-color),
      transparent
    );
    animation: rotateGradient 5s infinite linear;
    z-index: 1;
  }
  /* backdrop-filter: blur(15px); */
  .imageContainer {
    width: 90%;
    height: 90%;
    border: 2px solid color-mix(in srgb, var(--gray-color) 50%, transparent);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      scale: 1.2;
      transform: translate(-4%, -8%);
      filter: grayscale(0.5);
      transition: all 0.4s ease-in-out;
      cursor: pointer;

      &:hover {
        scale: 1.6;
        transform: translate(-16%, -9%);
        filter: grayscale(0.2);
      }
    }
  }
  @keyframes rotateGradient {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /* Simple circular design for smaller screens */
  @media (max-width: 426px) {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: none; /* Remove gradient for simplicity */
    border: 4px solid color-mix(in srgb, var(--gray-color) 75%, transparent); /* Add white border (stroke) */
    overflow: visible;
    /* scale: 0.9; */
    .imageContainer {
      width: 100%;
      height: 100%;
      border-radius: 50%; /* Keep image circular */
      border: none; /* Remove inner borders */

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center; /* Center the image */
        filter: grayscale(0.5);
        /* scale: 1.5; */
        transform: translate(-16%, -5%);
        &:hover {
          scale: 1.8;
          transform: translate(-16%, 0%);
        }
      }
    }

    &::before {
      display: none; /* Remove rotating gradient for smaller screens */
    }
  }
`;

const DevImage = () => {
  return (
    <Wrapper>
      <div className="imageContainer">
        <img src={devImage} alt="Picture of Roman" />
      </div>
    </Wrapper>
  );
};

export default DevImage;
