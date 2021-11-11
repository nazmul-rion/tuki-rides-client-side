import React, { useState } from 'react'
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/login.png'
import useAuth from '../../hooks/useAuth'

const Login = () => {
  const { signInWithGoogle, signInUser, error } = useAuth();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [validated, setValidated] = useState(false);
  const handleEmailChange = e => {
    setEmail(e.target.value);
    setValidated(true);
  }

  const handlePassChange = e => {
    setPass(e.target.value);
    setValidated(true);
  }

  const signinWithEmailPasswordHandler = e => {
    e.preventDefault();
    if (email !== '' && pass !== '') {
      signInUser(email, pass);
    }
  }

  return (
    <div className="container bg-light border-shadow my-5">
      <div className="row">
        <div className="col-lg-7 long-padding">
          <div className="text-center">
            <h1 className=" text-bold mb-4">Sign in to Your Account</h1>
            <div className="authentication-icon my-3">
              <button onClick={signInWithGoogle} className="border-0 bg-white">
                <i className="fab fa-google-plus-g p-3 text-danger"></i>
              </button>
              <button className="border-0 bg-white">
                <i className="fab fa-facebook-square p-3 text-primary"></i>
              </button>
              <button className="border-0 bg-white">
                <i className="fab fa-linkedin p-3 text-info"></i>
              </button>
            </div>
            <p>or use email for login</p>
          </div>

          <Form validated={validated} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Email address:</Form.Label>
              <Form.Control
                onBlur={handleEmailChange}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password:</Form.Label>
              <Form.Control
                onBlur={handlePassChange}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="remember me?" />
            </Form.Group>

            {
              error !== '' ? (<p className="text-danger"> {error}</p>) : (<></>)
            }

            <Button onClick={signinWithEmailPasswordHandler} className="custom-button" type="submit">
              Login
            </Button>
            <p className="text-center pt-3 m-0">
              dont have an account? <Link to="/signup">Register Now</Link>
            </p>
          </Form>
        </div>

        <div className="col-lg-5 image d-flex justify-content-center align-items-center">
          <div className="text-center text-dark p-4">
            <img src={logo} className="img-fluid" alt="" />
            <h2 className="mt-5">Drive Your Life </h2>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;