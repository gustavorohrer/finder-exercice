export const calculateAgeFromDateOfBirth = dateOfBirth => {
  // from stack overflow
  const diff = new Date() - new Date(dateOfBirth);
  return Math.floor(diff / 31557600000);
};
