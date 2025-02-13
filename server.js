const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Read user credentials from users.json
const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

// Login Route
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    
    // Check if user exists
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
