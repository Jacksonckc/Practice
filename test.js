const fs = require('fs');

// Read the JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading data:', err);
    return;
  }

  const items = JSON.parse(data);

  console.log('Item List:');
  items.forEach((item) => {
    console.log(`- ${item.name}`);
  });
});
