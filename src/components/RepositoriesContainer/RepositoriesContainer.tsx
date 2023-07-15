import React from "react";
import Repositories from "../Repositories/Repositories";

type RepositoriesContainerProps = {};

const RepositoriesContainer: React.FC<RepositoriesContainerProps> = () => {
  return (
    <div>
      <button className="bg-dark-green w-full flex items-center justify-center p-[.4rem] gap-1 rounded-lg mt-8 mb-6">
        <svg
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          fillOpacity={0.7}
          className="fill-white"
        >
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
        </svg>
        <p className="text-white font-semibold text-sm ">New</p>
      </button>

      <input
        placeholder="Find a repository..."
        type="text"
        className="w-full py-[.4rem] pl-2 bg-transparent rounded-lg text-primary text-sm mb-2 
        border border-solid border-header-icon 
        focus:outline-none focus:border-blue focus:border-2 
        placeholder:text-white placeholder:opacity-20 placeholder:text-sm placeholder:font-thin"
      />

      <div className="flex gap-1">
        <button className="flex items-center p-[.4rem] px-3 bg-profile-button rounded-md text-sm text-secondary font-semibold gap-1 border border-solid border-header-icon">
          <span>Type</span>
          <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
          </svg>
        </button>
        <button className="flex items-center p-[.4rem] px-3 bg-profile-button rounded-md text-sm text-secondary font-semibold gap-1 border border-solid border-header-icon">
          <span>Language</span>
          <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
          </svg>
        </button>

        <button className="flex items-center p-[.4rem] px-3 bg-profile-button rounded-md text-sm text-secondary font-semibold gap-1 border border-solid border-header-icon">
          <span>Sort</span>
          <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
          </svg>
        </button>
      </div>

      <Repositories />
    </div>
  );
};
export default RepositoriesContainer;
