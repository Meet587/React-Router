import React from "react";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = () => {
    navigate(from, { replace: true });
  };
  return <div>Login</div>;
};

export default Login;
