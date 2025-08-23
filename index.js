
// Main entry point for HarmonyX Pro
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;

// Import the server logic
require('./server.js');
