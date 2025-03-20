import { motion } from "framer-motion";

interface SocialIconProps {
  Icon: React.ElementType; // React Icon component
  link: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primaryWhite text-xl hover:text-primarySky transition duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Icon /> {/* Render React Icon */}
    </motion.a>
  );
};

export default SocialIcon;
