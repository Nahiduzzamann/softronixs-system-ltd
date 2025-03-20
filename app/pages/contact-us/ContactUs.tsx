"use client";
import { FaEnvelope, FaHeadset, FaMapMarkerAlt } from "react-icons/fa";
import ContactCard from "./ContactCard";
import { ContactInfo } from "./type";

const contactData: ContactInfo[] = [
  {
    id: 1,
    title: "Email Us",
    icon: <FaEnvelope />,
    details: ["info@sofranixs.com"],
  },
  {
    id: 2,
    title: "Customer Support",
    icon: <FaHeadset />,
    details: [
      "+1 (201) 554-4024 (USA)",
      "+8801968 696969",
      "+8801571 744478 (WhatsApp)",
    ],
    bgColor: "bg-gradient-to-r from-primarySky to-primaryGreen",
  },
  {
    id: 3,
    title: "Headquarters",
    icon: <FaMapMarkerAlt />,
    details: ["9126 219th St, Queens Village, New York 11428, U.S"],
  },
  {
    id: 4,
    title: "Dhaka Office",
    icon: <FaMapMarkerAlt />,
    details: ["House 4, Road 20, Nikunja 2, Dhaka - 1229, Bangladesh"],
  },
  {
    id: 5,
    title: "Khulna Office",
    icon: <FaMapMarkerAlt />,
    details: ["252/3 Ka, Sher-e-Bangla Road, Khulna - 9100, Bangladesh"],
  },
  {
    id: 6,
    title: "Global Address",
    icon: <FaMapMarkerAlt />,
    details: ["FreeZon FZC, Dubai, UAE"],
  },
];

const ContactUs = () => {
  return (
    <section className="bg-primaryBlack py-10 px-6">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-primaryWhite text-center text-2xl font-bold mb-6">
          Contact Us
        </h2>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {contactData.slice(0, 2).map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {contactData.slice(2).map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
