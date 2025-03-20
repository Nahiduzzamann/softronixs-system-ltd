'use client'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import SocialIcon from "./SocialIcon";

const socialLinks = [
  { icon: FaFacebookF, link: "https://facebook.com" },
  { icon: FaInstagram, link: "https://instagram.com" },
  { icon: FaTwitter, link: "https://twitter.com" },
  { icon: FaLinkedinIn, link: "https://linkedin.com" },
  { icon: FaWhatsapp, link: "https://whatsapp.com" },
  { icon: FaTelegramPlane, link: "https://telegram.org" },
];

const SocialMediaSection = () => {
  return (
    <div className="bg-secondaryBlack py-8">
      <div className="container mx-auto p-3 text-center">
        {/* Title */}
        <h2 className="text-primarySky text-xl font-semibold mb-4">Our Social Media</h2>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map((item, index) => (
            <SocialIcon key={index} Icon={item.icon} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
