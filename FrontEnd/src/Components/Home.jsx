import { Button, Container } from "reactstrap";
import AppNavbar from "./AppNavbar";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <AppNavbar></AppNavbar>
      <Container fluid>
        <Button color="link">
          <Link to="/UsersList">Manage JUG Tour</Link>
        </Button>
      </Container>
      <Outlet />
    </>
  );
};

export default Home;
