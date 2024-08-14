import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import '../assets/Appointment.css';

const Appointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      toast.error('Please fill in all fields.');
      return;
    }

    const appointmentData = {
      name: formData.name,
      email: formData.email,
      preferredDate: formData.date,
      preferredTime: formData.time,
      veterinarianId: doctor.id
    };

    axios.post('http://localhost:8080/appointment', appointmentData)
      .then(response => {
        toast.success('In Consideration. We will further check and notify you!');
        setFormData({ name: '', email: '', date: '', time: '' });
        setTimeout(() => {
          navigate('/home'); // Redirect to the homepage after 3 seconds
        }, 10000);
      })
      .catch(error => {
        console.error('Error booking the appointment:', error);
        toast.error('There was an error booking the appointment. Please try again.');
      });
  };

  if (!doctor) {
    return <div>Doctor not selected. Please go back and select a doctor.</div>;
  }

  return (
    <Container className="appointment-container">
      <ToastContainer />
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Card className="appointment-card">
            <CardBody>
              <CardTitle tag="h4" className="appointment-title">Book an Appointment with {doctor.name}</CardTitle>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">Your Name</Label>
                  <Input type="text" name="name" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="date">Preferred Date</Label>
                  <Input type="date" name="date" id="date" value={formData.date} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="time">Preferred Time</Label>
                  <Input type="time" name="time" id="time" value={formData.time} onChange={handleChange} />
                </FormGroup>
                <Button type="submit" color="primary">Book Appointment</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Appointment;
