// Define the paintings data as an array of objects
const paintings = [
  {
    "name": "The Starry Night",
    "year": "1889",
    "artist": "Vincent Van Gogh"
  },
  {
    "name": "The Scream",
    "year": "1893",
    "artist": "Edvard Munch"
  },
  {
    "name": "Guernica",
    "year": "1937",
    "artist": "Pablo Picasso"
  }
];

// Get the table element
const table = document.getElementById("paintings");

// Add CSS styles to the table
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.style.paddingLeft = "5px";
table.style.paddingRight = "5px";
table.style.fontFamily = "Calibri";
table.getElementsByTagName("th")[0].style.backgroundColor = "lightgray";

// Add table header
const headerRow = table.insertRow();
const nameHeader = headerRow.insertCell();
const yearHeader = headerRow.insertCell();
const artistHeader = headerRow.insertCell();
nameHeader.innerHTML = "Name";
yearHeader.innerHTML = "Year";
artistHeader.innerHTML = "Artist";

// Loop through the paintings data and add rows to the table
paintings.forEach(painting => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const yearCell = row.insertCell();
  const artistCell = row.insertCell();

  nameCell.innerHTML = painting.name;
  yearCell.innerHTML = painting.year;
  artistCell.innerHTML = painting.artist;
});

// Catch any errors and write them to the console
try {
  // Code that may throw an error goes here
} catch (error) {
  console.error(error);
}
