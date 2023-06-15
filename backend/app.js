const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');
const sensor = require('./controllers/sensorsController')
// const { SerialPort } = require('serialport');
// const {ReadlineParser} = require('@serialport/parser-readline');
// const sensorData  = require('./models/sensorsModel')
// const port = new SerialPort({
//   path: "/dev/ttyACM0",
//   baudRate: 9600
// });
// const parser = port.pipe(new ReadlineParser({ delimiter : 'r\n' }));

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(sensor);
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});




// Route Imports
const user = require("./routes/userRoute");
const patient = require('./routes/patientRoute');

app.use("/api/v1", user);
app.use('/api/v1', patient)

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;









































/*#include <DHT.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <SoftwareSerial.h>
//#include <ESP8266WiFi.h>
//#include <ESP8266HTTPClient.h>

// Constants
#define DHTPIN 7          // Temperature and humidity sensor pin
#define DHTTYPE DHT11     // DHT 11

int PULSE_SENSOR_PIN = A0;  // Pulse sensor analog pin

// WiFi credentials
//const char* ssid = "YOUR_WIFI_SSID";
//const char* password = "YOUR_WIFI_PASSWORD";
//
//// MongoDB API endpoint
//const char* apiEndpoint = "YOUR_MONGODB_API_ENDPOINT";

// Variables
DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2);

SoftwareSerial espSerial(0, 1); // RX, TX

int t;              // Temperature value
int pulseRate = 0;  // Pulse rate

// Pulse sensor variables
int sampleCounter = 0;
int lastBeatTime = 0;
int lastBeatTimeout = 2000;  // Timeout value to reset pulse detection
boolean pulseDetected = false;
int pulse = 0;

void setup() {
  Serial.begin(9600);
  Serial.println("Temperature and Pulse Sensor Test");

  dht.begin();
  lcd.init();
  lcd.backlight();

//  // Initialize software serial
//  espSerial.begin(9600);
//
//  // Connect to WiFi
//  WiFi.begin(ssid, password);
//  while (WiFi.status() != WL_CONNECTED) {
//    delay(1000);
//    Serial.println("Connecting to WiFi...");
//  }
//  Serial.println("Connected to WiFi");
}

void loop() {
  t = dht.readTemperature();
  // Read pulse sensor value
  int pulseSensorValue = analogRead(A0);
  
  // Calibrate the pulse sensor to improve accuracy:
  pulse = map(pulseSensorValue, 0, 1023, 40, 180); // convert to BPM
  Serial.print("Temp: ");
  Serial.print(t);
  Serial.print(" °C, Pulse: ");
  Serial.print(pulse);
  Serial.println(" BPM");

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Temp: ");
  lcd.print(t);
  lcd.print("C");

  lcd.setCursor(0, 1);
  lcd.print("Pulse: ");
  lcd.print(pulse);
  lcd.print(" BPM");

  delay(1000);

  // Check for pulse detection every 2 seconds
  if (millis() - lastBeatTime > 2000) {
    if (detectPulse()) {
      pulseDetected = true;
      pulseRate = pulse;
      lastBeatTime = millis();
//      sendDataToMongoDB();
    }
    else {
      pulseDetected = false;
      pulseRate = 0;
    }
  }
}

boolean detectPulse() {
  int sensorValue = analogRead(PULSE_SENSOR_PIN);

  if (sensorValue < 600) {
    if (!pulseDetected && (sampleCounter > 15)) {
      pulseDetected = true;
      return true;
    }
  }
  else {
    pulseDetected = false;
    sampleCounter = 0;
  }

  sampleCounter++;
  return false;
}

//void sendDataToMongoDB() {
//  // Create JSON payload
//  String payload = "{\"temperature\": " + String(t) + ", \"pulse\": " + String(pulse) + "}";
//
//  // Send HTTP POST request to MongoDB API
//  HTTPClient http;
//  http.begin(apiEndpoint);
//http.addHeader("Content-Type", "application/json"); */