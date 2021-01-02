import React from "react";
import "./Auth.css";

export const Auth: React.FC<any> = (props: any) => {
  const { type } = props;
  return (
    <div id="Auth">
      <h1>Auth ({type}) Page</h1>
    </div>
  );
};

export default Auth;
