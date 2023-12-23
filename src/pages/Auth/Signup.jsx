import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../config/Firebase";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  getAuth,
  // signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
const Signup = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const backClick = () => {
    navigate(-1);
  };

  const googleProvider = new GoogleAuthProvider();
  const gitubProvider = new GithubAuthProvider();

  const signupSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.cpassword.value;

    console.log(name, email, password, confirmPassword);

    if (password !== confirmPassword) {
      return toast.error("Password does not match!");
    } else {
      createUserWithEmailAndPassword(email, password);
      console.log(user);
      return toast.success("Sign Up Successfully");
    }
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
        <h2 className="text-center">Create a new account</h2>

        <form onSubmit={signupSubmit}>
          <div className="login-container">
            <div className="block">
              <div className="single-input">
                <label htmlFor="name"></label>
                <input
                  className="input-box"
                  id="name"
                  name="name"
                  autoFocus
                  placeholder="Full name..."
                />
              </div>
              <div className="single-input ">
                <label htmlFor="email"></label>
                <input
                  className="input-box"
                  type="email"
                  id="email"
                  name="email"
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
                  placeholder="Password"
                />
              </div>
              <div className="single-input">
                <label htmlFor="password"></label>
                <input
                  className="input-box"
                  type="password"
                  id="c-password"
                  name="cpassword"
                  placeholder="Confirm Password"
                />
              </div>

              <div>
                <input type="submit" value="Sign Up" className="sign-up-btn" />
              </div>
            </div>
            <div className="foot-note">
              <p>Already have an account?</p>
              <button className="log-in-recomend-btn">
                {" "}
                <Link to="/login">Log-in</Link>{" "}
              </button>
            </div>
          </div>
        </form>

        <div>
          <button onClick={backClick}>Go back</button>

          <div className="google-github">
            <button onClick={googleLogIn}>
              Sign-up with <FcGoogle />
            </button>
            <button onClick={githubLogIn}>
              Sign-up with <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
