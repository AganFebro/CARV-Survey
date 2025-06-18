function doGet(e) {
  return ContentService.createTextOutput("The app is running correctly, but this endpoint only accepts POST requests.");
}

function doPost(e) {
  try {
    // Get the active sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data from the request
    var discord = e.parameter.discord || "Unknown";
    var uidCarv = e.parameter.uidCarv || "Unknown";     // Added UID CARV field
    var walletAddress = e.parameter.walletAddress || "Unknown";  // Added Wallet Address field
    var gamenight = e.parameter.gamenight || "";
    var guardian = e.parameter.guardian || "";
    var region = e.parameter.region || "";
    var games = e.parameter.games || "";
    var carvpass = e.parameter.carvpass || "";
    var infiniteplay = e.parameter.infiniteplay || "";
    var events = e.parameter.events || "";
    var feedback = e.parameter.feedback || "No feedback";
    var timestamp = new Date();
    
    // Log received data for debugging
    Logger.log("Received form submission:");
    Logger.log("Discord: " + discord);
    Logger.log("UID CARV: " + uidCarv);
    Logger.log("Wallet Address: " + walletAddress);
    Logger.log("Game Night: " + gamenight);
    
    // Append data to the sheet
    sheet.appendRow([
      discord,
      uidCarv,           // Added UID CARV to the row
      walletAddress,     // Added Wallet Address to the row
      gamenight, 
      guardian, 
      region, 
      games, 
      carvpass,
      infiniteplay,
      events,
      feedback,
      timestamp
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // Log the error
    Logger.log(error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
