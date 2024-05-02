import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold dark:text-neutral-100">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-neutral-300">
          Unlock unbeatable deals on football boots! Explore our exclusive
          offers and discounts, ensuring you get top-quality footwear at prices
          that score big.
        </p>
        <p className="mt-4 lg:max-w-lg info-text dark:text-neutral-300">
          Don't miss out on limited-time promotions and bundle offers. Elevate
          your game without breaking the bank, only at our football shoe haven.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="On Sale" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
