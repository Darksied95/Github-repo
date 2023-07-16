import React from "react";
import Repository from "../Repository/Repository";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type RepositoriesProps = {};

const Repositories: React.FC<RepositoriesProps> = () => {
  const { repos } = useSelector((store: RootState) => store);
  console.log(repos);

  return (
    <div className="border-t border-solid border-header-icon mt-3">
      {repos &&
        repos.map((repo: any) => <Repository key={repo.id} repoData={repo} />)}
      <div className="text-sm ml-8 main1:mx-auto   w-fit mt-3 pb-8">
        <button disabled className="text-header-icon mr-3">
          &lt; Previous
        </button>
        <button disabled className="text-blue">
          Next &gt;
        </button>
      </div>
    </div>
  );
};
export default Repositories;
