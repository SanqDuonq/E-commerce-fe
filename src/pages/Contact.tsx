import { assets } from "@/assets/assets";
import NewsletterBox from "@/components/layout/news-letter-box";
import Title from "@/components/layout/title";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            806 Quốc lộ 22 <br /> Ấp Mỹ Hòa 3, Hóc Môn, Ho Chi Minh city
          </p>
          <p className="text-gray-500">
            Tel: (+89) 123 456 789 <br />
            Email: admin@forever.com
          </p>
          <p className="font-semibold text-x1 text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
