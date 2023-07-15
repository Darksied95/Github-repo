import React from "react";
import Repository from "../Repository/Repository";

type RepositoriesProps = {};

const Repositories: React.FC<RepositoriesProps> = () => {
  return (
    <div className="border-t border-solid border-header-icon mt-3">
      {Array.from(Array(30), (e, index) => (
        <Repository key={index} />
      ))}
    </div>
  );
};
export default Repositories;
