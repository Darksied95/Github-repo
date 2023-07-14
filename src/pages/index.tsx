import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <main className="bg-body-mobile nav4:bg-body-desktop px-5 pt-12 ">
        <Profile />
      </main>
    </>
  );
}
