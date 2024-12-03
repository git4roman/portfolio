import styled from "styled-components";
import withReadMore from "../../hooks/withReadMore";
import { aboutMe } from "../../utils/devInfoDetails";
import romanMMC from "../../assets/images/romanMMC.jpg";
import SchoolImage from "../../utils/schoolImage";
import {CardWrapper} from "./Wrapper";
const Wrapper = styled(CardWrapper)``;
const Present = ({ isExpanded, toggleExpansion }) => {
  return (
    <Wrapper className="present">
      <h3>--Present--</h3>
      <p>
        {isExpanded
          ? `${aboutMe.present.first}`
          : `${aboutMe.present.first.substring(0, 150)}...`}
      </p>
      {isExpanded && (
        <>
          <div className="school photo">
            <SchoolImage
              schoolImg={romanMMC}
              captionImg="In MMC uniform"
              transX="-213"
              transY="-203"
              scaleImg="0.2"
            />
          </div>
        </>
      )}
      <button onClick={toggleExpansion}>
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </Wrapper>
  );
};
export default withReadMore(Present);
