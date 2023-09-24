import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/user/Login";
import Register from "./components/pages/user/Register";
import Profile from "./components/pages/Profile";
import Manage from "./components/pages/Profile/Manager";
import Venue from "./components/pages/Venue";
import NotFound from "./components/pages/NotFound";

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
