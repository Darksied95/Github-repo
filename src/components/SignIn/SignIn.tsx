import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { updateGithubProfile } from "@/redux/store";
import { useRouter } from "next/router";

type SignInProps = {};

const SignIn: React.FC<SignInProps> = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (!username) {
      setIsLoading(false);
      return alert("Input a username dumb dumb");
    }
    try {
      const { data: profileData } = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const { data: repoData } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      const { data: starredData } = await axios.get(
        `https://api.github.com/users/${username}/starred`
      );

      dispatch(
        updateGithubProfile({
          profile: profileData,
          repos: repoData,
          starCount: starredData.length,
        })
      );
      router.push("/repository");
    } catch (error: any) {
      if (error?.response?.request?.status == 404) {
        setIsLoading(false);

        return alert("How do you not know your username???");
      }
      alert("Something went wrong, please try again");
    }
    setIsLoading(false);
  }

  return (
    <main className="bg-dark min-h-screen ">
      <div className=" max-w-xs mx-auto pt-px">
        <svg
          height="46"
          viewBox="0 0 16 16"
          width="46"
          data-view-component="true"
          className="fill-white mx-auto my-9 "
        >
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
        <h1 className="text-white text-xl font-thin text-center mb-7">
          Provide GitHub Username
        </h1>
        <form
          className="text-white  p-4 bg-signin-Form  mb-5"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username" className="block text-sm font-normal">
            Username
          </label>
          <input
            type="text"
            className=" w-full py-1 my-2 pl-2 bg-transparent rounded-lg text-primary text-sm 
                  border border-solid border-header-icon 
                  focus:outline-none focus:border-blue focus:border-2"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="bg-dark-green block w-full rounded-md py-1"
            type="submit"
          >
            {!isLoading ? "Go to repository" : "Fetching Repository..."}
          </button>
        </form>
        <p className="text-white font-light text-center border border-solid border-header-icon py-3 rounded-md">
          New to Github?
          <a
            className="text-blue"
            href="https://github.com/signup?source=login"
          >
            Create an account
          </a>
          .
        </p>
      </div>
    </main>
  );
};
export default SignIn;
