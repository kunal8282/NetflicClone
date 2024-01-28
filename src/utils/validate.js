export const validateEmail = (email = "") => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  const minLength = 6;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);

  if (password.length < minLength) {
    return "Password must be at least 6 characters long.";
  } else if (!hasUppercase) {
    return "Password must contain at least one uppercase letter.";
  } else if (!hasLowercase) {
    return "Password must contain at least one lowercase letter.";
  } else if (!hasDigit) {
    return "Password must contain at least one digit.";
  } else {
    return null;
  }
};
