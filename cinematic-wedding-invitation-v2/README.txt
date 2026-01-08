SETUP GOOGLE SHEETS RSVP:

1. Create Google Sheet
2. Extensions → Apps Script
3. Paste code:

function doPost(e){
  var sheet=SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Sheet1");
  sheet.appendRow([e.parameter.name,e.parameter.attendance,new Date()]);
}

4. Deploy as Web App → Anyone
5. Paste URL into script.js (YOUR_GOOGLE_SCRIPT_URL)
