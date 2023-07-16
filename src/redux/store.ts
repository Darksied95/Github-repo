import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface GithubState {
  isLoading: Boolean;
  profile: object;
  repos: object;
}
const initialState: GithubState = { isLoading: true, profile: {}, repos: {} };

const gitHubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    updateGithubProfile: (state, action) => {
      return {
        isLoading: action.payload.loading,
        profile: action.payload.profile,
        repos: action.payload.repos,
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
