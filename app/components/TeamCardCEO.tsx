import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
const teamMembers = [
  {
    image: "/Images/ceo.jpeg", // Replace with actual image path
    name: "Rokonuzzaman Rony",
    designation: "CEO & Founder",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
];

const TeamCardSEO = () => {
  return (
    <div className="relative bg-[#06142E] py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute left-0 top-10 w-40 h-40 bg-[url('/pattern.svg')] bg-repeat opacity-30"></div>

      <div className="container mx-auto px-3 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Side Content */}
        <motion.div
          className="bg-[#0B1A3D] p-8 rounded-lg text-white max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400 uppercase text-xs font-semibold tracking-wide">
            Team Expansion
          </p>
          <h2 className="text-3xl font-bold text-[#17C3B2] mt-2">
            Awesome People Behind Us
          </h2>
          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            We offer software development and maintenance support for your
            organization. If your organization is planning to scale up the
            development team but contending due to insufficient resources, we
            can build a team according to your organizational needs which will
            remain fully at your disposal.
          </p>
          <button className="mt-6 bg-green-400 hover:bg-green-500 transition px-6 py-3 rounded-md text-[#06142E] font-semibold flex items-center gap-2">
            More Team ➜
          </button>
        </motion.div>

        {/* Right Side - Team Member Card */}
        <div className="flex justify-center mt-10 md:mt-0 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              designation={member.designation}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCardSEO;

interface TeamCardProps {
  image: string;
  name: string;
  designation: string;
  linkedin: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  designation,
  linkedin,
}) => {
  return (
    <div className="relative w-full max-w-[280px] mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Team Member Image */}
      <motion.img
        src={image}
        alt={name}
        className="w-full h-auto object-cover rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      {/* Hover Effect with Name, Designation & LinkedIn */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500 p-4 rounded-lg"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-300">{designation}</p>

        {/* LinkedIn Button */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 bg-primarySky p-2 rounded-full text-white hover:bg-primaryPurple transition duration-300"
        >
          <FaLinkedin className="text-xl" />
        </a>
      </motion.div>
    </div>
  );
};
