import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 8px; /* Adjusted padding to ensure it's proportional */
  font-size: 1rem; /* Adjust font size for smaller button */
  width: 35px; /* Set the width of the button */
  height: 35px; /* Set the height of the button */
  cursor: pointer;
  display: ${({ show }) => (show ? "block" : "none")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease;
  overflow: hidden;

  &:hover {
    background-color: var(--secondary-color);
  }

  &:focus {
    outline: none;
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton show={isVisible} onClick={scrollToTop}>
      <FaArrowUp />
    </ScrollButton>
  );
};

export default ScrollToTopButton;
