import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Services = ({ setActiveSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      icon: "💻",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "User-centered designs that enhance engagement, improve conversion rates, and create memorable digital experiences.",
      image:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      icon: "🎨",
      color: "from-purple-500 to-purple-700",
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "Data-driven strategies to increase your online visibility, engage your audience, and grow your business effectively.",
      image:
        "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
      icon: "📈",
      color: "from-green-500 to-green-700",
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      description:
        "Complete online store development with secure payment integration, inventory management, and seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      icon: "🛒",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      id: 5,
      title: "Brand Strategy",
      description:
        "Comprehensive branding solutions to establish your unique market position and create lasting customer connections.",
      image:
        "https://plus.unsplash.com/premium_photo-1683133924436-a7afbdf8cd25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "🏆",
      color: "from-red-500 to-red-700",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  // Calculate styles for each card based on position
  const calculateCardStyle = (index) => {
    const position = (index - currentSlide + services.length) % services.length;

    if (position === 0) {
      // Center card
      return {
        x: 0,
        scale: 1,
        opacity: 1,
        zIndex: 30,
        rotateY: 0,
        filter: "brightness(1)",
      };
    } else if (position === 1 || position === services.length - 1) {
      // Adjacent cards
      const direction = position === 1 ? 1 : -1;
      return {
        x: direction * 300,
        scale: 0.65,
        opacity: 0.8,
        zIndex: 20,
        rotateY: direction * -25,
        filter: "brightness(0.8)",
      };
    } else if (position === 2 || position === services.length - 2) {
      // Next adjacent cards
      const direction = position === 2 ? 1 : -1;
      return {
        x: direction * 500,
        scale: 0.55,
        opacity: 0.5,
        zIndex: 10,
        rotateY: direction * -35,
        filter: "brightness(0.6)",
      };
    } else {
      // Far cards
      const direction = position < currentSlide ? 1 : -1;
      return {
        x: direction * 700,
        scale: 0.5,
        opacity: 0.2,
        zIndex: 5,
        rotateY: direction * -45,
        filter: "brightness(0.4)",
      };
    }
  };

  return (
    <section
      id="services"
      className="relative py-20 bg-gray-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2000ms" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-amber-500 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-amber-500 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your
            business thrive online.
          </p>
        </motion.div>

        {/* Desktop 3D Carousel */}
        <div className="hidden md:block relative h-[600px] perspective-1000">
          {services.map((service, index) => {
            const style = calculateCardStyle(index);

            return (
              <motion.div
                key={service.id}
                initial={false}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  opacity: style.opacity,
                  rotateY: style.rotateY,
                  filter: style.filter,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  opacity: { duration: 0.5 },
                }}
                className="absolute top-0 left-1/2 w-[800px] h-[450px] origin-center"
                style={{
                  zIndex: style.zIndex,
                  translateX: "-50%",
                }}
              >
                <div className="relative w-full h-full group transform-style-preserve-3d">
                  {/* Service Card */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105">
                    {/* Service Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-80`}
                    ></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
                      <div className="text-6xl mb-4">{service.icon}</div>
                      <h3 className="text-3xl font-bold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-xl mb-6 opacity-90">
                        {service.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="self-start bg-amber-500 text-gray-900 font-semibold py-3 px-8 rounded-full"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentSlide(
                (currentSlide - 1 + services.length) % services.length
              )
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-4 shadow-lg hover:bg-opacity-30 transition-all"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() =>
              setCurrentSlide((currentSlide + 1) % services.length)
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-4 shadow-lg hover:bg-opacity-30 transition-all"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-white w-8"
                    : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-80`}
                ></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                </div>
              </div>
              <div className="bg-gray-800 p-6">
                <p className="text-gray-300 mb-4">{service.description}</p>
                <button className="text-white font-semibold flex items-center group">
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add custom CSS for 3D effects */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Services;
