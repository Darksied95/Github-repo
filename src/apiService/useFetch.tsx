import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

type Profile = {
  profileData: AxiosResponse<any, any> | undefined;
  repoData: AxiosResponse<any, any> | undefined;
  starredData: number | undefined;
  isLoading: boolean;
};

function useFetch(user: string): Profile {
  function fetchProfile() {
    return axios.get("https://api.github.com/users/darksied95");
  }

  function fetchRepo() {
    return axios.get("https://api.github.com/users/darksied95/repos");
    // return axios.get("https://api.github.com/users/darksied95/repos?page=2");
  }
  function fetchStarredRepo() {
    return axios.get("https://api.github.com/users/darksied95/starred");
  }

  const { data: profileData, isLoading } = useQuery("profile", fetchProfile);
  const { data: repoData } = useQuery("repo", fetchRepo);
  const { data: starredData } = useQuery("star", fetchStarredRepo);

  return {
    profileData,
    repoData,
    starredData: starredData?.data.length,
    isLoading,
  };
}
export default useFetch;
