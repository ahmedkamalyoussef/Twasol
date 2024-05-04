import React from "react";
import { LoginAPI } from "../api/AuthAPI";
import TwasolLogo from "../assets/twasolLogo.png";
import '../Sass/LoginComponent.scss';

export default function LoginComponent(){
  const [credentials , setcredentials]=useState({});  
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email ,credentials.password);
      console.log(res?.user);
    }catch (err) {
      console.log(err);
    }
    };
    return (
     <div className="login-wrapper">
        <img src={TwasolLogo} className="TwasolLogo"/>
        <h1 className="heading">Sign in</h1>
        <div className="auth-inputs">
          <input
           onchange={(Event)} =>
            setcredentials({ ...credentials,email:event.target.value})
            }
          className="common-input" 
           placeholder="Enter your Email" 
          />
          <input
           onchange={(Event)} =>
            setcredentials({ ...credentials,email:event.target.value})
            }
          className="common-input" 
          placeholder="Enter your password" 
          />
          </div>
          <button onClick={login} className="login-btn">
          Log in to Twasol
        </button>
        </div>
    );  
  }
