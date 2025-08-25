import styled from "styled-components";

const CardContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 280px;
  height: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    object-position: top;
    display: block;
  }
`;

const Content = styled.div`
  padding: 18px;
  // flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;

  h3 {
    font-size: 1.2rem;
    color: var(--primary-color);
  }

  span {
    font-size: 0.85rem;
    background: var(--primary-color);
    color: white;
    padding: 4px 10px;
    border-radius: 12px;
    font-weight: 500;
  }
`;

const Description = styled.p`
  font-size: 12px;
  color: #555;
  margin-bottom: 14px;
  line-height: 1.4;
  // flex-grow: 1;

  /* 🔹 Clamp text so it doesn’t overflow */
  display: -webkit-box;
  -webkit-line-clamp: 3; /* show max 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  // margin-bottom: auto;
`;

const Badge = styled.span`
  background: var(--background-color, #f0f0f0);
  color: var(--accent-color);
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Footer = styled.div`
  padding: 12px 18px;
  border-top: 1px solid #eee;
  background: #fafafa;
  text-align: right;

  a {
    background: var(--primary-color);
    color: white;
    padding: 8px 14px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    transition: background 0.3s ease;

    &:hover {
      background: var(--primary-color-dark, #004080);
    }
  }
`;

const CardPortfolio = ({
  projImage,
  projHeader,
  projDesc,
  projLink,
  techStack,
  contribution,
}) => {
  return (
    <CardContainer data-aos="fade-up">
      <ImageWrapper>
        <img src={projImage} alt={projHeader} />
      </ImageWrapper>

      <Content>
        <HeaderRow>
          <h3>{projHeader}</h3>
          <span>{contribution}</span>
        </HeaderRow>

        <Description>{projDesc}</Description>

        <TechStack>
          {techStack.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </TechStack>
      </Content>

      <Footer>
        <a href={projLink} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </Footer>
    </CardContainer>
  );
};

export default CardPortfolio;
