import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { Header } from "../../components";
import { RepostoryItem } from "./repositoryItem";

export interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
  };
}

export default function Projects() {
  const [repositories, setRepositories] = useState<RepositoryItemProps[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/anddreluis2/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="w-[100vw] bg-background text-white">
      <Header />
      <title>Projetos</title>

      <h1 className="font-bold text-exl items-center gap-3 justify-center flex mt-8">
        <FaGithub /> Lista de Repositórios
      </h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <div key={repository.repository?.name}>
              <RepostoryItem repository={repository} />
            </div>
          );
        })}
      </ul>
    </section>
  );
}
