import { FaStar } from "react-icons/fa";
import { RepositoryItemProps } from "../../types";

export function RepostoryItem(props: any) {
  return (
    <div className="w-[300px] bg-background m-auto">
      <div className="bg-background">
        <li className="flex mb-4">
          <a
            className="hover:text-gray"
            target="_blank"
            href={props?.repository?.html_url}
            rel="noreferrer"
          >
            <strong className="mt-6 underline text-xl">
              {props?.repository?.name}
            </strong>
          </a>
        </li>
      </div>
    </div>
  );
}
