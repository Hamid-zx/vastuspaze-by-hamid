import { REVIEWS } from "../constants";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <section
      className="max-w-7xl mx-auto border-b-2 border-neutral-500"
      id="reviews"
    >
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          Reviews
        </h2>
        <motion.p whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }} className="max-w-2xl text-lg mb-12 text-center mx-auto">
          {REVIEWS.text}
        </motion.p>
        <div className="flex flex-wrap justify-center">
          {REVIEWS.reviews.map((review, index) => (
            <motion.div whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
              key={index}
              className="mt-10 flex flex-col justify-center rounded-2xl p-10 mx-2 max-w-xs border border-neutral-400"
            >
              <p className="mb-4">{review.review}</p>
              <div className="flex items-center mt-4">
                <img src={review.image} alt={review.name} className="h-12 w-12 rounded-full mr-4"/>
                <div>
                  <p className="text-sm font-bold">{review.name}</p>
                  <p className="text-sm text-neutral-400">{review.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
