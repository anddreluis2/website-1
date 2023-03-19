import { DiGo, DiJsBadge, DiNodejs, DiReact, DiYeoman } from "react-icons/di";
import { FaUserNinja, FaDesktop } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div id="about" className="lg:mt-[390px] bg-header text-white">
        <h1 className="text-exl pt-[46px] items-center gap-3 justify-center flex mb-6">
          About me <FaUserNinja size={26} />
        </h1>
        <div className="flex justify-center">
          <div className="w-[550px] h-full justify-center">
            <h1 className="flex m-auto justify-center text-center">
              25y, software engineer with experience building web applications
              (mostly with typescript) that affect thousands of people daily.{" "}
              <br />
              Currently focused on front-end stacks.
              <br />
              <br /> Passionate about tech, and sports. <br />
              <br /> Currently Systems Analysis and Development student.
            </h1>

            <h2 className="flex mt-20 justify-center gap-3 items-center text-exl mb-6">
              Techs <FaDesktop />
            </h2>
            <ul className="text-center">
              <li className="hover:underline hover:font-black hover:uppercase mt-4 hover:text-gray sm:text-xl">
                <a
                  className="items-center gap-3 flex justify-center"
                  href="https://www.typescriptlang.org/"
                >
                  <DiJsBadge size={26} />
                  Typescript
                </a>
              </li>
              <li className="hover:underline hover:font-black hover:uppercase mt-4 hover:text-gray sm:text-xl">
                <a
                  className="items-center gap-3 flex justify-center"
                  href="https://react.dev/"
                >
                  <DiReact size={32} />
                  ReactJS
                </a>
              </li>
              <li className="hover:underline hover:font-black hover:uppercase mt-4 hover:text-gray sm:text-xl">
                <a
                  className="items-center gap-3 flex justify-center"
                  href="https://nodejs.org/en"
                >
                  <DiNodejs size={32} />
                  NodeJS
                </a>
              </li>
              <li className="hover:underline hover:font-black mb-[40px] hover:uppercase mt-4 hover:text-gray sm:text-xl">
                <a
                  className="items-center gap-3 flex justify-center"
                  href="https://go.dev/"
                >
                  <DiGo size={32} />
                  Golang
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
