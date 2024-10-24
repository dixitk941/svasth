import React from 'react';
// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <section className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center">Our Healthy Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <ProductCard
            name="Dry Fruit Laddu"
            description="Healthy laddus made with a mix of premium dry fruits."
            price="299"
            image="/images/laddu.jpg"
          />
          <ProductCard
            name="Dry Fruit Rolls"
            description="Delicious rolls packed with the goodness of dry fruits."
            price="349"
            image="/images/rolls.jpg"
          />
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
