import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";
import FormContainer from "../components/FormContainer";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  let location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //DISPATCH REGISTER
    if (password !== confirmPassword) {
      setMessage("Password do not match!");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label style={{ color: "#1a1a1a", fontWeight: "bold" }}>
            Name
          </Form.Label>
          <Form.Control
            className="ps-0"
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label style={{ color: "#1a1a1a", fontWeight: "bold" }}>
            Email Address
          </Form.Label>
          <Form.Control
            className="ps-0"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label style={{ color: "#1a1a1a", fontWeight: "bold" }}>
            Password
          </Form.Label>
          <Form.Control
            className="ps-0"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label style={{ color: "#1a1a1a", fontWeight: "bold" }}>
            Confirm Password
          </Form.Label>
          <Form.Control
            className="ps-0"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Have an account?
          <Link
            to={redirect ? `/login?redirect=${redirect}` : "/login"}
            style={{ textDecoration: "none" }}
          >
            {" "}
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};
export default RegisterScreen;
