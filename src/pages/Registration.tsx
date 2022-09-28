import React from "react";
import { FormWrapper } from "../components/UI/FormWrapper";
import { SingUpForm } from "../forms";
import { UserModel, UserSingResponseModel } from "../models/UserModel";
import { UserService } from "../services/UserService";

const Registration = () => {
  const [registration] = UserService.useRegistrationMutation();

  const onSubmit = async (values: UserModel) => {
    const userData = {
      ...values,
      fullName: `${values.firstName} ${values.lastName}`,
    };
    const { data: userInfo } = (await registration(userData)) as {
      data: UserSingResponseModel;
    };
    if (userInfo && "token" in userInfo) {
      window.localStorage.setItem("token", userInfo.token);
    }
  };

  return (
    <FormWrapper title="Registration">
      <SingUpForm onSubmit={onSubmit} />
    </FormWrapper>
  );
};

export default Registration;
