import React from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../Features/User";
const Display = (props) => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return (
    <>
      <Table striped hover variant="dark">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Username</th>

            <th colspan="2" className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {user.map((items) => {
            return (
              <>
                <tr>
                  <td>{items.id}</td>
                  <td>{items.name}</td>
                  <td>{items.username}</td>

                  <td>
                    <Button
                      variant="success"
                      onClick={() => props.handleEdited(items)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch(deleteUser({ id: items.id }));
                        props.setIsEditing(false);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Display;
