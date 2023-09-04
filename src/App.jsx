import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Profile from "./components/Profile";
import Manage from "./components/Profile/Manage";
import NotFound from "./components/NotFound";
import Venue from "./components/Venue";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user/login" element={<Login />} />
        <Route path="user/register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/manage" element={<Manage />} />
        <Route path="venue" element={<Venue />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
