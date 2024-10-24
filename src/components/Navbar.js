const Navbar = () => {
    return (
      <nav className="bg-green-600 shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-white">Svastha Rasoi</h1>
          <ul className="flex space-x-6">
            <li className="hover:scale-110 transform transition duration-300">
              <a href="/" className="text-white text-lg">Home</a>
            </li>
            <li className="hover:scale-110 transform transition duration-300">
              <a href="/products" className="text-white text-lg">Products</a>
            </li>
            <li className="hover:scale-110 transform transition duration-300">
              <a href="/order" className="text-white text-lg">Order Now</a>
            </li>
            <li className="hover:scale-110 transform transition duration-300">
              <a href="/contact" className="text-white text-lg">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;