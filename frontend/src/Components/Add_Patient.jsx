import React, { useState } from 'react';
import './Patients.css';
import './addpatient.css';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add_Patient = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    admitted: '',
    gender: '',
    condition: '',
    address: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate posting data to the database
    // Replace the following code with your actual backend API call
    fetch('http://localhost:4000/api/v1/patient/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data posted:', data);
        toast.success('Patient added successfully');
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Failed to add patient');
      });
  };

  return (
    <>
      <div className="heading">
        <h1>Add Patients</h1>
        <FaHandHoldingHeart className="icon" />
      </div>
      <div className="add">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter patient name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Enter patient age"
            required
            value={formData.age}
            onChange={handleInputChange}
          />
          <input
            className="date"
            type="text"
            name="admitted"
            placeholder="Enter date patient admitted (12/23/2001)"
            required
            value={formData.admitted}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Enter patient gender"
            required
            value={formData.gender}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="condition"
            placeholder="Enter patient condition"
            required
            value={formData.condition}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Enter patient address"
            required
            value={formData.address}
            onChange={handleInputChange}
          />
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Add_Patient;
