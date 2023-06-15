import React,{Fragment} from 'react';
import { HiOutlineHome, HiOutlineUsers } from 'react-icons/hi';
import { FaEdit } from 'react-icons/fa';
import {AiOutlineDelete} from 'react-icons/ai'
import {  IoLogOutOutline, IoStatsChartSharp } from 'react-icons/io5';
import {Link} from 'react-router-dom'
import './dummy.css'

export const menuItems = [
    {
        id: 1,
        title: "Patient Metrics",
        name: "",
        icon: <HiOutlineHome className='icon' />,
    },
    {
        id: 2,
        title: "Add Patient",
        name: "add_patient",
        icon: <FaEdit className='icon' />,
    },
    {
        id: 3,
        title: "Patients",
        name: "patients",
        icon: <HiOutlineUsers className='icon' />,
    },
    
   
    {
        id:6,
        title: "Patient Charts",
        name: "charts",
        icon: <IoStatsChartSharp className='icon' />,
    },
    
  { //TODO
    id:8,
    title: "Sign-Out",
    name: "signout",
    icon: <IoLogOutOutline className='icon' />,
},
]

export const patientsColumns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90, headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
      headerAlign: 'center',
      align: 'center',
  
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 100,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    
    {
      field: 'gender',
      headerName: 'Gender',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'condition',
      headerName: 'Condition',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 150,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'action',
      flex:0.3,
      headerName: 'Action',
      width: 150,
      editable: true,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => {
      return (
        <Fragment>
          <Link to={`/admin/product/`}>
            <FaEdit className="edit" />
          </Link>

          <button
            onClick={() =>
              ""
            }
          >
            <AiOutlineDelete />
          </button>
        </Fragment>
      );
    },
  },

  ];

export const patientsRows = [

    { id: 1, name: 'Jon Balder', age: 31, admitted: '18/04/20 07:52:57', gender: 'male', condition: 'cancer', address: '14 Loyd Street' },
    { id: 1, name: 'Jon Balder', age: 31, admitted: '18/04/20 07:52:57', gender: 'male', condition: 'cancer', address: '14 Loyd Street' },


    
  ];
