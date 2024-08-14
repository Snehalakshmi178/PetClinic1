import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import '../assets/DoctorsList.css';

const doctorsData = {
  vaccinations: [
    { id: 1, name: "Dr. John Doe", specialty: "Vaccinations", email: "john.doe@example.com" },
    { id: 2, name: "Dr. Jane Smith", specialty: "Vaccinations", email: "jane.smith@example.com" },
    { id: 3, name: "Dr. Alan Turing", specialty: "Vaccinations", email: "alan.turing@example.com" },
    { id: 4, name: "Dr. Grace Hopper", specialty: "Vaccinations", email: "grace.hopper@example.com" }
  ],
  surgery: [
    { id: 5, name: "Dr. Emily Brown", specialty: "Surgery", email: "emily.brown@example.com" },
    { id: 6, name: "Dr. Michael Johnson", specialty: "Surgery", email: "michael.johnson@example.com" },
    { id: 7, name: "Dr. James Watson", specialty: "Surgery", email: "james.watson@example.com" },
    { id: 8, name: "Dr. Rosalind Franklin", specialty: "Surgery", email: "rosalind.franklin@example.com" }
  ],
  "dental-care": [
    { id: 9, name: "Dr. Sarah Wilson", specialty: "Dental Care", email: "sarah.wilson@example.com" },
    { id: 10, name: "Dr. David Lee", specialty: "Dental Care", email: "david.lee@example.com" },
    { id: 11, name: "Dr. Katherine Johnson", specialty: "Dental Care", email: "katherine.johnson@example.com" },
    { id: 12, name: "Dr. Margaret Hamilton", specialty: "Dental Care", email: "margaret.hamilton@example.com" }
  ],
  "diagnostic-testing": [
    { id: 13, name: "Dr. Linda White", specialty: "Diagnostic Testing", email: "linda.white@example.com" },
    { id: 14, name: "Dr. Robert Green", specialty: "Diagnostic Testing", email: "robert.green@example.com" },
    { id: 15, name: "Dr. John von Neumann", specialty: "Diagnostic Testing", email: "john.neumann@example.com" },
    { id: 16, name: "Dr. Ada Lovelace", specialty: "Diagnostic Testing", email: "ada.lovelace@example.com" }
  ],
  "microchip-identification": [
    { id: 17, name: "Dr. Kevin Brown", specialty: "Microchip Identification", email: "kevin.brown@example.com" },
    { id: 18, name: "Dr. Nancy Thompson", specialty: "Microchip Identification", email: "nancy.thompson@example.com" },
    { id: 19, name: "Dr. Carl Sagan", specialty: "Microchip Identification", email: "carl.sagan@example.com" },
    { id: 20, name: "Dr. Neil deGrasse Tyson", specialty: "Microchip Identification", email: "neil.tyson@example.com" }
  ],
  "wellness-exams": [
    { id: 21, name: "Dr. Lisa Black", specialty: "Wellness Exams", email: "lisa.black@example.com" },
    { id: 22, name: "Dr. Mark Davis", specialty: "Wellness Exams", email: "mark.davis@example.com" },
    { id: 23, name: "Dr. Richard Feynman", specialty: "Wellness Exams", email: "richard.feynman@example.com" },
    { id: 24, name: "Dr. Jane Goodall", specialty: "Wellness Exams", email: "jane.goodall@example.com" }
  ]
};

const DoctorsList = () => {
  const { service } = useParams();
  const doctors = doctorsData[service] || [];
  const navigate = useNavigate();

  const handleDoctorClick = (doctor) => {
    navigate('/appointment', { state: { doctor } });
  };

  return (
    <div className="container-style">
      <h1 className="title">Doctors List</h1>
      <Row className="row-style">
        {doctors.map((doctor) => (
          <div
            className="card-style"
            key={doctor.id}
            onClick={() => handleDoctorClick(doctor)}
          >
            <h5 className="card-title">{doctor.name}</h5>
            <p className="card-text">Specialty: {doctor.specialty}</p>
            <p className="card-text">Email: {doctor.email}</p>
          </div>
        ))}
      </Row>
    
    </div>
  );
};

export default DoctorsList;
