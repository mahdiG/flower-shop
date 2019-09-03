export default function mobileValidator(value) {
  try {
    // let errorText = "شماره تلفن‌همراه اشتباه است";
    let regexPattern = /^[0][9][1][0-9]{8,8}$/g;
    let isValid = true;

    isValid = regexPattern.test(value);

    return isValid;
  } catch (error) {
    console.log("mobile validator error: ", error);
  }
}
