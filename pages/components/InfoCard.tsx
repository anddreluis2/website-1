import { FaReact } from "react-icons/fa";

export const InfoCard: React.FC = ({}) => {
  return (
    <>
      <div className="bg-background w-1/3 justify-center m-auto mt-[200px]">
        <h1 className="text-white p-6 pb-4 justify-center flex text-exl">
          Andre Luis de Oliveira Andrade
        </h1>
        <h1 className="text-white justify-center gap-2 flex">
          Frontend Engineer <FaReact size={26} />
        </h1>
      </div>
    </>
  );
};
