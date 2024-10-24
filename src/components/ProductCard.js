import React from 'react';

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-2xl mt-2 font-semibold">{name}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-green-600 mt-2 font-bold">₹{price}</p>
      <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
