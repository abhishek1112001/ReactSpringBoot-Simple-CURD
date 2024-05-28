import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const AddUser = () => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo: "",
    address: "",
  };

  const [list, setEditList] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();

  //   useEffect(() => {
  //     if (id !== "new") {
  //       fetch(`/api/read/${id}`)
  //         .then((response) => response.json())
  //         .then((data) => setEditList(data));
  //     }
  //   }, [id, setEditList]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEditList({ ...list, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const method = list.id ? "PUT" : "POST";
    // const url = list.id ? `/read/${list.id}` : `/read`;

    const url = list.id ? `/api/update/${list.id}` : `/api/adduser`;
    await fetch(url, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    });
    setEditList(initialFormState);
    navigate("/UsersList");
  };

  const title = <h2>{list.id ? "Edit Group" : "Add Group"}</h2>;

  return (
    <>
      <div>
        <AppNavbar />
        <Container>
          {title}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">First Name</Label>
              <Input
                type="firstName"
                name="firstName"
                id="firstName"
                value={list.firstName || ""}
                onChange={handleChange}
                autoComplete="firstName"
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                value={list.lastName || ""}
                onChange={handleChange}
                autoComplete="lastName"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email </Label>
              <Input
                type="text"
                name="email"
                id="email"
                value={list.email || ""}
                onChange={handleChange}
                autoComplete="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="text"
                name="password"
                id="password"
                value={list.password || ""}
                onChange={handleChange}
                autoComplete="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="phoneNo">Phone Number</Label>
              <Input
                type="text"
                name="phoneNo"
                id="phoneNo"
                value={list.phoneNo || ""}
                onChange={handleChange}
                autoComplete="phoneNo"
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                value={list.address || ""}
                onChange={handleChange}
                autoComplete="address"
              />
            </FormGroup>

            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>{" "}
              <Button color="secondary" tag={Link} to="/UsersList">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    </>
  );
};
export default AddUser;
