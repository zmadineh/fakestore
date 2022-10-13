import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {fakeLogin} from "../../db";

const initialState = {
      loading: false,
      firstName: "",
      lastName: "",
      token: "",
      username: "",
      isLogin: false,
      error: "",
    };

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {

    // login: (state, action) => {
    //   state.firstName = action.payload.firstName;
    //   state.lastName = action.payload.lastName;
    //   state.token = action.payload.token;
    //   state.username = action.payload.username;
    //   state.isLogin = true;
    // },

    logout: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.token = "";
      state.username = "";
      state.isLogin = false;
    },

      extraReducers: (builder) => {
          builder.addCase(loginUserAsync.pending, (state, action) => {
              state.loading = true;
              state.error = "";
          });
          builder.addCase(loginUserAsync.fullfilled, (state, action) => {
              state.firstName = action.payload.firstName;
              state.lastName = action.payload.lastName;
              state.token = action.payload.token;
              state.username = action.payload.username;
              state.loading = true;
              state.isLogin = true;
              state.error = "";
          });
          builder.addCase(loginUserAsync.rejected, (state, action) => {
              state.firstName = "";
              state.lastName = "";
              state.token = "";
              state.username = "";
              state.isLogin = false;
              state.loading = false;
              state.error = "incorrect username or password";
          });
      }
  },
});

// We can pass only one entry, we can use the object for more inputs
export const loginUserAsync = createAsyncThunk(
    'auth/loginUserAsync',
    async (authData, thunkAPI) => {
        const data = await fakeLogin(authData.username, authData.password);
        return data;
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
