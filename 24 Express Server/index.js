import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
})

app.get("/contact",(req,res) => {
    res.send("Contact: +12 123456789<br>Mail:abc@yahoo.com");
})

app.get("/about",(req,res) => {
    res.send("This is a practice Express server to understand HTTP requests");
})

app.post("/register",(req,res) => {
    res.sendStatus(201);
})

app.put("/user/mrunmai",(req,res) => {
    res.sendStatus(200);
})

app.patch("/user/mrunmai",(req,res) => {
    res.sendStatus(200);
})

app.delete("/user/mrunmai",(req,res) => {
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}.`);
})