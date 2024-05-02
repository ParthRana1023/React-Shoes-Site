import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);
  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="relative dark:bg-neutral-900">
        <Navbar darkMode={darkMode} />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <button
          className="fixed bg-coral-red text-neutral-100 right-16 bottom-16 rounded-full p-3 font-bold"
          onClick={toggleMode}
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffers />
        </section>
        <section className="bg-pale-blue dark:bg-neutral-800 padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
