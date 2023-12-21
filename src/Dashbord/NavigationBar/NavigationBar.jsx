
import {  Container,  Nav, Navbar } from "react-bootstrap";
import {  NavLink } from "react-router-dom";



const NavigationBar = () => {


  return (
    <div>
      <Navbar
        className="  p-3 "
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand className="fs-2" to="dashboard">
          Task-Management
        </Navbar.Brand>

       

        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <NavLink
                className="text-decoration-none text-light  fs-5  "
                to="alltask"
              >
                Task-List
              </NavLink>

              <NavLink
                to="addTask"
                className="text-decoration-none ms-3 text-light fs-5 "
              >
                Add-Task
              </NavLink>
              <NavLink
                to="manageTask"
                className="text-decoration-none ms-3 text-light fs-5 "
              >
                Manage-Task
              </NavLink>
            </Nav>
     
          </Navbar.Collapse>
        </Container>
        <NavLink
                className="text-decoration-none btn bg-red-800 text-light  fs-5  "
                to="/"
              >
                Home
              </NavLink>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
