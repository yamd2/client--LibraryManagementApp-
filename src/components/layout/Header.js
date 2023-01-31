import { Container, Button } from "react-bootstrap/"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logoutSuccess } from "../../redux/user/UserSlice"

export const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.user)
  const handleLogout = () => {
    dispatch(logoutSuccess()) && navigate("/")
  }
  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Navbar.Brand href="#home">Library Mgmt.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userInfo?._id ? (
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-user"></i> Hi {userInfo?.fName}!
                <Button onClick={() => handleLogout()}>Logout</Button>
              </div>
            ) : (
              <>
                {" "}
                <Nav.Link href="/">
                  <i className="fa-solid fa-user"></i> Login
                </Nav.Link>
                <Nav.Link href="/register">
                  <i className="fa-solid fa-pen-to-square"></i> Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
