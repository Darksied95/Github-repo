import React from "react";
import Repository from "../Repository/Repository";

type RepositoriesProps = {};

const Repositories: React.FC<RepositoriesProps> = () => {
  return (
    <div>
      {Array.from(Array(30), (e, index) => (
        <Repository key={index} />
      ))}
    </div>
  );
};
export default Repositories;
