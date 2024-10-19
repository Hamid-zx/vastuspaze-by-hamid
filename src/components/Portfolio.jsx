import { PORTFOLIO_PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section
      className="max-w-7xl mx-auto border-b-2 border-neutral-500"
      id="portfolio"
    >
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl text-center tracking-tight uppercase mb-20">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project) => (
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              key={project.id}
              className="overflow-hidden rounded-3xl mx-4 group relative"
            >
              <img
                src={project.image}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={project.name}
              />
              <div className="absolute inset-0 flex flex-col items-center text-center text-black justify-center opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="mb-2 text-xl font-medium ">{project.name}</h3>
                <p className="mb-12 p-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
