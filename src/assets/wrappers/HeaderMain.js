import styled from "styled-components";

export const Wrapper = styled.header`
  color: var(--gray-color);
  background-color: var(--background-color);
  height: var(--nav-height);
  text-transform: uppercase;
  padding: 0 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .frontContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
  }

  .logo {
    font-size: 1.75rem;
    color: var(--gray-color);
    span {
      color: var(--primary-color);
    }
  }

  .themeToggle {
    display: flex;
    align-items: center;

    button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 24px;
      color: var(--black-color);
      transition: color 0.3s ease;

      &:white {
        color: var(--white-color);
      }
    }
  }

  .bigSidebar {
    height: 100vh;
    width: 100vw;
    position: fixed; /* Use fixed instead of absolute */
    top: 0;
    left: 0;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 1rem;
    overflow-x: hidden;
  }

  .backContainer ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-size: 2rem;
    list-style-type: none;
    padding: 0;

    li a {
      text-decoration: none;
      color: var(--primary-color);
      font-size: 2rem;

      &:hover {
        color: var(--accent-color);
      }
    }
  }

  .closeBtn {
    position: absolute;
    top: 20px;
    left: 20px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--primary-color);
    font-size: 30px;
    z-index: 11; /* Ensure close button stays on top */
    &:hover {
      color: var(--accent-color);
    }
  }

  @media (max-width: 768px) {
    .bigSidebar {
      /* width: 80vw; */
    }

    .backContainer ul {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 375px) {
    .logo {
      font-size: 1.6rem;
    }
    .themeToggle {
      scale: 0.9;
    }
  }

  @media (max-width: 320px) {
    .logo {
      font-size: 1.45rem;
    }
    .themeToggle {
      scale: 0.8;
    }
  }
`;
