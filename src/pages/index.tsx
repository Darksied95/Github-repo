import useFetch from "@/apiService/useFetch";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import NavBar from "@/components/NavBar/NavBar";
import store, { updateProfile, updateRepos } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const { profileData, repoData, isLoading } = useFetch("darksied95");

  // console.log(profileData?.data, "pd");

  useEffect(() => {
    dispatch(updateProfile(profileData?.data));
    dispatch(updateRepos(repoData?.data));
  }, []);

  let y = useSelector((state: any) => state);
  console.log(y);

  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}
