import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold dark:text-neutral-100">
          We Provide You
          <br />
          <span className="text-coral-red inline-block mt-3">
            Super Quality
          </span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-neutral-300">
          Experience unparalleled quality with our football shoes. Crafted with
          precision engineering and premium materials, they offer unrivaled
          durability, comfort, and performance for every match.
        </p>
        <p className="mt-4 lg:max-w-lg info-text dark:text-neutral-300">
          We pride ourselves on delivering football shoes of exceptional
          quality. With rigorous quality control and premium craftsmanship, we
          ensure every pair exceeds your expectations.
        </p>

        <div className="mt-11">
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center object-contain">
        <img src={shoe8} alt="Shoe" width={570} height={522} />
      </div>
    </section>
  );
};

export default SpecialOffers;
