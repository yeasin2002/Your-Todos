import React from "react";
import LandingBody from "./Landing Body/LandingBody";
import LandingNav from "./Landing Nav/LandingNav";

const LandingPage = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <LandingNav />
      <LandingBody />
    </div>
  );
};

export default LandingPage;
