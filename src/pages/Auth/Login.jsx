import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  // signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import auth from "../../config/Firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

  const googleProvider = new GoogleAuthProvider();
  const gitubProvider = new GithubAuthProvider();
  const navigate = useNavigate();

  const loginClick = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Loged in successfully!");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const googleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        alert("Loged in wit google successfully!");
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const githubLogIn = () => {
    signInWithPopup(auth, gitubProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        alert("Loged in wit GitHub successfully!");
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <>
      <div className="reg-container">
        <h2 className="text-center">Log in into your account</h2>

        <div className="login-container">
          <div className="block">
            <div className="single-input">
              <label htmlFor="email"></label>
              <input
                className="input-box"
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email address"
              />
            </div>

            <div className="single-input">
              <label htmlFor="password"></label>
              <input
                className="input-box"
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
            </div>

            <input
              onClick={loginClick}
              type="submit"
              value="Log In"
              className="sign-up-btn"
            />
          </div>
          <div className="foot-note">
            <p>Do not have an account?</p>
            <button className="log-in-recomend-btn">
              {" "}
              <Link to="/signup">Create a free account</Link>{" "}
            </button>
          </div>
          <div className="google-github">
            <button onClick={googleLogIn}>
              Log in with <FcGoogle />
            </button>
            <button onClick={githubLogIn}>
              Log in with <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
