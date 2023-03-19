import Head from "next/head";
import { useState, useEffect } from "react";
import { FaCaretRight, FaGithub } from "react-icons/fa";
import { RepositoryItemProps } from "../../types";

export default function Projects() {
  const [repositories, setRepositories] = useState<RepositoryItemProps[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/anddreluis2/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="mt-[200px] sm:text-center bg-background text-white">
      <h1 className="font-bold sm:justify-center text-xl m-10 flex mt-8">
        <a
          target="_blank"
          href="https://github.com/anddreluis2?tab=repositories"
          className="flex hover:text-gray md:text-exl esm:text-exl sm:text-exl gap-3 items-center mb-2"
          rel="noreferrer"
        >
          <FaGithub /> Repositories list
        </a>
      </h1>

      <ul className="sm:mx-auto text-center sm:w-[300px]">
        {repositories.map((repo) => {
          return (
            <li
              className="hover:underline hover:font-black hover:uppercase mt-4 hover:text-gray sm:text-xl"
              key={repo.name}
            >
              <a className="gap-2 items-center" href={repo.html_url}>
                {repo.name}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
