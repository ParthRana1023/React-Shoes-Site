import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Boots
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Elevate your performance with our collection of popular football
          boots. From Nike to Adidas to Puma, discover top-quality designs for
          agility, speed, and precision on the pitch
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:mid-cols-2 grid-cols-1 sm:gap4 gap-14">
        {products.map((products) => (
          <PopularProductCard key={products.name} {...products} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
