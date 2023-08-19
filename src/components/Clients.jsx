import { clients } from "../utils/clients";
import { motion } from "framer-motion";
const Clients = () => {
  return (
    <div className="px-16">
      <motion.h1
        whileInView={{ x: 0, opacity: 100 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-white text-center text-3xl font-medium"
      >
        Our Clients
      </motion.h1>
      <div className="grid place-items-center md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-12 py-12">
        {clients.map((client, id) => (
          <motion.a
            whileInView={{ x: 0, opacity: 100 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ delay: client.delay, duration: 0.5 }}
            className="hover:opacity-80 transition-all"
            href={client.link}
            key={id}
            target="_blank"
          >
            <img
              className="rounded-full w-[80%]"
              src={client.img}
              alt="youtube channel logo"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Clients;
