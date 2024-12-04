import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .schoolImg {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 5%;

    img {
      scale: ${(props) => props.scaleImg || 1};
      transform: translate(
        ${(props) => props.transX || 0}%,
        ${(props) => props.transY || 0}%
      );
    }
  }

  figcaption {
    margin-top: 10px;
    font-size: 0.9rem;
    color: var(--gray-color);
    text-align: center;
    /* word-break: break-word;
    text-overflow: ellipsis;
    overflow-wrap: break-word; */
    /* max-width: 210px; */
  }
`;

const SchoolImage = ({
  schoolImg,
  captionImg,
  scaleImg = 1, // Default scale value
  transX = 0, // Default translate X value
  transY = 0, // Default translate Y value
}) => {
  return (
    <Wrapper scaleImg={scaleImg} transX={transX} transY={transY}>
      <div className="schoolImg">
        <img src={schoolImg} alt={captionImg} />
      </div>
      <figcaption>{captionImg}</figcaption>
    </Wrapper>
  );
};

export default SchoolImage;
