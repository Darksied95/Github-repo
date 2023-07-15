import React from "react";
import Repository from "../Repository/Repository";

type RepositoriesProps = {};

const Repositories: React.FC<RepositoriesProps> = () => {
  return (
    <div className="border-t border-solid border-header-icon mt-3">
      {Array.from(Array(30), (e, index) => (
        <Repository key={index} />
      ))}
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
