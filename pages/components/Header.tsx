import Link from "next/link";
import { DiGit } from "react-icons/di";

export const Header: React.FC = ({}) => {
  return (
    <div className="bg-header w-[100vw] p-6 h-20">
      <Link className="text-white items-center" href="/">
        <DiGit size={40} />
      </Link>
    </div>
  );
};

export default Header;
