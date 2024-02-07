import React from "react";
import { AUTHENTICATED, ROUTE_CONSTANTS } from "../../constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onLoginClickHandler = () => {
    localStorage.setItem(AUTHENTICATED, true);
    navigate(`/${ROUTE_CONSTANTS.CANDIDATES}`);
  };
  return (
    <div>
      Login screen
      <button onClick={onLoginClickHandler}>login</button>
    </div>
  );
};

export default Login;
