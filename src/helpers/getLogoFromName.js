import { instinctLogo, logoDark, logoDarkCircle } from "../assets/svg/svg";
// a function that takes a string parameter. It compares which svg to return
export const getLogoFromName = (name) => {
  switch (name) {
    case "instinctLogo":
      return instinctLogo;
    case "logoDark":
      return logoDark;
    case "logoDarkCircle":
      return logoDarkCircle;
    default:
      break;
  }
};
