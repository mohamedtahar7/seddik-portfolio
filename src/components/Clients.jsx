import { clients } from "../utils/clients";

const Clients = () => {
  return (
    <div className="px-16">
      <h1 className="text-white text-center text-3xl font-medium">
        Our Clients
      </h1>
      <div className="grid place-items-center md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-12 py-12">
        {clients.map((client, id) => (
          <a
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Clients;
