const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Received credentials:", username, password);

  if (username === "demo" && password === "demo") {
    res.json({ sessionId: uuidv4() });
  } else {
    res.status(401).send("Authentication failed");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
