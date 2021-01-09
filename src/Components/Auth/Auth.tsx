import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

export const Auth: React.FC<any> = (props: any) => {
  const [registrationType, setRegistrationType] = useState<string>("");
  const { type } = props;
  return (
    <div id="Auth">
      <h1>Auth ({type}) Page</h1>
    </div>
  );
};

export default Auth;
