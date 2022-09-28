import React from "react";
import { FormWrapper } from "../components/UI/FormWrapper";

import { useAppDispatch } from "../hooks/storeHooks";
import SignInForm from "../forms/SignInForm";
import { LoginUserType, UserSingResponseModel } from "../models/UserModel";
import { UserService } from "../services/UserService";
import { setUserInfo } from "../store/auth/authSlilce";

const Login = () => {
  const dispatch = useAppDispatch();
  const [login] = UserService.useLoginMutation();

  const onSubmit = async (values: LoginUserType) => {
    const { data: userInfo } = (await login(values)) as {
      data: UserSingResponseModel;
    };

    if (userInfo && "token" in userInfo) {
      dispatch(setUserInfo(userInfo));
      window.localStorage.setItem("token", userInfo.token);
    }
  };

  return (
    <FormWrapper title="Login">
      <SignInForm onSubmit={onSubmit} />
    </FormWrapper>
  );
};

export default Login;
