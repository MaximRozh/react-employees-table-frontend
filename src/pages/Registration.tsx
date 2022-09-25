import React from "react";
import { FormWrapper } from "../components/UI/FormWrapper";
import { SingUpForm } from "../forms";
import { UserModel } from "../models/UserModel";
import { UserService } from "../services/UserService";

const Registration = () => {
  const [registration] = UserService.useRegistrationMutation();

  const onSubmit = async (values: UserModel) => {
    const userData = {
      ...values,
      fullName: `${values.firstName} ${values.lastName}`,
    };
    const userInfo = (await registration(userData)) as any;
    if ("token" in userInfo.data) {
      window.localStorage.setItem("token", userInfo.data.token);
    }
  };

  return (
    <FormWrapper title="Registration">
      <SingUpForm onSubmit={onSubmit} />
    </FormWrapper>
  );
};

export default Registration;
