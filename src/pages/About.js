import newtonsImg from "../assets/images/newtons.jpg";
import namunaImg from "../assets/images/namuna.jpg";
import romanInLab from "../assets/images/romanInLab.jpg";
import SchoolImage from "../utils/schoolImage";
import vibrantImg from "../assets/images/vibrant.jpg";
import { aboutMe } from "../utils/devInfoDetails";
import withReadMore from "../hooks/withReadMore";
import Skills from "../utils/Skills";
import { Earlier, Present } from "../components/About";
import Wrapper from "../assets/wrappers/About";

const About = () => {
  return (
    <Wrapper>
      <div className="aboutMe">
        <h1 data-aos="fade">ABOUT ME</h1>
        <h4 data-aos="fade">{aboutMe.intro}</h4>
        {/* <div className="education" data-aos="fade">
          <h2>Education</h2>
          <div className="eduContent">
            <Earlier />
            <Present />
            <div className="skills" data-aos="fade">
              <h1>Skills & Tools</h1>
              <Skills />
            </div>
          </div>
        </div> */}
        {/* <div className="now"></div> */}
      </div>
    </Wrapper>
  );
};
export default About;
