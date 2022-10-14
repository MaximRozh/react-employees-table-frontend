import React from "react";
import Box from "@mui/material/Box";
import { BasicModal } from "../../common/index";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MyDatePicker from "../../UI/MyDatePicker";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { validationSchema } from "./validationSchema";
import { InputField, MyButton } from "../../UI";
import { EmployeeModel } from "../../../models/EmployeeModel";

interface UserModalProps {
  openModal?: boolean;
  onClose: () => void;
  submitHandler: (user: EmployeeModel) => void;
  title: string;
  employeeInfo: EmployeeModel | undefined;
}

const defaultEmployeeValues = {
  firstName: "",
  lastName: "",
  birthYear: "",
  position: "",
  salary: null,
};
const UserTableFormModal: React.FC<UserModalProps> = ({
  openModal = true,
  onClose,
  submitHandler,
  title,
  employeeInfo = defaultEmployeeValues,
}) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: employeeInfo,
  });
  const onSubmit = (
    data: EmployeeModel,
    e: React.BaseSyntheticEvent<object> | undefined
  ) => {
    e?.preventDefault();
    const userData = {
      ...data,
      fullName: `${data.firstName} ${data.lastName}`,
      birthYear: moment(data.birthYear).format("YYYY-MM-DD"),
    };
    submitHandler(userData);
    reset();
  };

  return (
    <BasicModal openModal={openModal} onClose={onClose} title={title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <InputField
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
              placeholder="Last Name"
              label="Last Name"
              required
              fullWidth
              {...register("lastName")}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <InputField
              placeholder="Position"
              label="Position"
              required
              fullWidth
              {...register("position")}
              error={Boolean(errors.position)}
              helperText={errors.position?.message}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <InputField
              type="number"
              placeholder="Salary"
              label="Salary"
              required
              fullWidth
              {...register("salary")}
              error={Boolean(errors.salary)}
              helperText={errors.salary?.message}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Controller
              name="birthYear"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <MyDatePicker
                    {...{ onChange, onBlur, value }}
                    inputFormat="YYYY-MM-DD"
                    minDate={new Date("1960-01-01")}
                    maxDate={new Date()}
                    disableFuture
                    label="Birth Year"
                    views={["year", "month", "day"]}
                    renderInput={(params) => (
                      <InputField
                        fullWidth
                        {...params}
                        type="date"
                        error={Boolean(errors?.birthYear)}
                        helperText={errors?.birthYear?.message}
                      />
                    )}
                  />
                );
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <MyButton variant="contained" type="submit">
            Submit
          </MyButton>
          <MyButton onClick={onClose}>Cancel</MyButton>
        </Box>
      </form>
    </BasicModal>
  );
};

export default UserTableFormModal;
