import { useState, useEffect } from "react";
import Sawo from "sawo";
import LandingPage from "../LandingPage/LandingPage";

import "./loginPage.css";

const API_KEY = "5b6203ca-b4ff-40c7-b06d-e492915ca75a";

const LoginPage = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});

  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: API_KEY,
      onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        setUserLoggedIn(true);
        setPayload(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return (
    <div>
      {!isUserLoggedIn ? (
        <div className="containerStyle">
          <div className="formContainer" id="sawo-container"></div>
        </div>
      ) : (
        <LandingPage />
      )}
    </div>
  );
};

export default LoginPage;
