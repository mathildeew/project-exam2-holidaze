import { useMatch } from "react-router-dom";
import { FooterContainer, FooterContent } from "./Footer.style";

export default function Footer() {
  const login = useMatch("/login");
  const register = useMatch("/register");

  return (
    <>
      {!login && !register && (
        <FooterContainer>
          <FooterContent>
            <img src="/assets/identity/logo/logo-solid-svg.svg" alt="Logo" />
            <p>&#169; 2023 Holidaze - Mathilde Elinor Wiik</p>
          </FooterContent>
        </FooterContainer>
      )}
    </>
  );
}
