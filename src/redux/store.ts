import { createSlice, configureStore } from "@reduxjs/toolkit";

const gitHubSlice = createSlice({
  name: "github",
  initialState: { profile: {}, repos: {} },
  reducers: {
    updateProfile: (state, action) => {
      return { ...state, profile: action.payload };
    },
    updateRepos: (state, action) => {
      return { ...state, repos: action.payload };
    },
  },
});

export const { updateProfile, updateRepos } = gitHubSlice.actions;

const store = configureStore({
  reducer: gitHubSlice.reducer,
});

export default store;
