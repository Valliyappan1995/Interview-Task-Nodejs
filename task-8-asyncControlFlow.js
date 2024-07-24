const fs = require("fs").promises;

async function readAndWriteFiles() {
  try {
    const data = await fs.readFile("input.txt", "utf8");
    const modifiedData = data.toUpperCase();
    await fs.writeFile("output.txt", modifiedData);
    console.log("Modified content written to output.txt");
  } catch (err) {
    console.error("Error:", err);
  }
}

readAndWriteFiles();
