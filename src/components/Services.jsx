import { SERVICES_CONTENT } from "../constants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section
      className="max-w-7xl mx-auto border-b-2 border-neutral-500"
      id="services"
    >
      <div className="my-20">
        <h2 className="text-center text-xl lg:text-3xl tracking-tight mb-20">
          Our Home Renovation Services
        </h2>
        {SERVICES_CONTENT.map((service, index) => (
          <div key={index} className="mb-12 mx-4 flex flex-col lg:flex-row">
            <div
              className={`lg:w-1/2 mb-4 lg:mb-0 ${
                index % 2 === 0 ? "" : "lg:order-2"
              }`}
            >
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                src={service.image}
                className="w-full h-auto rounded-lg object-cover"
                alt={service.title}
              />
            </div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 }}
              className={`lg:w-1/2 flex flex-col ${
                index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
              }`}
            >
              <h3 className="text-xl lg:text-2xl font-medium mb-2">
                {service.title}
              </h3>
              <p className="mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9">
                {service.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
