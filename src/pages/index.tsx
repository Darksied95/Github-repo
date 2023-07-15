import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import Profile from "@/components/Profile/Profile";
import RepositoriesContainer from "@/components/RepositoriesContainer/RepositoriesContainer";

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <main className="bg-body-mobile nav4:bg-body-desktop px-5 pt-12 main1:flex main1:px-8 main1:pt-10">
        <Profile />
        <RepositoriesContainer />
      </main>
    </>
  );
}
