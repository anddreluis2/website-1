import { FaReact } from "react-icons/fa";

export const InfoCard: React.FC = ({}) => {
  return (
    <>
      <div className="bg-background w-full justify-center m-auto mt-[200px]">
        <h1 className="text-white p-6 pb-4 justify-center flex sm:text-exl text-exl text-center sm:text-center">
          Andre Luis de Oliveira Andrade
        </h1>
        <h1 className="text-white justify-center gap-2 flex text-center">
          Frontend Engineer <FaReact size={26} />
        </h1>
      </div>
    </>
  );
};

export default InfoCard;
