import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import NavBar from "@/components/NavBar/NavBar";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";

type repositoryProps = {};

const Repository: React.FC<repositoryProps> = () => {
  const { profile } = useSelector((store: RootState) => store);
  const router = useRouter();

  useEffect(() => {
    if (!profile.login) {
      router.push("/");
    }
  });

  if (!profile.login) return <div />;
  return (
    <div>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
};

export default Repository;
