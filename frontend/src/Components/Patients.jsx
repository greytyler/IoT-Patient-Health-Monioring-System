import React, { useEffect, useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Button } from '@mui/material';
import './Patients.css';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Patients = () => {
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/v1/patients')
      .then(response => response.json())
      .then(data => {
        const rowsWithId = data.patients.map(patient => ({ ...patient, id: patient._id }));
        setPatientsData(rowsWithId);
        console.log(rowsWithId);
        
      })
      .catch(error => {
        console.error('Error:', error);
        
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/api/v1/patient/delete/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Remove the deleted patient from the state
        setPatientsData(prevPatients => prevPatients.filter(patient => patient._id !== id));
        toast.success('Patient deleted successfully');
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Failed to delete patient');
      });
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'admitted', headerName: 'Admitted', width: 200 },
    { field: 'gender', headerName: 'Gender', width: 150 },
    { field: 'condition', headerName: 'Condition', width: 150 },
    { field: 'address', headerName: 'Address', width: 250 },
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "Delete",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const id = params.row._id;
        return (
          <>
            <Button onClick={() => handleDelete(id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="heading">
        <h1>Our Patients</h1>
        <FaHandHoldingHeart className="icon" />
      </div>
      <Paper style={{ height: '36rem', width: '100%', marginTop: '1rem', backgroundColor: '#292d33' }}>
        <DataGrid
          className="datagrid"
          rows={patientsData}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          checkboxSelection
          disableSelectionOnClick
        />
        <ToastContainer />
      </Paper>
      
    </>
  );
};

export default Patients;
