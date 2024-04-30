import ServicesCard from "../components/ServicesCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((services) => (
        <ServicesCard key={services.label} {...services} />
      ))}
    </section>
  );
};

export default Services;
