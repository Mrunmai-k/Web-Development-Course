import express from "express";

const app = express();
const port = 3000;


app.get("/",(req,res)=>{
    // if(day==0 || day==6)
    //     res.send("<h1>Hey!It's the weekend, it's time to have fun!</h1>");
    // else
    //     res.send("<h1>Hey!It's a weekday, it's time to work hard!</h1>");   

    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard";

    if(day==0 || day==6){
        type = "the weekend";
        adv = "it's time to have some fun"
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    })
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});