/* IOT PATIENT MONITORING SYSTEM 
WEB APPLICATION BACKEND 
BY SAIDI AGIBU AND 
AUBREY THABO DUBE */

// const express = require('express');
// const app = express();
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const app = require("./app");
const express = require("express");
const connectDatabase = require("./config/database");
//const {PORT } = require("./config/config.env")
const PORT = process.env.PORT || 4000;
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Connecting to database
connectDatabase();



const server = app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});

/*
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';

// Connection URL
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if (err) throw err;
  console.log("Connected successfully to server");
  const db = client.db('mydatabase');

  // Connect to the ESP8266 and get the data
  const esp8266 = require('esp8266');
  esp8266.connect(function(err) {
    if (err) throw err;
    esp8266.getData(function(err, data) {
      if (err) throw err;

      // Insert the data into the 'sensors' collection
      db.collection('sensors').insertOne(data, function(err, res) {
        console.log("Data inserted successfully");
        client.close();
      });
    });
  });
});
*/










