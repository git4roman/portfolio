import styled from "styled-components";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";
import { socialMedia } from "../utils/devInfoDetails";
const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: calc(100vh - var(--nav-height) - var(--nav-height));
  background-color: color-mix(
    in srgb,
    var(--background-color) 98%,
    transparent
  );
  padding: 20px;
  /* height: 100%; */

  h1 {
    font-size: var(--font-lg);
    color: var(--primary-color);
    margin-bottom: 16px;
  }

  p {
    font-size: var(--font-sm);
    color: var(--accent-color);
    opacity: 0.7;
    margin-bottom: 24px;
    max-width: 600px;
  }

  .contact-info {
    font-size: var(--font-sm);
    color: var(--accent-color);
    margin-bottom: 32px;

    .address,
    .email,
    .phone {
      margin-bottom: 12px;
      opacity: 0.7;
    }

    a {
      color: var(--primary-color);
      text-decoration: underline;
    }
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 16px;

    a {
      color: var(--secondary-color);
      font-size: 1.8rem;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary-color);
      }
    }
  }
  @media (max-width: 426px) {
    p,
    .contact-info {
      font-size: calc(var(--font-sm) - 0.2rem);
    }
    .social-icons {
      scale: 0.8;
    }
  }
  @media (max-width: 376px) {
    h1 {
      font-size: calc(var(--font-lg) - 0.2rem);
    }
    p,
    .contact-info {
      font-size: calc(var(--font-sm) - 0.4rem);
    }
    .social-icons {
      scale: 0.7;
    }
  }
  @media (max-width: 321px) {
    h1 {
      font-size: calc(var(--font-lg) - 0.3rem);
    }
    p,
    .contact-info {
      font-size: calc(var(--font-sm) - 0.6rem);
    }
    .social-icons {
      scale: 0.6;
    }
  }
`;
const DownloadButton = styled.a`
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem; /* Equivalent to px-6 py-3 */
  border-radius: 0.5rem; /* Equivalent to rounded-lg */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--accent-color); /* Darker blue on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
    transform: translateY(-2px); /* Slight lift effect */
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <h1 data-aos="fade">Contact Me</h1>
      <p data-aos="fade">
        Feel free to reach out through any of the channels below. I’d love to
        hear from you!
      </p>

      <div className="contact-info" data-aos="fade">
        <div className="address">57204, Birtamode-4, Jhapa, Koshi, Nepal </div>
        <div className="email">
          Email: <a href="mailto:contact@example.com">romanforgit@gmail.com</a>
        </div>
        <div className="phone">Phone: +977 9817996680</div>
      </div>

      <div className="social-icons" data-aos="fade">
        <a href={socialMedia.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href={socialMedia.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>

        <a
          href={socialMedia.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href={socialMedia.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <DownloadButton href="public/CV_Roman_Khatri.pdf" download>
        Download My CV
      </DownloadButton>
    </ContactWrapper>
  );
};

export default Contact;
