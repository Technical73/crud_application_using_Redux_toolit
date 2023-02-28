import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../Features/User";
const Create = () => {
  const [data, setData] = useState({
    id: null,
    name: "",
    username: "",
  });

  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.id = user.length + 1;
    dispatch(
      addUsers({
        id: data.id,
        name: data.name,
        username: data.username,
      })
    );
    setData({
      id: null,
      name: "",
      username: "",
    });
  };

  return (
    <>
      <div className="p-4 text-md text-primary ">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your userName"
              name="username"
              value={data.username}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <div className="d-grid">
              <Button variant="primary" onClick={handleSubmit}>
                Add Users
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Create;
