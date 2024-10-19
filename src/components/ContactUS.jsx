import { RiMailLine, RiMapLine, RiPhoneLine } from "@remixicon/react";
import { CONTACT_INFO } from "../constants";
import { motion } from "framer-motion";

const ContactUS = () => {
  return (
    <div
      className="max-w-7xl mx-auto border-b-2 border-neutral-500"
      id="contact"
    >
      <div className="my-20">
        <h2 className="text-center text-xl lg:text-3xl tracking-tight uppercase mb-12">
          Contact Us
        </h2>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-center mb-12 text-lg mx-auto"
        >
          {CONTACT_INFO.text}
        </motion.p>
        <div className="flex flex-col lg:flex-row justify-around mx-4">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="flex mb-8 lg:mb-0"
          >
            <RiPhoneLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.phone.label}
              </p>
              <p className="text-neutral-400">{CONTACT_INFO.phone.value}</p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="flex mb-8 lg:mb-0"
          >
            <RiMailLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.email.label}
              </p>
              <p className="text-neutral-400">{CONTACT_INFO.email.value}</p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="flex mb-8 lg:mb-0"
          >
            <RiMapLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.address.label}
              </p>
              <p className="text-neutral-400">{CONTACT_INFO.address.value}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
