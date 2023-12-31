import { createSlice, configureStore } from "@reduxjs/toolkit";

type ProfileResponse = {
  [key: string]: any;
};

type ReposResponse = [{ [key: string]: any }?];
export interface GithubState {
  profile: ProfileResponse;
  repos: ReposResponse;
  starCount: number;
}
const initialState: GithubState = {
  profile: {},
  repos: [],
  starCount: 0,
};

const gitHubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    updateGithubProfile: (state, action) => {
      return {
        profile: action.payload.profile,
        repos: action.payload.repos,
        starCount: action.payload.starCount,
      };
    },
  },
});

export const { updateGithubProfile } = gitHubSlice.actions;

const store = configureStore({
  reducer: gitHubSlice.reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
