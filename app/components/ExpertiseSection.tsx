import { motion } from "framer-motion";

// Sample award logos
const awardLogos = [
  { image: "/Images/company.png", alt: "Award 1" },
  { image: "/Images/company.png", alt: "Award 2" },
  { image: "/Images/company.png", alt: "Award 3" },
  { image: "/Images/company.png", alt: "Award 4" },
];

const ExpertiseSection = () => {
  return (
    <div className="bg-secondaryBlack py-12">
      <div className="container mx-auto p-3 text-center">
        {/* Section Title */}
        <motion.h3
          className="text-primarySky uppercase text-sm font-semibold tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          OUR ACHIEVEMENTS
        </motion.h3>
        <motion.h2
          className="text-primaryWhite text-3xl font-bold mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Expertise
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-primaryGray text-lg mt-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          With more than 5 years of experience, we are recognized as one of the
          leading development companies in Bangladesh. We provide high-quality
          services, staying ahead with the latest technologies.
        </motion.p>

        {/* Award Logos - Horizontal Scroll */}
        <motion.div
          className="overflow-hidden mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            className="flex space-x-10 w-max mx-auto"
            drag="x"
            dragConstraints={{ left: -200, right: 200 }}
          >
            {awardLogos.map((award, index) => (
              <Award key={index} image={award.image} alt={award.alt} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpertiseSection;

interface AwardProps {
  image: string;
  alt: string;
}

const Award: React.FC<AwardProps> = ({ image, alt }) => {
  return (
    <div className="flex-shrink-0 w-32">
      <img src={image} alt={alt} className="w-full h-auto object-contain" />
    </div>
  );
};
