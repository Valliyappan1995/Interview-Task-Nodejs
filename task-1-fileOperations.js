const fs = require("fs");

const inputFile = "input.txt";
const outputFile = "output.txt";

fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const modifiedData = data.toUpperCase(); // Example modification: converting text to uppercase

  fs.writeFile(outputFile, modifiedData, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log(`Modified content written to ${outputFile}`);
  });
});
