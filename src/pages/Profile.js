import React, { useEffect, useState } from "react"
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap"
import DashboardLayout from "../components/layout/DashboardLayout"
import { toast } from "react-toastify"
import { updatePassword } from "../helpers/axiosHelper"

const Profile = () => {
  const [user, setUser] = useState()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"))
    setUser(u)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { currentPassword, password, confirmPassword } = formData

    if (confirmPassword !== password) {
      return toast.error("Confirm password and password do not match!")
    }

    const { data } = await updatePassword({
      currentPassword,
      password,
    })

    toast[data.status](data.message)
  }

  return (
    <DashboardLayout>
      <Modal show={showForm} onHide={() => setShowForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  name="currentPassword"
                  placeholder="Enter your current password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter a new password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter your new password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="info" type="submit">
                Update Password
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      <Container>
        <Row className="p-5">
          <Col md={8}>
            <div>
              <ul>
                <li>
                  <strong>Profile ID: </strong>
                  {user?._id}
                </li>
                <li>
                  <strong>Name: </strong>
                  {`${user?.fName} ${user?.lName}`}
                </li>
                <li>
                  <strong>Email: </strong>
                  {user?.email}
                </li>
                <li>
                  <strong>Status: </strong>

                  <span
                    className={
                      user?.status === "active" ? "text-success" : "text-danger"
                    }
                  >
                    {user?.status}
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="d-flex align-items-center">
            <Button variant="dark" onClick={() => setShowForm(true)}>
              Update Password
            </Button>
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  )
}

export default Profile
