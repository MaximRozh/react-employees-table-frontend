import { createSlice } from "@reduxjs/toolkit";

interface AuthStateInterface {
  isAuth: boolean;
  userInfo: {
    fullName: string;
    email: string;
  } | null;
}
const initialState: AuthStateInterface = {
  isAuth: false,
  userInfo: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUserData: (state) => {
      state.isAuth = false;
      state.userInfo = null;
    },
    setUserInfo: (state, action) => {
      state.isAuth = true;
      state.userInfo = action.payload;
    },
  },
});
export const { clearUserData, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
