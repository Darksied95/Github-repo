import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

type Profile = {
  profileData: AxiosResponse<any, any> | undefined;
  repoData: AxiosResponse<any, any> | undefined;
  isLoading: boolean;
};

function useFetch(user: string): Profile {
  function fetchProfile() {
    return axios.get("https://api.github.com/users/darksied95");
  }

  function fetchRepo() {
    return axios.get("https://api.github.com/users/darksied95/repos");
  }

  const { data: profileData, isLoading } = useQuery("profile", fetchProfile);
  const { data: repoData } = useQuery("repo", fetchRepo);

  return { profileData, repoData, isLoading };
}
export default useFetch;
