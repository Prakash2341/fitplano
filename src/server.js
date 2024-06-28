// const express = require('express');
// const bodyParser = require('body-parser');
// const xlsx = require('xlsx');
// const fs = require('fs');

// const app = express();
// const port = 3001; // Port for your backend server

// app.use(bodyParser.json());

// // Endpoint to handle feedback submission
// app.post('/submit-feedback', (req, res) => {
//   const { feedback } = req.body; // Assuming your frontend sends feedback as { feedback: 'Feedback text' }
//   const fileName = 'feedback.xlsx';
//   const filePath = `${__dirname}/${fileName}`;

//   try {
//     let wb;
//     if (fs.existsSync(filePath)) {
//       // If file exists, load existing workbook
//       const existingData = fs.readFileSync(filePath);
//       wb = xlsx.read(existingData, { type: 'buffer' });
//     } else {
//       // If file doesn't exist, create a new workbook
//       wb = xlsx.utils.book_new();
//     }

//     const ws = xlsx.utils.json_to_sheet([{ Feedback: feedback }]); // Convert JSON to worksheet
//     xlsx.utils.book_append_sheet(wb, ws, 'Feedback'); // Append worksheet to workbook
//     xlsx.writeFile(wb, filePath); // Write workbook to file

//     res.status(200).send('Feedback submitted successfully and stored in Excel.');
//   } catch (error) {
//     console.error('Error writing feedback to Excel:', error);
//     res.status(500).send('Failed to store feedback in Excel.');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
