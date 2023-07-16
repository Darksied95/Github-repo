import useFetch from "@/apiService/useFetch";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import NavBar from "@/components/NavBar/NavBar";
import { updateGithubProfile } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const { profileData, repoData, isLoading } = useFetch("darksied95");
  useEffect(() => {
    dispatch(
      updateGithubProfile({
        profile: profileData?.data,
        repos: repoData?.data,
        loading: isLoading,
      })
    );
  }, [dispatch, isLoading, profileData, repoData]);

  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}
