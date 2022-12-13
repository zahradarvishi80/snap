import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    saveToken: (state, action) => action.payload,
    saveUserName: (state, action) => action.payload
  }
});

export const { saveToken,saveUserName } = userSlice.actions;
export default userSlice.reducer;