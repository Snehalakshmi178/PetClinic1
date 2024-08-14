import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import DoctorsList from './DoctorsList'; // Make sure this import is correct
import '../assets/ClinicalServices.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const services = [
  { title: "Vaccinations", text: "Our veterinarians provide core and non-core vaccinations to protect your pet from diseases.", img: "/vaccine.jpg", link: "vaccinations" },
  { title: "Surgery", text: "Our state-of-the-art surgical suite is equipped to perform a range of procedures, from spay/neuter to orthopedic surgery.", img: "./surgery.jpg", link: "surgery" },
  { title: "Dental Care", text: "Our dental team provides routine cleanings, extractions, and other dental services to keep your pet's teeth healthy.", img: "./dental.jpg", link: "dental-care" },
  { title: "Diagnostic Testing", text: "Our in-house laboratory and diagnostic equipment allow us to quickly and accurately diagnose a range of health issues.", img: "./testing.jpg", link: "diagnostic-testing" },
  { title: "Microchip Identification", text: "We offer microchip identification to help ensure your pet's safe return if they ever become lost.", img: "./microchip.jpg", link: "microchip-identification" },
  { title: "Wellness Exams", text: "Regular wellness exams help us detect health issues early, and provide an opportunity for you to ask questions and receive advice on caring for your pet.", img: "./wellness.jpg", link: "wellness-exams" }
];

const ClinicalServices = () => {
  const { service } = useParams();

  return (
    <div className="clinical-services-page">
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="page-title">Clinical Services</h1>
            <p className="page-subtitle">Our team of experienced veterinarians and technicians provide a range of clinical services to ensure the health and well-being of our furry friends.</p>
          </Col>
        </Row>
        <Row className="services-row">
          {services.map((service, index) => (
            <Col md={4} key={index} className="d-flex align-items-stretch">
              <Link to={`/ClinicalServices/${service.link}`} className="service-link">
                <Card className="service-card" data-aos="fade-up" data-aos-duration="1000">
                  {service.img && <img src={service.img} alt={service.title} className="service-image" />}
                  <CardBody>
                    <CardTitle tag="h5">{service.title}</CardTitle>
                    <CardText>{service.text}</CardText>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        {service && <DoctorsList />}
      </Container>
    </div>
  );
};

export default ClinicalServices;
