import BestSeller from "@/components/layout/best-seller";
import Hero from "@/components/layout/hero";
import LatestCollection from "@/components/layout/latest-collection";
import NewsletterBox from "@/components/layout/news-letter-box";
import OurPolicy from "@/components/layout/our-policy";
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
