//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

// My Steps:
// 1. Create baxic express server
// 2. handle the get request and show index.html
// 3. import the body-parser and use it as middleware
// 4. Create a function for checking password(pre-processing) and use it as a middleware
// 5. Handle the post request 

import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var password = "";
var isUserAuth = false;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true })); now body-parser is included in express.

function checkPassword(req, res, next) {
    password = req.body['password'];
    if (password === "ILoveProgramming") {
        isUserAuth = true;
    }
    next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (isUserAuth)
        res.sendFile(__dirname + "/public/secret.html");
    else{
        res.sendFile(__dirname + "/public/index.html");
        // res.redirect("/");
    }
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})


