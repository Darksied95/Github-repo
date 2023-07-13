import React from "react";
import IconWrapper from "../IconWrapper/IconWrapper";

type SearchBarProps = {};

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <button className="">
      <div className="lg:hidden mr-3">
        <IconWrapper>
          <span>
            <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>
          </span>
        </IconWrapper>
      </div>

      <div className="hidden lg:block">
        <span>
          <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
            <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
          </svg>
        </span>
        <p>
          Type <kbd>/</kbd> to search
        </p>
        <span>
          <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
            <path d="m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"></path>
          </svg>
        </span>
      </div>
    </button>
  );
};
export default SearchBar;
