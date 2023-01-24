import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import DashboardLayout from "../components/layout/DashboardLayout";
import { toast } from "react-toastify";
import { updatePassword } from "../helpers/axiosHelper";
import { useSelector } from "react-redux";

const Profile = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const { userInfo } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { currentPassword, password, confirmPassword } = formData;

    if (confirmPassword !== password) {
      return toast.error("Confirm password and password do not match!");
    }

    const { status, message } = await updatePassword({
      currentPassword,
      password,
    });

    toast[status](message);
  };

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
                  {userInfo?._id}
                </li>
                <li>
                  <strong>Name: </strong>
                  {`${userInfo?.fName} ${userInfo?.lName}`}
                </li>
                <li>
                  <strong>Email: </strong>
                  {userInfo?.email}
                </li>
                <li>
                  <strong>Status: </strong>

                  <span
                    className={
                      userInfo?.status === "active"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {userInfo?.status}
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
  );
};

export default Profile;
