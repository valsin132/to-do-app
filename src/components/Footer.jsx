import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Footer = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const currentYear = new Date().getFullYear();

  return (
    <p className="footer" style={{ color: theme.syntax }}>
      &copy; {currentYear} valdemaras.net, All rights reserved.
    </p>
  );
};

export default Footer;
