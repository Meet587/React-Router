import "./App.css";
import { memo } from "react";
import { Route, Routes } from "react-router";
import { PrivateRoutes, PublicRoutes } from "./routes";
import Layouts from "./Layouts/Layouts";
import RequireAuth from "./Components/RequireAuth";
import AuthMiddleware from "./routes/AuthMiddleware";

function App() {
  const userType = "public";

  localStorage.setItem("isAuth", false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          {PublicRoutes.map((route, i) => {
            return <Route key={i} path={route.path} element={route.element} />;
          })}

          <Route element={<RequireAuth />}>
            {PrivateRoutes.map((route, i) => {
              return (
                <Route key={i} path={route.path} element={route.element} />
              );
            })}
          </Route>

          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Route>
      </Routes>
      {/* <AuthMiddleware />
      <AuthMiddleware userType={userType}  /> */}
    </>
  );
}

export default memo(App);
