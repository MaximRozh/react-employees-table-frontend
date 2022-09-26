import React from "react";
import { FormWrapper } from "../components/UI/FormWrapper";

import { useAppDispatch } from "../hooks/storeHooks";
import SignInForm from "../forms/SignInForm";
import { LoginUserType } from "../models/UserModel";
import { UserService } from "../services/UserService";
import { setUserInfo } from "../store/auth/authSlilce";

const Login = () => {
  const dispatch = useAppDispatch();
  const [login] = UserService.useLoginMutation();

  const onSubmit = async (values: LoginUserType) => {
    const userInfo = (await login(values)) as any;
    console.log(userInfo);
    if ("token" in userInfo.data) {
      dispatch(setUserInfo(userInfo.data));
      window.localStorage.setItem("token", userInfo.data.token);
    }
  };

  return (
    <FormWrapper title="Login">
      <SignInForm onSubmit={onSubmit} />
    </FormWrapper>
  );
};

export default Login;
