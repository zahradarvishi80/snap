

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    listProject:[]
}


export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setListProject: (state, action) =>{
        state.listProject=action.payload
    }
  }
});

export const { setListProject } = projectSlice.actions;
export default projectSlice.reducer;