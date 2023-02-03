import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { Header } from "../../components";
import { RepositoryItemProps } from "../../types";
import { RepostoryItem } from "./repositoryItem";

export default function Projects() {
  const [repositories, setRepositories] = useState<RepositoryItemProps[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/anddreluis2/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="w-full h-full bg-background text-white">
      <Header />
      <title>Projetos</title>

      <h1 className="font-bold text-exl items-center gap-3 mb-4 justify-center flex mt-8">
        <FaGithub /> Lista de Repositórios
      </h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <div key={repository?.name}>
              <RepostoryItem repository={repository} />
            </div>
          );
        })}
      </ul>
    </section>
  );
}
