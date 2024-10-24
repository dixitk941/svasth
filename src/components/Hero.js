import React from 'react';

const Hero = () => {
  return (
    <section className="bg-green-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-green-800">Healthy, Delicious, Delivered</h1>
      <p className="mt-4 text-lg text-gray-600">Order fresh laddus and dry fruit rolls made with love and health in mind!</p>
      <button className="mt-8 bg-green-600 text-white py-2 px-4 rounded-lg">Order Now</button>
    </section>
  );
};

export default Hero;
