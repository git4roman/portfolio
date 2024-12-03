import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: color-mix(in srgb, var(--less-shade) 25%, transparent);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  border-left: 5px solid var(--primary-color);
  h3 {
    font-size: calc(var(--font-md) - 0.5rem);
    margin-bottom: 10px;
    color: var(--text-primary);
  }
  .photo {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
  }
  p {
    font-size: calc(var(--font-sm) - 0.5rem);
    line-height: 1.6;
    color: var(--gray-color);
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    padding-top: 12px;
    border: none;
    background-color: transparent;
    color: var(--secondary-color);
    text-decoration: underline;
  }
`;
// export default Wrapper;
