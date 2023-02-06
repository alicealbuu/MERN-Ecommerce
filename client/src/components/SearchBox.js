import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault(); //for forms
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Product..."
        rounded
        style={{
          width: "190px",
          display: "inline",
          height: "2rem",
          margin: "auto",
          borderRadius: "25px",
        }}
      ></Form.Control>

      <Button
        type="submit"
        style={{ backgroundColor: "transparent" }}
        className="px-2"
      >
        <i class="fa fa-magnifying-glass"></i>
      </Button>
    </Form>
  );
};

export default SearchBox;
