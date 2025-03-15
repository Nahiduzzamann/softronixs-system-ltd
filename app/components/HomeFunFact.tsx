'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "Happy Clients", value: 475 },
  { label: "Project Finished", value: 528 },
  { label: "Our Team", value: 72 },
  { label: "Award Winning", value: 121 },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Counter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const end = value;
      if (start === end) return;
      const totalDuration = 2000;
      const incrementTime = totalDuration / end;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }, [value]);
  
    return <span>{count}+</span>;
  };
  
  export default function HomeFunFact() {
    return (
      <section className="bg-secondaryBlack text-primaryWhite py-16  text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="container mx-auto px-3"
        >
          <p className="text-primaryYellow text-sm uppercase tracking-wider mb-2">Fun Fact</p>
          <h2 className="text-3xl font-bold text-primaryWhite">Our Company by Number</h2>
          <p className="text-primaryGray mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primarySky">
                <Counter value={stat.value} />
              </p>
              <p className="text-primaryGray mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
