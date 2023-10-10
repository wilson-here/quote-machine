const express = require("express");
const puppeteer = require("puppeteer");

const app = express();
const port = process.env.PORT || 3001;

// Define an endpoint to capture a screenshot
app.get("/capture", async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://example.com"); // Replace with your URL
    const screenshot = await page.screenshot();
    await browser.close();

    res.type("image/png").send(screenshot);
  } catch (error) {
    console.error("Error capturing screenshot:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
