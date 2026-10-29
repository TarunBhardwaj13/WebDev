//middleware function
const express = require("express");
const app = express();

const checkAge = (req, res, next) => {
    const age = 20;

    if (age >= 18) {
        console.log("Age verified!");
        next();
    } else {
        
        res.send("Access denied! You must be 18 or older.");
    }
};

app.get("/home", checkAge, (req, res) => {
    res.send("Welcome! You can access this page.");
});

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
});
