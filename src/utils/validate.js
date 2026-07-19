export const checkValidData = (email, password, confirmPassword) => {
  const isEmailValid =
    /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPswValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";

  // Only for Sign Up
  if (confirmPassword && password !== confirmPassword)
    return "Passwords do not match";

  if (!isPswValid) return "Password does not meet the required rules";
  return null;
};
