import { Routes } from "react-router";
import "./App.css";
import AuthMiddleware from "./routes/AuthMiddleware";

function App() {

  const userType = 'public'
  return (
    <>
        <AuthMiddleware />
        {/* <AuthMiddleware userType={userType}  /> */}
    </>
  );
}

export default App;
