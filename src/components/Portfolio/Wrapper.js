import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center; /* Center cards horizontally */
  flex-wrap: wrap; /* Allow wrapping for responsiveness */
  gap: 16px; /* Spacing between cards */

  .card {
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 8px;
    position: relative;
    border: 2px solid color-mix(in srgb, var(--gray-color) 35%, transparent);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1); /* Slightly scale the card on hover */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        transparent,
        color-mix(in srgb, var(--less-shade) 25%, transparent)
      );
      color: var(--background-color);
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: center;
      opacity: 0;
      padding-bottom: 32px;
      transition: opacity 0.3s ease;

      h4 {
        margin: 8px 0;
        color: var(--secondary-color);
      }

      p {
        font-size: calc(var(--font-esm) - 0.4rem);
        margin: 0;
        color: var(--secondary-color);
      }
    }

    &:hover .overlay {
      opacity: 1; /* Show overlay on hover */
    }
    &:hover img {
      filter: blur(5px); /* Show overlay on hover */
    }
  }

  button {
    cursor: pointer;
    margin-top: 12px;
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--primary-color);
    background-color: transparent;
    font-size: calc(var(--font-esm) - 0.2rem);
    a {
      text-decoration: none;
      /* text-decoration: underline; */
      color: var(--secondary-color);
    }
  }
`;
