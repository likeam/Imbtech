import React from "react";
import { motion } from "framer-motion";

const AboutUs = ({ setActiveSection }) => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Leadership team data
  const leadershipTeam = [
    {
      name: "Farooq Ahmed",
      position: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "15+ years of experience in digital transformation and business strategy.",
    },
    {
      name: "Michael Chen",
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Expert in emerging technologies and software architecture with 12 years in tech innovation.",
    },
    {
      name: "Elena Rodriguez",
      position: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Digital marketing strategist with a track record of successful brand campaigns.",
    },
    {
      name: "David Kim",
      position: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Operations expert specializing in process optimization and efficiency.",
    },
  ];

  // Services data
  const services = [
    {
      title: "Business & Financial Services",
      icon: "💼",
      description:
        "We provide comprehensive business consulting and financial advisory services to help organizations optimize their operations, improve profitability, and achieve sustainable growth through data-driven strategies.",
      features: [
        "Financial Planning",
        "Business Strategy",
        "Risk Management",
        "Market Analysis",
      ],
    },
    {
      title: "Marketing & Digital Presence",
      icon: "📱",
      description:
        "Our digital marketing experts create compelling online experiences that drive engagement, build brand loyalty, and convert visitors into customers through targeted campaigns and SEO optimization.",
      features: [
        "Brand Strategy",
        "Social Media Marketing",
        "Content Creation",
        "SEO & Analytics",
      ],
    },
    {
      title: "Technology Innovation",
      icon: "🚀",
      description:
        "Leveraging cutting-edge technologies like AI, machine learning, and blockchain to create innovative solutions that solve complex business challenges and drive digital transformation.",
      features: [
        "AI Solutions",
        "Web & App Development",
        "Cloud Integration",
        "Data Analytics",
      ],
    },
    {
      title: "Operations & Strategy",
      icon: "📊",
      description:
        "We help businesses streamline their operations, develop effective growth strategies, and implement processes that enhance productivity and competitive advantage in their markets.",
      features: [
        "Process Optimization",
        "Supply Chain Management",
        "Strategic Planning",
        "Performance Metrics",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Our Story Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="mb-20"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Our Story
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-amber-500 mx-auto mb-12"
          ></motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div variants={fadeIn} className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6">
                From Humble Beginnings to Digital Excellence
              </h3>
              <p className="text-gray-700 mb-4">
                Founded in 2010, DigitalAgency started as a small team of
                passionate developers and designers with a vision to transform
                how businesses leverage digital technology. What began as a
                modest startup has grown into a full-service digital agency
                serving clients across various industries.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey hasn't been without challenges. We've navigated
                technological shifts, economic changes, and evolving client
                needs. Each challenge has strengthened our resolve and refined
                our approach to delivering exceptional digital solutions.
              </p>
              <p className="text-gray-700">
                Today, we're proud to have helped over 500 businesses transform
                their digital presence, streamline operations, and achieve their
                strategic goals through innovative technology solutions.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="bg-green-100 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    12+
                  </div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="bg-purple-100 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    95%
                  </div>
                  <div className="text-gray-700">Client Retention</div>
                </div>
                <div className="bg-yellow-100 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-700">Team Members</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Mission Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="mb-20"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Our Mission
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-amber-500 mx-auto mb-12"
          ></motion.div>

          <div className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeIn} className="text-6xl mb-8">
              💡
            </motion.div>
            <motion.h3
              variants={fadeIn}
              className="text-2xl font-bold mb-6 text-amber-500"
            >
              Empowering businesses through innovative digital solutions
            </motion.h3>
            <motion.p variants={fadeIn} className="text-xl text-gray-700 mb-6">
              We believe that technology should be an enabler, not a barrier.
              Our mission is to demystify digital transformation and make
              cutting-edge solutions accessible to businesses of all sizes.
            </motion.p>
            <motion.p variants={fadeIn} className="text-gray-700">
              Through collaboration, innovation, and a relentless focus on
              results, we help our clients navigate the complexities of the
              digital landscape and emerge as leaders in their respective
              industries.
            </motion.p>
          </div>
        </motion.div>

        {/* What We Do Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="mb-20"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            What We Do
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-amber-500 mx-auto mb-12"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="text-gray-600">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <svg
                        className="w-4 h-4 text-blue-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Leadership Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Our Leadership
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-amber-500 mx-auto mb-12"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div key={index} variants={fadeIn} className="text-center">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-amber-500 opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white p-4">
                      <p>{member.description}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-amber-500">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
