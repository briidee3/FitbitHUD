/*
 * Entry point for the companion app
 */

console.log("Companion code started");


// Import Messaging API from Fitbit
import * as messaging from "messaging";

// Opening connection
messaging.peerSocket.addEventListener("open", (evt) => {
  sendMessage();
});

// Error handling
messaging.peerSocket.addEventListener("error", (err) => {
  console.error(`Connection error: ${err.code} - ${err.message}`);
});


// Testing sending a message
function sendMessage() {
  // Sample data
  const data = {
    title: 'My test data',
    isTest: true,
    records: [1, 2, 3, 4]
  }
  
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    // Send the data to peer as a message
    messaging.peerSocket.send(data);
  } else {
    console.error("Error: Connection is not open");
  }
}