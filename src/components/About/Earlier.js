import { aboutMe } from "../../utils/devInfoDetails";
import SchoolImage from "../../utils/schoolImage";
import newtonsImg from "../../assets/images/newtons.jpg";
import namunaImg from "../../assets/images/namuna.jpg";
import romanInLab from "../../assets/images/romanInLab.jpg";
import vibrantImg from "../../assets/images/vibrant.jpg";
import withReadMore from "../../hooks/withReadMore";
import { CardWrapper } from "./Wrapper";
import styled from "styled-components";

const Wrapper = styled(CardWrapper)``;

const Earlier = ({ isExpanded, toggleExpansion }) => {
  return (
    <Wrapper>
      <h3>--Earlier--</h3>
      <p>
        {isExpanded
          ? `${aboutMe.earlier.first}`
          : `${aboutMe.earlier.first.substring(0, 150)}...`}
      </p>

      {isExpanded && (
        <>
          <div className="school photo">
            <SchoolImage
              schoolImg={newtonsImg}
              captionImg="At Newton's Edu. Academy"
              transX="-33"
              transY="-50"
              scaleImg="0.7"
            />
            <SchoolImage
              schoolImg={romanInLab}
              captionImg="At Kanchanjunga Namuna College"
              transX="-110"
              transY="-110.4"
              scaleImg="0.4"
            />
          </div>
          <p>{aboutMe.earlier.second}</p>
          <div className="school photo">
            <SchoolImage
              schoolImg={vibrantImg}
              captionImg="With my classmates in Vibrant Inst."
              transX="-160"
              transY="-168"
              scaleImg="0.25"
            />
          </div>
          <p>{aboutMe.earlier.third}</p>
        </>
      )}
      <button onClick={toggleExpansion}>
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </Wrapper>
  );
};

export default withReadMore(Earlier);
