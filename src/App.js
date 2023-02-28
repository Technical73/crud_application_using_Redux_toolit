import { Col, Container, Row } from "react-bootstrap";
import { Create, Display } from "../src/Components/index";
import { useState } from "react";
import { EditForm } from "../src/Components/index";
import { useDispatch } from "react-redux";
import { updateUser } from "./Features/User";
function App() {
  const [newUser, setNewUser] = useState({
    id: null,
    name: "",
    username: "",
  });
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const handleEdited = (user) => {
    setIsEditing(true);
    setNewUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };
  const updateForm = ({ id, name, username }) => {
    dispatch(updateUser({ id: id, name: name, username: username }));
    setNewUser({
      id: null,
      name: "",
      username: "",
    });
    setIsEditing(false);
  };
  return (
    <Container fluid className="py-5 bg-warning">
      <Container className="bg-success">
        <Row
          style={{
            gap: "3",
          }}
        >
          <Col>
            {isEditing ? (
              <>
                <EditForm
                  newUser={newUser}
                  setNewUser={setNewUser}
                  setIsEditing={setIsEditing}
                  updateForm={updateForm}
                />
              </>
            ) : (
              <>
                <Create />
              </>
            )}
          </Col>
          <Col>
            <Display handleEdited={handleEdited} setIsEditing={setIsEditing} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
