import React from "react";


const USER_TYPE = {
  PUBLIC: "Public User",
  AUTH_USER: "Auth User",
};
const CURRENT_USER_TYPE = USER_TYPE.PUBLIC;

// const RenderRouting = []

const AuthMiddleware = (props) => {
  // if (props.userType == USER_TYPE.PUBLIC) {
  //   RenderRouting = PublicRoutes.map((route,i)=>{
  //     return <Route key={i} path={route.path} element={route.element} />
  //   })
  // }else if (props.userType == USER_TYPE.AUTH_USER) {
  //   RenderRouting = PrivateRouthing.map((route,i)=>{
  //     return <Route key={i} path={route.path} element={route.element} />
  //   })

  return (
    <>
      
      app
    </>
  );
};

const PublicUser = ({ childern }) => {
  if (
    CURRENT_USER_TYPE == USER_TYPE.PUBLIC ||
    CURRENT_USER_TYPE == USER_TYPE.AUTH_USER
  ) {
    return { childern };
  } else {
    setTimeout(() => {
      <Navigate to={"/login"} />;
    }, 3000);
    return <div>You don not have access to this page</div>;
  }
};
const AuthUser = ({ childern }) => {
  if (CURRENT_USER_TYPE == USER_TYPE.ADMIN) {
    return { childern };
  }
};

export default AuthMiddleware;
