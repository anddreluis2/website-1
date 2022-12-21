import router from "next/router";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

export const SocialCard: React.FC = ({}) => {
  return (
    <>
      <div className="bg-background w-1/3 justify-center gap-3 flex text-white m-auto mt-[80px]">
        <a
          className="hover:cursor-pointer"
          href={"https://api.whatsapp.com/send?phone=41998614302&text=Hello!"}
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp size={28} />
        </a>

        <a
          className="hover:cursor-pointer"
          href={"https://github.com/anddreluis2"}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={28} />
        </a>

        <a
          className="hover:cursor-pointer"
          href={"https://www.linkedin.com/in/andreluisdeoliveiraandrade/"}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn size={28} />
        </a>

        <a
          className="hover:cursor-pointer"
          href={"https://twitter.com/anddreluis_"}
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={28} />
        </a>
      </div>
    </>
  );
};

export default SocialCard;
