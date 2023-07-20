import useFetch from "@/hooks/useFetch";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import NavBar from "@/components/NavBar/NavBar";
import { updateGithubProfile } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import React from "react";

type repositoryProps = {};

const Repository: React.FC<repositoryProps> = () => {
  const dispatch = useDispatch();

  const { profileData, repoData, isLoading, starredData } =
    useFetch("darksied95");
  useEffect(() => {
    dispatch(
      updateGithubProfile({
        profile: profileData?.data,
        repos: repoData?.data,
        loading: isLoading,
        starCount: starredData,
      })
    );
  }, [dispatch, isLoading, profileData, repoData, starredData]);

  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </>
  );
};
export default Repository;
