const express = require("express");
const {RateLimitter} = require("ratelimitter")
const app = express();
const rateLimitter = new RateLimitter()

const middleware1 = rateLimitter.userRateLimitter(5,1000 * 10)
const middleware2 = rateLimitter.userRateLimitter(2,1000 * 10)
app.use(express.json());
app.get("/health-check1", middleware1,async function (req, res) {

    return res.json({ status: 200, message: "100 % working " })
});
app.get("/health-check2", middleware2,async function (req, res) {

    return res.json({ status: 200, message: "100 % working " })
});


app.listen(8000, async () => {
    console.log(`Server Running...8000`)
});