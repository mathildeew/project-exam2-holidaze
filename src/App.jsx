import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/home";
import Register from "./components/pages/user/Register";
import Login from "./components/pages/user/login";
import Manage from "./components/pages/profile/manager";
import NotFound from "./components/pages/notfound";
import Venue from "./components/Venue";
import Profile from "./components/pages/profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user/login" element={<Login />} />
        <Route path="user/register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/manager" element={<Manage />} />
        <Route path="venue/:id" element={<Venue />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
