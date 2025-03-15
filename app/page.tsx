import { Metadata } from "next";
import UserHome from "./pages/Home/UserHome";

export const metadata: Metadata = {
  title: "Softronixs System Ltd. - Development Lab of Information Technology",
  description:
    "Softronixs System Ltd is a software development company based in Bangladesh that provides a range of IT services to clients in 29+ countries, with a majority of their clients located in Europe and North America. The company is known for its ERP solutions, mobile application development, web development, website design and development, brand design and development, and digital marketing and SEO services. The company's main goal is to develop a sustainable environment for developing countries by building a skilled workforce.",
};

const Home: React.FC = () => {
  return (
    <div>
      <UserHome></UserHome>
    </div>
  );
};

export default Home;
