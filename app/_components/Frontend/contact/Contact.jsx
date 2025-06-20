import React from "react";
import Hero from "./parts/Hero";
import Passionate from "./parts/Passionate";
import Why from "./parts/Why";
import GotQues from "./parts/GotQues";
import GetTouch from "./parts/GetTouch";
import Map from "./parts/Map";

const Contact = () => {
  return (
    <>
      <Hero />
      <div className="bg-[#282927] gap-2">
      <Passionate />
        <Why />
        <GotQues />
        <GetTouch />
        <Map/>
      </div>
    </>
  );
};

export default Contact;
