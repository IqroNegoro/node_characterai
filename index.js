require("puppeteer-extra-plugin-stealth/evasions/chrome.app")
const CharacterAI = require("./client");

const characterAI = new CharacterAI();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return "Test"
});

(async () => {
    // Authenticating as a guest (use `.authenticateWithToken()` to use an account)
    await characterAI.authenticateWithToken('295147567f18e5e24c4e19e2a8ba77bb7c4e4d3a');
  
    // Place your character's id here
    const characterId = "4d8ovfcm0PtyYlWuYOUEiK5OagkMbMmkiaf86FQ0yLk";
  
    const chat = await characterAI.createOrContinueChat(characterId);
  
    // Send a message
    const response = await chat.sendAndAwaitResponse("Joe Mama", true);
  
    console.log(response);
    // Use `response.text` to use it as a string
  })();

app.listen(3000, () => console.log("Running"));

module.exports = app;  