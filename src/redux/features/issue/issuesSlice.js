

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    listIssues:[]
}


export const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    setIssues: (state, action) =>{
        state.listIssues=action.payload
    }
  }
});

export const { setIssues } = issuesSlice.actions;
export default issuesSlice.reducer;