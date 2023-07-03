"use client";
import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Teach Density"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            error ipsam? Sit, quia deserunt laboriosam iste consequatur fuga at"
          listItem={["React.js", "Tailwind CSS", "Express.js"]}
          link="https://teach-density.web.app/"
        />
        <ArchiveCard
          title="Wedding-Shots"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            error ipsam? Sit, quia deserunt laboriosam iste consequatur fuga at"
          listItem={["React.js", "Tailwind CSS", "Firebase"]}
          link="https://wedding-shots-5055a.web.app/"
        />
        <ArchiveCard
          title="Classic-Mobile"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            error ipsam? Sit, quia deserunt laboriosam iste consequatur fuga at"
          listItem={["React.js", "Tailwind CSS", "Firebase"]}
          link="https://classic-mobile.web.app/"
        />
        <ArchiveCard
          title="Fitness Club"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            error ipsam? Sit, quia deserunt laboriosam iste consequatur fuga at"
          listItem={["React.js", "Tailwind CSS", "Express.js"]}
          link="https://fitnessclub100.netlify.app/"
        />
        <ArchiveCard
          title="Ema John"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            error ipsam? Sit, quia deserunt laboriosam iste consequatur fuga at"
          listItem={["React.js", "Tailwind CSS", "Express.js"]}
          link="https://ema-john-simple-ef4e2.web.app/"
        />
        <ArchiveCard
          title="Genius car"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            error ipsam? Sit, quia deserunt laboriosam iste consequatur fuga at"
          listItem={["React.js", "Tailwind CSS", "Express.js"]}
          link="https://genius-car-b0a4d.web.app/"
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Dragon News"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            error ipsam? Sit, quia deserunt laboriosam iste consequatur fuga at"
                listItem={["React.js", "Tailwind CSS", "Express.js"]}
                link="https://dragon-news-c12f1.web.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Doctors Portal"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            error ipsam? Sit, quia deserunt laboriosam iste consequatur fuga at"
                listItem={["React.js", "Tailwind CSS", "Express.js"]}
                link="https://doctors-portal-6ab1d.web.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Quizer"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            error ipsam? Sit, quia deserunt laboriosam iste consequatur fuga at"
                listItem={["React.js", "Tailwind CSS", "Express.js"]}
                link="https://assignment-9-nine.netlify.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="YouTube Clone"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            error ipsam? Sit, quia deserunt laboriosam iste consequatur fuga at"
                listItem={["React.js", "Tailwind CSS", "Express.js"]}
                link="https://razibul-islam.github.io/youtube/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="Panda Project"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            error ipsam? Sit, quia deserunt laboriosam iste consequatur fuga at"
                listItem={["HTML", "CSS", "Bootstrap"]}
                link="https://razibul-islam.github.io/Panda-project/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="Nike-React"
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            error ipsam? Sit, quia deserunt laboriosam iste consequatur fuga at"
                listItem={["HTML", "CSS", "Tailwind"]}
                link="https://razibul-islam.github.io/Nike-React/"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
