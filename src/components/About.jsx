import { motion } from "framer-motion";
import aboutImage from "../assets/about.webp";

const About = () => {
  return (
    <section
      className="max-w-7xl mx-auto border-b-2 border-neutral-500"
      id="about"
    >
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl text-center tracking-tight uppercase mb-12">
          About
        </h2>
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20 ">
          <div className="mb-8 lg:mb-0">
            <motion.img
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              src={aboutImage}
              className="rounded-xl w-full h-auto"
              alt="About Vastuspaze"
            />
          </div>
          <motion.p whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }} className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
            At VastuSpaze, we believe in transforming houses into dream homes.
            With a passion for design and a commitment to quality, our team of
            skilled professionals has been dedicated to delivering exceptional
            renovation services for over a decade. We specialize in creating
            beautiful, functional spaces that reflect our clients' unique tastes
            and lifestyles. From modern kitchens and luxurious bathrooms to
            serene outdoor living areas and cozy home offices, we bring our
            expertise to every project, ensuring each renovation is tailored to
            meet your specific needs and desires. Our mission is to enhance the
            beauty and functionality of your home, making it a place where you
            can truly thrive.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
