const express = require('express');
const router = express.Router();
const sensorData = require('../models/sensorsModel');
const nodemailer = require('nodemailer');

router.use(express.json());

router.post('/data', (req, res) => {
  const { temperature, pulse } = req.body;

  if (temperature !== undefined && pulse !== undefined) {
    const newData = new sensorData({
      temperature: temperature.toString(), // Converting temperature to string to match the schema
      pulseRate: pulse.toString(), // Converting pulse to string to match the schema
    });

    newData
      .save()
      .then(() => {
        console.log('Data saved to MongoDB.');

        // Checking if temperature is greater than 37 or pulse is greater than 120
        if (temperature > 37 || pulse > 120) {
          sendEmailToDoctor(temperature, pulse);
        }
        else if(temperature < 20 || pulse < 60) {
          sendEmailToDoctor(temperature, pulse);
        }

        // Send the response with the data
        res.json({ success: true, newData });
      })
      .catch((error) => {
        console.error('Error saving data:', error);
        res.status(500).json({ success: false, message: 'Error saving data' });
      });
  } else {
    res.status(400).json({ success: false, message: 'Invalid temperature or pulse value' });
  }
});

router.get('/data/latest', (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  
  sensorData
    .findOne()
    .sort({ _id: -1 }) // Sort in descending order by _id to get the latest inserted data
    .exec()
    .then((latestData) => {
      if (!latestData) {
        // No data found in the database
        return res.status(404).json({ success: false, message: 'No data found' });
      }

      res.json({ success: true, latestData });
    })
    .catch((error) => {
      console.error('Error retrieving latest data:', error);
      res.status(500).json({ success: false, message: 'Error retrieving latest data' });
    });
});




// Function to send email to the doctor
function sendEmailToDoctor(temperature, pulse) {
  // Configuring nodemailer with your email provider details
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: 'saidiagibu100@gmail.com',
      pass: 'iohhmkvqpugthtfx',
    },
    port: 465
  });

  // Compose the email message 
  const mailOptions = {
    from: 'saidiagibu100@gmail.com',
    to: 'saidiagibu100@gmail.com',
    subject: 'High Temperature and Pulse Alert',
    text: `The patient's temperature is ${temperature}°C and pulse is ${pulse}, which is higher than the normal range. Please take appropriate action.`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}


// Route handler to get all temperatures
router.get('/temperatures', (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  // Retrieve temperatures from the database
  sensorData.find({}, 'temperature')
    .then(data => {
      const temperatures = data.map(entry => Number(entry.temperature));
      res.json(temperatures);
    })
    .catch(error => {
      console.error('Error retrieving temperatures:', error);
      res.status(500).json({ success: false, message: 'Error retrieving temperatures' });
    });
});


// Route handler to get all pulse
router.get('/pulses', (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  sensorData
    .find({}, 'pulseRate')
    .then(data => {
      const pulses = data.map(entry => Number(entry.pulseRate)); // Convert pulseRate to number
      res.json(pulses); // Send the pulses array directly
    })
    .catch(error => {
      console.error('Error retrieving temperatures:', error);
      res.status(500).json({ success: false, message: 'Error retrieving temperatures' });
    });
});



module.exports = router;
