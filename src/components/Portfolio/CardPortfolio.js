import { CardWrapper } from "../Portfolio/Wrapper";
const CardPortfolio = ({ projImage, projDesc, projHeader, projLink }) => {
  return (
    <CardWrapper className="cardSection" data-aos="fade">
      <div className="card" >
        <img src={projImage} alt="Todo Project" />

        <div className="overlay">
          <h4>{projHeader}</h4>
          <p>{projDesc}</p>
          <button className="btn">
            <a href={projLink} target="_blank">
              View Project
            </a>
          </button>
        </div>
      </div>
      {/* Add more cards as needed */}
    </CardWrapper>
  );
};
export default CardPortfolio;
