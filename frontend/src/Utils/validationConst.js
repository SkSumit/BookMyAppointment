import * as Yup from "yup";

export const initials = {
  Name: "Formik Test2",
  Age: "28",
  Email: "kolsum24@skcorp.com",
  phonenumber: "8446224700",
  date: new Date(),
};

export const yupValidators = {
  Name: Yup.string()
    .trim()
    .min(3, "Must be 3 characters or more")
    .required("Required Name"),
  Age: Yup.number()
    .positive("Age should be positive")

    .lessThan(100, "Must be below the age of 100 ")
    .integer("Age cannot be a decimal")
    .required("Required Age"),
  Email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Required Email"),
  phonenumber: Yup.string()
    .matches(
      /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/,
      "Must be a valid Indian phone number"
    )
    .required("Required Phone Number"),

  date: Yup.string().required("Required Name"),
};
