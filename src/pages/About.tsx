import { assets } from "@/assets/assets";
import NewsletterBox from "@/components/layout/news-letter-box";
import Title from "@/components/layout/title";

const About = () => {
  return (
    <div>
      <div className="text-2xl tex-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            "We were founded with the mission of bringing innovation to the way
            people select and purchase furniture. Our journey began with a
            simple idea: to create a platform where customers can easily
            discover, explore, and own high-quality furniture from the comfort
            of their homes."
          </p>
          <p>
            "Since our launch, we have worked tirelessly to curate a diverse
            collection of furniture that meets every style and need. From
            luxurious sofas and modern dining tables to unique decorative
            pieces, we are committed to offering you the perfect choices from
            trusted brands and suppliers."
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at <span className="text-nowrap">SNL</span> is to
            inspire and empower our customers to create homes they love. We're
            dedicated to offering a curated selection of high-quality furniture
            and decor that reflects individual style and enhances everyday
            living. From discovering the perfect piece to seamless delivery and
            assembly, we strive to provide an exceptional experience that brings
            your dream home to life.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure its meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easy
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            WOur team of dedicated professionals is here to assist you the way,
            ensuring
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
