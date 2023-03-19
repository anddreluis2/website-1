import Link from "next/link";
import { DiGit } from "react-icons/di";

export const Header: React.FC = () => {
  return (
    <div className="bg-header sticky top-0 z-50 flex p-6">
      <div className="w-12 flex">
        <Link className="text-white items-center hover:text-gray" href="#about">
          <DiGit size={40} />
        </Link>
      </div>
      <div className="ml-auto text-white items-center">
        {/* <Link className="hover:text-gray mr-6" href="/">
          About
        </Link>
        <Link className="text-white hover:text-gray" href="/">
          Projects
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
