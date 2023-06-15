const express = require("express");
const { addNewPatient,getAllPatients, updatePatientDetails, deletePatient, reports} = require('../controllers/patientController');

const router = express.Router();

router.route('/patient/new').post(addNewPatient);
router.route('/patients').get(getAllPatients);
router.route('/patient/update/:id').put(updatePatientDetails);
router.route('/patient/delete/:id').delete(deletePatient);
router.route('/patient/reports').get(reports);




module.exports = router;