import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Manager from "./pages/Profile/Manager";
import Venue from "./pages/Venue";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/manager" element={<Manager />} />
        <Route path="venue/:id" element={<Venue />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
