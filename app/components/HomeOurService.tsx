'use client'
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Software Development',
    description: 'Creating computer programs to solve specific problems and meet user needs.',
    // icon: '/icons/software.svg',
  },
  {
    title: 'Mobile Application',
    description: 'Developing software applications specifically designed to run on mobile devices.',
    // icon: '/icons/mobile.svg',
  },
  {
    title: 'Web Application',
    description: 'Applications accessed through a web browser for various tasks and information.',
    // icon: '/icons/web.svg',
  },
  {
    title: 'Web Design',
    description: 'Creating visually appealing and user-friendly websites.',
    // icon: '/icons/design.svg',
  },
  {
    title: 'Logo & Brand Design',
    description: 'Creating unique visual identities representing company values and image.',
    // icon: '/icons/brand.svg',
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Promoting products and services via online channels.',
    // icon: '/icons/marketing.svg',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-secondaryBlack text-primaryWhite py-16 px-4 md:px-12">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-primarySky"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-primaryGray mt-2 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Softronixs is a Top Rated Software Development & Digital Marketing Company.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-primaryBlack p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <p>SVG</p>
            <h3 className="text-xl font-semibold text-primarySky mb-2">{service.title}</h3>
            <p className="text-primaryGray">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
