import React from "react";
import Profile from "../Profile/Profile";
import RepositoriesContainer from "../RepositoriesContainer/RepositoriesContainer";

type MainProps = {};

const Main: React.FC<MainProps> = () => {
  return (
    <main className="bg-body-mobile nav4:bg-body-desktop">
      <div className=" px-5 pt-12 gap-5 main2:gap-6 main1:flex main1:px-8 main1:pt-10 main2:px-10 max-w-[1320px] main3:mx-auto">
        <Profile />
        <RepositoriesContainer />
      </div>
    </main>
  );
};
export default Main;
