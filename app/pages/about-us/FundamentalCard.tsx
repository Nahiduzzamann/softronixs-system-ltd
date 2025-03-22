import { motion } from "framer-motion";

interface FundamentalCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FundamentalCard: React.FC<FundamentalCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <motion.div
      className="bg-secondaryBlack p-6 rounded-lg text-center shadow-lg border border-primaryGray hover:border-primaryWhite transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-center mb-4 text-primarySky text-4xl">
        {icon}
      </div>
      <h3 className="text-primaryWhite text-xl font-semibold">{title}</h3>
      <p className="text-primaryGray mt-2 text-sm">{description}</p>
    </motion.div>
  );
};

export default FundamentalCard;
