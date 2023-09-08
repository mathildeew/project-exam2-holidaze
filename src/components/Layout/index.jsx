import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const path = window.location.pathname;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
