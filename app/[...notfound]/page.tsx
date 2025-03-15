import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center md:justify-center  md:h-screen h-[1000px] bg-primaryWhite pt-32 md:pt-0">
      <h1 className="text-7xl font-bold text-primarySky ">404</h1>
      <h2 className="text-2xl font-semibold text-primarySky  md:mt-4 mt-2">
        Page Not Found
      </h2>
      <p className="text-primaryGray mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <div className="flex gap-1 text-primaryPurple items-center hover:scale-110 transition-transform duration-300 mt-4">
          <FaArrowLeft></FaArrowLeft>
          <div className=" font-bold">Go Home</div>
        </div>
      </Link>
    </div>
  );
};

export default NotFoundPage;
