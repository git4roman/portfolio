import React from "react";
import Typewriter from "typewriter-effect";
import { introdata } from "./devInfoDetails";

const TypewriterInstance = () => {
  return (
    <Typewriter
      options={{
        strings: [
          `${introdata.animated.first}`,
          `${introdata.animated.second}`,
          `${introdata.animated.third}`,
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterInstance;
