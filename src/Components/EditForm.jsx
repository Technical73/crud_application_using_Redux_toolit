import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const EditForm = (props) => {
  const [data, setData] = useState(props.newUser);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    props.updateForm({
      id: data.id,
      name: data.name,
      username: data.username,
    });
    props.setIsEditing(false);
  };
  const handleRemove = () => {
    props.setIsEditing(false);
  };

  return (
    <>
      <div className="p-4 text-md text-primary ">
        <span
          style={{
            textAlign: "center",
            fontSize: "21px",
            fontStyle: "bold",
          }}
        >
          Update Form
        </span>
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
              <Button variant="primary" onClick={handleUpdate}>
                Update User
              </Button>
            </div>
          </Form.Group>
          <Form.Group>
            <div className="d-grid">
              <Button variant="danger" onClick={handleRemove}>
                Cancel
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default EditForm;
