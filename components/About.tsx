import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { profileImage } from "@/public";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello there! I am Md. Razibul, a passionate MERN Stack web developer
            with a strong foundation in frontend and backend technologies. My
            journey into the world of web development began during my diploma
            studies, where I quickly discovered my love for crafting seamless,
            interactive, and efficient web experiences.
          </p>
          <p>
            I specialize in the MERN Stack, which stands for
            <span className="text-textGreen">
              MongoDB, Express.js, React, and Node.js. With MongoDB as my
              preferred NoSQL database
            </span>
            , I efficiently store and manage data, while Express.js enables me
            to build robust and scalable backend APIs. When it comes to frontend
            development, I turn to React to create stunning user interfaces with
            its component-based architecture and reactivity. And on the{" "}
            <span className="text-textGreen">server side, Node.js</span>{" "}
            empowers me to build fast and event-driven applications, ensuring a
            smooth user experience.
          </p>
          <p>
            As a MERN Stack web developer, my journey has just begun. I look
            forward to taking on more challenging projects, pushing the
            boundaries of what possible in web development, and contributing to
            the ever-growing community of developers. My ultimate goal is to
            create meaningful, impactful, and innovative web applications that
            make a positive difference in people lives.
          </p>
          <p>Here are a few technologies i have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Javascript (ES6)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              REST API
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>

            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TailwindCSS
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImage}
                alt="Profile Image"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex  w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
