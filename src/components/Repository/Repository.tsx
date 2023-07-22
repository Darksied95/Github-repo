import React, { useEffect, useState } from "react";
import { dateConverter, colorPicker } from "@/helpers";

type RepoDataType = {
  name: string;
  private: boolean;
  language: string | null;
  languages_url: string;
  updated_at: string;
};

type RepositoryProps = {
  repoData: RepoDataType;
};

const Repository: React.FC<RepositoryProps> = ({ repoData }) => {
  const {
    name,
    private: notPublic,
    language,
    languages_url,
    updated_at,
  } = repoData;
  const [updatedLanguage, setUpdatedLanguage] = useState(language);
  const [backgroundColor, setBackgroundColor] = useState<string>(
    colorPicker[(language || "") as keyof typeof colorPicker]
  );

  useEffect(() => {
    if (!language) {
      const getLanguage = async () => {
        const data = await fetch(languages_url);
        const res = await data.json();
        const language = Object.keys(res)[0];
        setUpdatedLanguage(language);
        setBackgroundColor(
          colorPicker[(language || "") as keyof typeof colorPicker]
        );
      };
      getLanguage();
    }
  }, [backgroundColor, language, languages_url]);

  return (
    <div className=" border-b border-solid border-header-icon pt-6 pb-6 relative">
      <div className=" max-w-[89%] ">
        <div className="">
          <h1 className="  gap-3">
            <a className="text-blue  text-xl  font-medium mr-3 break-all">
              {name}
            </a>
            <span className="text-repo-type text-xs font-semibold px-[.3rem] border border-solid border-header-icon rounded-xl">
              {notPublic ? "Private" : "Public"}
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-1">
          {updatedLanguage && (
            <span
              className="inline-block aspect-square w-3  rounded-full "
              style={{ backgroundColor }}
            ></span>
          )}
          <p className="text-repo-type text-xs mr-2">{updatedLanguage}</p>
          <p className="text-repo-type text-xs">
            updated {dateConverter(updated_at)}
          </p>
        </div>
      </div>

      <div className=" flex border border-solid border-header-icon bg-profile-button rounded-md py-1 absolute top-1/2 right-0 -translate-y-1/2 z-10 ">
        <button className="flex items-center gap-2 px-2 border-r border-solid border-header-icon">
          <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
          </svg>
          <span className="text-primary text-xs">Star</span>
        </button>
        <button className="px-2">
          <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Repository;
