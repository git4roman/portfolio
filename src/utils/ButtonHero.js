import styled from "styled-components";

const Wrapper = styled.button`
  padding: 12px 14px;
  font-size: 1rem;
  border: 0.5px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--background-color);
  cursor: pointer;
  margin: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--accent-color);
  }
`;

const ButtonHero = ({ buttonClass, buttonContent }) => {
  return <Wrapper className={buttonClass}>{buttonContent}</Wrapper>;
};
export default ButtonHero;
