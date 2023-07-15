import React from "react";

type RepositoryProps = {};

const Repository: React.FC<RepositoryProps> = () => {
  return (
    <div>
      <div>
        <h1>Github-repo</h1>
        <span>Public</span>
      </div>

      <div>
        <span></span>
        <p>TypeScript</p>
        <p>Updated 20 hours ago</p>
      </div>

      <div>
        <button>
          <svg></svg>
          <span>Star</span>
        </button>
        <button>
          <svg></svg>
        </button>
      </div>
    </div>
  );
};
export default Repository;
