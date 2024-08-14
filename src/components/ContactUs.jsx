import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FaUserAlt, FaEnvelope, FaTag, FaPaperPlane } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Submitted, we will contact you soon');
        // Optionally, reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error('Form submission failed');
      }
    } catch (error) {
      toast.error('Error submitting form');
    }
  };

  return (
    <div className="outer-container">
      <div className="contact-us-page">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="page-title">Contact Us</h1>
              <Form onSubmit={handleSubmit} className="contact-form">
                <FormGroup>
                  <Label for="name">
                    <FaUserAlt className="form-icon" /> Name
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">
                    <FaEnvelope className="form-icon" /> Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="subject">
                    <FaTag className="form-icon" /> Subject
                  </Label>
                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="message">
                    <FaPaperPlane className="form-icon" /> Message
                  </Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <Button color="primary" type="submit">Send Message</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
