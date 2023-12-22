import  { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location =useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";
  const { login,googleLogin,setUser, githubSignIn } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    // console.log(event);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate(from)
        form.reset();

        setSuccess(" Login successfull");
      })
      .catch((error) => {
        // console.log(error.message);
        setError(error.message);
      });
  };


  const handleGoogleLogin = () => {
    setError("");
    setSuccess("");
    googleLogin(provider)
      .then((result) => {
        const user = result.user;
        navigate(from)
        setUser(user);
        // console.log(user);
        setSuccess("Login Succesfull");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGithubSignIn = () => {
    setError("");
    setSuccess("");
    githubSignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        navigate(from)
        setUser(user);
        // console.log(user);
        setSuccess("Login Succesfull");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
<div className="gray">
<Container className="p-5 ">
      <Form onSubmit={handleLogin} className="w-50 mx-auto">
        <h3 className="mb-5">Please Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button className="mb-2" variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text>
          Didn't have an account?Go <Link to="/register">Register</Link>
        </Form.Text>
        <br />
        <Form.Text className="green  fs-5">{success}</Form.Text>
        <br />
        <Form.Text className="text-danger  fs-5 ">{error}</Form.Text>

        <div className="mt-3 mb-3">
          <div>
            <Button onClick={handleGoogleLogin} className="mt-2 mb-2" variant="outline-primary">
              <FaGoogle /> Login with Google
            </Button>
          </div>
          <div>
            <Button onClick={handleGithubSignIn} variant="outline-secondary">
              <FaGithub /> Login with github
            </Button>
          </div>
        </div>
      </Form>
    </Container>
</div>
  );
};

export default Login;
