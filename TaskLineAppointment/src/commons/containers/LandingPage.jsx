import { Hero } from "@/commons/components";
import React from "react";

const LandingPage = () => {
  const DUMMY_BANNER = "https://www.acftechnologies.com/hubfs/Blogs%20English/Schedule_your_Appointment_Scotiabank_ACFTechnologies_bl_usa_en.png#keepProtocol";

  return (
    <div className="landing-page">
      <Hero banner={DUMMY_BANNER} />
    </div>
  );
};

export default LandingPage;
