import { useEffect, useState } from "react";
import UserService from "../UserService";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import { Link } from "react-router-dom";
import AppNavbar from "./AppNavbar";

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getUsers().then((response) => {
      setUsers(response.data);
    });
  }, []);

  const remove = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await fetch(`/api/remove/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(() => {
        let updateList = users.filter((user) => user.id !== id);
        setUsers(updateList);
      });
    }
  };

  return (
    <>
      <div>
        <AppNavbar></AppNavbar>
        <Container fluid>
          <div className="float-end">
            <Button color="success" tag={Link} to="/AddUser">
              Add Group
            </Button>
          </div>
          <h1 className="text-center"> Users List</h1>

          <table className="table table-striped">
            <thead>
              <tr>
                <td> User Id</td>
                <td> User First Name</td>
                <td> User Last Name</td>
                <td> User Email Id</td>
                <td> User Password</td>
                <td> User Phone No</td>
                <td> User Address</td>
                <td>Action </td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td> {user.id}</td>
                  <td> {user.firstName}</td>
                  <td> {user.lastName}</td>
                  <td> {user.email}</td>
                  <td> {user.password}</td>
                  <td> {user.phoneNo}</td>
                  <td> {user.address}</td>
                  <td>
                    <ButtonGroup>
                      <Button
                        size="sm"
                        color="primary"
                        tag={Link}
                        to={"/UsersUpdateList/" + user.id}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        color="danger"
                        onClick={() => remove(user.id)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </div>
    </>
  );
};

export default List;
