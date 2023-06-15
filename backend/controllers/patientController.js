const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Patient = require("../models/patientModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");


exports.addNewPatient = catchAsyncErrors(async (req, res, next) => {
    const { name, age, gender, condition, address, admitted } = req.body;
  
    const patientExists = await Patient.findOne({ name });
  
    if (patientExists) {
      return res.status(400).json({
        message: "Patient already exists",
      });
    }
  
    const patient = new Patient({
      name,
      age,
      admitted,
      gender,
      condition,
      address,
    });
  
    await patient.save();
  
    res.status(201).json({
      success: true,
      patient,
    });
  });
  
//get all patients
exports.getAllPatients = catchAsyncErrors(async (req, res, next) => {
    const patients = await Patient.find();
  
    res.status(200).json({
      success: true,
      count: patients.length,
      patients,
    });
  });

  
//updating details of the patient
exports.updatePatientDetails = catchAsyncErrors( async (req,res,next) => {
    const patientId = req.params.id;

    //finding the patient in the database by Id
    Patient.findById(patientId)
       .then(patient => {
        //updating with the new data from the body
        patient.name = req.body.name
        patient.age = req.body.age
        patient.gender = req.body.gender
        patient.condition = req.body.condition
        patient.address = req.body.address
        

        return patient.save();

       })
       .then(updatedPatient => {
        res.status(200).json({
            message : "Patient details updated successfully",
            updatedPatient
        })
       })
       .catch(error => {
        res.status(500).json({
            message : error
        });
       })
})

//deleting the patient in the database
exports.deletePatient =  catchAsyncErrors( async (req,res,next) => {
    const id = req.params.id;

    Patient.findByIdAndDelete(id, (err,patient) => {
        if(err) {
            res.json({
                status : "error",
                message : err
            })
        } else {
            res.json({
                status : "success",
                message : "Patient deleted successfully"
            })
        }
    })
})


// getting reports of all patients
exports.reports = catchAsyncErrors(async (req, res, next) => {
    try {
      const patients = await Patient.find({});
  
      if (patients.length === 0) {
        return res.json({
          success: false,
          message: "No patients found",
        });
      }
  
      res.json({
        success: true,
        totalPatients: patients.length,
        patients,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });

