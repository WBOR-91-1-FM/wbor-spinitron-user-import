fs = require('fs');

// Get the filename from command line arguments
const filename = process.argv[2] || 'data.csv';

// Validate the file is a .csv
if (!filename.endsWith('.csv')) {
  console.error('Error: The provided file must be of type .csv.');
  process.exit(1);
}

// Read the CSV file
const csvData = fs.readFileSync(filename, 'utf8');

// Function to convert CSV to JavaScript array
function csvToArray(csv) {
  const lines = csv.split('\n');
  const headers = lines[0].split(',').map(header => header.trim());
  const result = [];

  // Ingest each line
  for (let i = 1; i < lines.length - 1; i++) {
    const currentLine = lines[i].split(',').map(value => value.trim());
    const entry = {};

    // Ensures each entry maintains the same structure
    for (let j = 0; j < headers.length; j++) {
      entry[headers[j]] = currentLine[j];
    }

    result.push(entry);
  }

  return result;
}

// Run script
const dataArray = csvToArray(csvData);
console.log(dataArray);