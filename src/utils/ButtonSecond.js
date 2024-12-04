import styled from "styled-components";

const Wrapper = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border: 0.5px solid var(--gray-color);
  background-color: var(--background-color);
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  color: var(--gray-color);
  &:hover {
    background-color: var(--primary-color);
  }
`;

const ButtonSecond = ({ buttonClass, buttonContent }) => {
  return <Wrapper className={buttonClass}>{buttonContent}</Wrapper>;
};
export default ButtonSecond;
