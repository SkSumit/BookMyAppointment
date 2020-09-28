import * as Yup from "yup";

export const initials = {
  Name: "Sumit",
  Age: "12",
  Email: "12@12.com",
  phonenumber: "1235467897",
  date: "",
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

  date: Yup.date().required("Required Date"),
};
