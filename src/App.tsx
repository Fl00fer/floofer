import React from "react";
import "./App.css";
import Routes from "./Routes";
import { withAuthenticator } from '@aws-amplify/ui-react';


function App() {
  return (
    <div className='App'>
      <Routes />
    </div>
  );
}

export default withAuthenticator(App);
