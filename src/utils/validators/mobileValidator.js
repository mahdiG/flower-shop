export default function mobileValidator(value) {
  try {
    let regexPattern = /^[0][9][1][0-9]{8,8}$/g;
    let isValid = regexPattern.test(value);

    console.log("mobile isValid: ", isValid);

    return isValid;
  } catch (error) {
    console.log("mobile validator error: ", error);
  }
}
