import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import Profile from "@/components/Profile/Profile";
import Repositories from "@/components/Repositories/Repositories";
import RepositoriesContainer from "@/components/RepositoriesContainer/RepositoriesContainer";

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <main className="bg-body-mobile nav4:bg-body-desktop px-5 pt-12 ">
        <Profile />
        <RepositoriesContainer />
      </main>
    </>
  );
}
