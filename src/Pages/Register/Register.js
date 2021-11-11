import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import logo from '../../images/register.png'
import useAuth from '../../hooks/useAuth'

const Register = () => {
  const { signInWithGoogle, signUpUser, error } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [validated, setValidated] = useState(false);

  const handleNameChange = e => {
    setName(e.target.value);
    setValidated(true);
  }

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
    if (email !== '' && pass !== '' && name !== '') {
      signUpUser(email, pass, name);
    }
  }
  return (
    <div className="container bg-light border-shadow my-5">
      <div className="row">
        <div className="col-lg-5 image d-flex justify-content-center align-items-center">
          <div className="text-center text-dark p-4">
            <img src={logo} className="img-fluid" alt="" />
            <h6 className="mt-5">The bad news is time flies. The good news is you’re the pilot.</h6>
            <Form.Text className="text-muted">
              Browse the collection of new cars on this page and get to know each of the exciting models we carry. Our new car inventory can be overwhelming at first, but you can use the toolbar on your screen to limit your search by make, model, style, price, and more.
            </Form.Text>
          </div>
        </div>
        <div className="col-lg-7 long-padding">
          <div className="text-center">
            <h1 className=" text-bold mb-4">Please Register for an Account</h1>
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
            <p>or use email for register</p>
          </div>
          <Form validated={validated} >
            <Form.Group className="mb-3" controlId="text">
              <Form.Label className="fw-bold">Name:</Form.Label>
              <Form.Control
                onBlur={handleNameChange}
                type="text"
                placeholder="Enter your Name"
                required
              />
            </Form.Group>
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

            {
              error !== '' ? (<p className="text-danger"> {error}</p>) : (<></>)
            }
            <Button
              onClick={signinWithEmailPasswordHandler}
              className="custom-button"
              type="submit"
            >
              Register
            </Button>
          </Form>
          <p className="text-center pt-3 m-0">
            already have an account? <Link to="/signin">Go To Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;