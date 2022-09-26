import React from "react";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { InputField, MyButton } from "../../components/UI";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import { UserModel } from "../../models/UserModel";

interface SingUpFormProps {
  onSubmit: (values: UserModel) => void;
}

const defaultValues = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
};

const SingUpForm: React.FC<SingUpFormProps> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
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
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <InputField
            type="text"
            placeholder="First name"
            label="First Name"
            required
            fullWidth
            {...register("firstName")}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <InputField
            type="text"
            placeholder="Last Name"
            label="Last Name"
            required
            fullWidth
            {...register("lastName")}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
          />
        </Grid>
        <Grid item sm={12}>
          <InputField
            type="text"
            placeholder="E-mail"
            label="E-mail"
            required
            fullWidth
            {...register("email")}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid item sm={12}>
          <InputField
            type={showPassword ? "text" : "password"}
            handleShowPassword={handleShowPassword}
            placeholder="Password"
            label="Password"
            required
            fullWidth
            {...register("password")}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
        </Grid>
      </Grid>
      <MyButton
        disabled={!isValid}
        type="submit"
        size="large"
        variant="contained"
        fullWidth
      >
        Sign Up
      </MyButton>
    </form>
  );
};

export default SingUpForm;
