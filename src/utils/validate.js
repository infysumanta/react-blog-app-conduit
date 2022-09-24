export function validate(errors, name, value) {
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validatePasswd(value) {
    if (!value) {
      return "Password is required";
    } else if (value.length < 6) {
      return "Password must be alteast 6 characters long";
    } else if (value.search(/[a-zA-Z]/) === -1) {
      return "Password must contain atleast one letter";
    } else if (value.search(/\d/) === -1) {
      return "Password must contain atleast one number";
    } else {
      return "";
    }
  }

  switch (name) {
    case "username":
      errors.username = !value
        ? "Username is required"
        : value.length < 6
        ? "Username should be at least 6 characters"
        : "";
      break;
    case "password":
      errors.password = validatePasswd(value);
      break;
    case "email":
      errors.email = !value
        ? "Email is required"
        : validateEmail(value)
        ? ""
        : "Email is invalid";
      break;
    case "title":
      if (value === "") {
        errors.title = "Title can't be empty!";
      }
      break;
    case "description":
      if (value === "") {
        errors.description = "Description can't be empty!";
      }
      break;
    case "body":
      if (value === "") {
        errors.body = "Body can't be empty!";
      }
      break;
    case "tagList":
      if (value === "") {
        errors.tagList = "Tags can't be empty!";
      }
      break;
    default:
      break;
  }
}
