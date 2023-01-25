import { FaStar } from "react-icons/fa";

export interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
  };
}

export function RepostoryItem(props: RepositoryItemProps) {
  return (
    <div className="flex justify-center">
      <li className="grid text-center">
        <strong className="mt-6 text-xl">{props.repository?.name}</strong>
        <p className="mt-2 items-center flex justify-center gap-2">
          {props.repository?.stargazers_count || "No stars found"}{" "}
          {props.repository?.stargazers_count ? <FaStar /> : ""}
        </p>

        <button className="border rounded-lg mt-2 w-[150px] justify-center flex m-auto h-12 items-center">
          <a target="_blank" href={props.repository?.html_url} rel="noreferrer">
            Acessar repositório
          </a>
        </button>
      </li>
    </div>
  );
}
