"use client";
import { motion } from "framer-motion";
import { ContactInfo } from "./type";

const ContactCard: React.FC<{ contact: ContactInfo }> = ({ contact }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg shadow-lg ${contact.bgColor || "bg-secondaryBlack"}`}
    >
      <div className="flex flex-col items-center text-center text-primaryWhite">
        <div className="text-primarySky text-3xl">{contact.icon}</div>
        <h3 className="text-lg font-semibold mt-3">{contact.title}</h3>
        {contact.details.map((detail, index) => (
          <p key={index} className="text-primaryGray text-sm mt-1">
            {detail}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactCard;
