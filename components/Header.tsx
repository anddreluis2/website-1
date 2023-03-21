import Link from "next/link";
import { DiGit } from "react-icons/di";
import DropdownMenu from "./DropdownMenu";

export const Header: React.FC = () => (
  <div className="bg-header sticky top-0 z-50 flex p-6">
    <div className="w-12 flex">
      <Link className="text-white hover:text-gray" href="">
        <DiGit size={40} />
      </Link>
    </div>

    <div className="ml-auto my-auto text-white">
      <DropdownMenu />
      {/* <Link className="hover:text-gray mr-6" href="/">
          About
        </Link>
        <Link className="text-white hover:text-gray" href="/">
          Projects
        </Link> */}
    </div>
  </div>
);

export default Header;
