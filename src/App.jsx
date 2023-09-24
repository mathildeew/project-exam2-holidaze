import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import Profile from "./pages/Profile";
import Manage from "./pages/Profile/Manager";
import Venue from "./pages/Venue";
import NotFound from "./pages/NotFound";
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
