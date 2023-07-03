import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Facebook from "./Works/Facebook";
import Google from "./Works/Google";
import Amazon from "./Works/Amazon";
import Microsoft from "./Works/Microsoft";
import Apple from "./Works/Apple";

const Experience = () => {
  const [workFacebook, setWorkFacebook] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);
  const [workMicrosoft, setWorkMicrosoft] = useState(false);
  const [workApple, setWorkApple] = useState(false);

  const handleFacebook = () => {
    setWorkFacebook(true);
    setWorkGoogle(false);
    setWorkAmazon(false);
    setWorkMicrosoft(false);
    setWorkApple(false);
  };
  const handleGoogle = () => {
    setWorkFacebook(false);
    setWorkGoogle(true);
    setWorkAmazon(false);
    setWorkMicrosoft(false);
    setWorkApple(false);
  };
  const handleAmazon = () => {
    setWorkFacebook(false);
    setWorkGoogle(false);
    setWorkAmazon(true);
    setWorkMicrosoft(false);
    setWorkApple(false);
  };
  const handleMicrosoft = () => {
    setWorkFacebook(false);
    setWorkGoogle(false);
    setWorkAmazon(false);
    setWorkMicrosoft(true);
    setWorkApple(false);
  };
  const handleApple = () => {
    setWorkFacebook(false);
    setWorkGoogle(false);
    setWorkAmazon(false);
    setWorkMicrosoft(false);
    setWorkApple(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerXs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I Have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleFacebook}
            className={`${
              workFacebook
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Facebook
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Amazon
          </li>
          <li
            onClick={handleMicrosoft}
            className={`${
              workMicrosoft
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Microsoft
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Apple
          </li>
        </ul>
        {workFacebook && <Facebook />}
        {workGoogle && <Google />}
        {workAmazon && <Amazon />}
        {workMicrosoft && <Microsoft />}
        {workApple && <Apple />}
      </div>
    </section>
  );
};

export default Experience;
