import BestSeller from "@/components/layout/BestSeller";
import Hero from "@/components/layout/Hero";
import LatestCollection from "@/components/layout/LatestCollection";
import NewsletterBox from "@/components/layout/NewsletterBox";
import OurPolicy from "@/components/layout/OurPolicy";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
