import React from "react";
import UserService from "./UserService";

class ReadAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    UserService.getUsers().then((responce) => {
      this.setState({ users: responce.data });
    });
  }

  render() {
    return (
      <>
        <div>
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
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td> {user.id}</td>
                  <td> {user.firstName}</td>
                  <td> {user.lastName}</td>
                  <td> {user.email}</td>
                  <td> {user.password}</td>
                  <td> {user.phoneNo}</td>
                  <td> {user.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ReadAll;
