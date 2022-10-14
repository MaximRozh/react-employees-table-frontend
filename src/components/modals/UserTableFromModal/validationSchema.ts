import * as Yup from "yup";
import moment from "moment";

const stringRegexp = /^[A-Za-z ]*$/;
const positionRegexp = /^[A-Za-z /.,]*$/;

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .matches(stringRegexp, "Only English alphabets are allowed for this field")
    .min(3, "Must be more than 3 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .matches(stringRegexp, "Only English alphabets are allowed for this field")
    .min(3, "Must be more than 3 characters"),
  position: Yup.string()
    .required("Position is required")
    .matches(
      positionRegexp,
      "Only English alphabets are allowed for this field"
    )
    .min(3, "Must be more than 3 characters"),
  salary: Yup.number()
    .typeError("Must be a number")
    .required("Salary is required")
    .positive("Must be positive number"),
  birthYear: Yup.date()
    .required("Day of birth is required")
    .test(
      "birthYear",
      "Age must be more than 18 or equal",
      (date) => moment().diff(moment(date), "years") >= 18
    ),
});
