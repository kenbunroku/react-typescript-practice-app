import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/user-management" element={<UserManagement />} />
        <Route path="/home/setting" element={<Setting />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
