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
    const characterId = "dAftqRdCY9F7vFDmk7JTxi2yKQsqFsRLvqWlyvCE0gY";
  
    const chat = await characterAI.createOrContinueChat(characterId);
  
    // Send a message
    const response = await chat.sendAndAwaitResponse("wht is your name", true);
  
    console.log(response);
    // Use `response.text` to use it as a string
  })();

app.listen(3000, () => console.log("Running"));