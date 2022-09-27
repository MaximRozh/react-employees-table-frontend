import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField, MyButton } from "../../components/UI";
import { validationSchema } from "./validationSchema";
import { LoginUserType } from "../../models/UserModel";

interface SingUpFormProps {
  onSubmit: (value: LoginUserType) => void;
}

const SignInForm: React.FC<SingUpFormProps> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "100%",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <InputField
        label="E-Mail"
        error={Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        type="email"
        {...register("email")}
        fullWidth
      />
      <InputField
        type={showPassword ? "text" : "password"}
        handleShowPassword={handleShowPassword}
        label="Password"
        error={Boolean(errors.password?.message)}
        helperText={errors.password?.message}
        {...register("password")}
        fullWidth
      />
      <MyButton
        disabled={!isValid}
        type="submit"
        size="large"
        variant="contained"
        fullWidth
      >
        Log in
      </MyButton>
    </form>
  );
};

export default SignInForm;
