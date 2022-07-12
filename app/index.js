/*
 * Entry point for the watch app
 */

console.log("App code started");


// Import Messaging API from Fitbit
import * as messaging from "messaging";

// Opening connection
messaging.peerSocket.addEventListener("open", (evt) => {
  console.log("Ready")
});

// Error handling
messaging.peerSocket.addEventListener("error", (err) => {
  console.error(`Connection error: ${err.code} - ${err.message}`);
});


// Receive message from companion
messaging.peerSocket.addEventListener("message", (evt) => {
  console.error(JSON.stringify(evt.data));
});
