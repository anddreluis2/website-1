import Link from "next/link";
import { DiGit } from "react-icons/di";

export const Header: React.FC = () => {
  return (
    <div className="bg-header justify-between flex p-6">
      <div className="w-12">
        <Link className="text-white items-center hover:text-gray" href="/">
          <DiGit size={40} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
