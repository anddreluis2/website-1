import Head from "next/head";
import { useState, useEffect } from "react";
import { FaCaretRight, FaDollarSign, FaGithub } from "react-icons/fa";
import { Header } from "../../components";
import { RepositoryItemProps } from "../../types";

export default function Projects() {
  const [repositories, setRepositories] = useState<RepositoryItemProps[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/anddreluis2/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="w-full bg-background text-white">
      <Head>
        <title>Projetos Github</title>
      </Head>
      <Header />

      <h1 className="font-bold text-exl justify-center flex mt-8">
        <a
          target="_blank"
          href="https://github.com/anddreluis2?tab=repositories"
          className="flex hover:text-gray gap-3 items-center mb-2"
          rel="noreferrer"
        >
          <FaGithub /> Lista de Repositórios
        </a>
      </h1>

      <ul className="mx-auto w-[250px] h-full mt-4">
        {repositories.map((repo) => {
          return (
            <li
              className="hover:underline hover:font-black hover:uppercase mt-4 hover:text-gray text-xl"
              key={repo.name}
            >
              <a className="flex gap-2 items-center" href={repo.html_url}>
                <FaCaretRight />
                {repo.name}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
