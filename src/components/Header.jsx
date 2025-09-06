const { useState, useEffect, useRef } = React;
const { motion } = window.framerMotion;

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">IMBED Tech</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              About Us
            </a>

            <div className="dropdown relative">
              <button className="text-gray-700 hover:text-indigo-600 font-medium flex items-center">
                Services <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div className="dropdown-menu absolute hidden mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
                <a
                  href="#services"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Backoffice Support
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Business Consultant
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Technology Solution
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Digital Marketing
                </a>
              </div>
            </div>

            <a
              href="#portfolio"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Portfolio
            </a>
            <a
              href="#corporate"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Corporate Giving
            </a>
            <a
              href="#blogs"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Blogs
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="tel:+1234567890"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition duration-300"
            >
              Let's Talk: (123) 456-7890
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <a
              href="#home"
              className="block py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              About Us
            </a>

            <div className="px-4 py-2">
              <div className="font-medium text-gray-700">Services</div>
              <div className="pl-4 mt-1">
                <a
                  href="#services"
                  className="block py-2 text-sm text-gray-600 hover:text-indigo-600"
                >
                  Backoffice Support
                </a>
                <a
                  href="#services"
                  className="block py-2 text-sm text-gray-600 hover:text-indigo-600"
                >
                  Business Consultant
                </a>
                <a
                  href="#services"
                  className="block py-2 text-sm text-gray-600 hover:text-indigo-600"
                >
                  Technology Solution
                </a>
                <a
                  href="#services"
                  className="block py-2 text-sm text-gray-600 hover:text-indigo-600"
                >
                  Digital Marketing
                </a>
              </div>
            </div>

            <a
              href="#portfolio"
              className="block py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              Portfolio
            </a>
            <a
              href="#corporate"
              className="block py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              Corporate Giving
            </a>
            <a
              href="#blogs"
              className="block py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              Blogs
            </a>
            <a
              href="#contact"
              className="block py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              Contact
            </a>
            <a
              href="tel:+1234567890"
              className="block py-2 px-4 text-indigo-600 font-medium"
            >
              Let's Talk: (123) 456-7890
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
