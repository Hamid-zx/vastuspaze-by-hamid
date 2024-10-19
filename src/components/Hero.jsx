import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 border-neutral-500">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-center my-20"
      >
        <motion.h1
          variants={childVariants}
          className="text-5xl lg:text-[10rem] p-2 uppercase font-bold"
        >
          {HERO_CONTENT.title}
        </motion.h1>
        <motion.p
          variants={childVariants}
          className="lg:mt-6 text-sm lg:text-lg mb-4 text-center font-medium tracking-tighter"
        >
          {HERO_CONTENT.subtitle}
        </motion.p>
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          src={HERO_CONTENT.image}
          className="w-full h-[65vh] object-cover rounded-2xl p-2"
          alt="Hero"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
