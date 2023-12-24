const SocialLogin = () => {
  return (
    <>
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
    </>
  );
};

export default SocialLogin;
