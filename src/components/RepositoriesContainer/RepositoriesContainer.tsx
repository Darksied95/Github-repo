import React from "react";

type RepositoriesContainerProps = {};

const RepositoriesContainer: React.FC<RepositoriesContainerProps> = () => {
  return (
    <div>
      <button>
        <svg></svg>
        <p>New</p>
      </button>
      <input placeholder="Find a repository" />
      <div>
        <button>
          <span>Type</span>
          <svg></svg>
        </button>
        <button>
          <span>Language</span>
          <svg></svg>
        </button>
        <button>
          <span>Sort</span>
          <svg></svg>
        </button>
      </div>
    </div>
  );
};
export default RepositoriesContainer;
