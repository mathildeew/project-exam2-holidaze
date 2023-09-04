import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const path = window.location.pathname;

  return (
    <>
      {path === "/user/login" || path === "/user/register" ? (
        <Outlet />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}
