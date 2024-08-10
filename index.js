class RateLimitter {

    constructor() {

        // key  = route+userIp 
        // value = count
        this.map = new Map()
    }
    checkKey(userIp, route) {
        const key = route + userIp
        return this.map.has(key)
    }
    set(userIp, route, size, time) {
        const key = route + userIp
        this.map.set(key, [size, new Date(), time,size])
        this.decreaseSize(userIp,route)
    }
    reset(userIp, route) {
        const key = route + userIp
        const value = this.map.get(key)
        this.map.set(key, [value[3], new Date(), value[2],value[3]])
    }

    decreaseSize(userIp, route) {
        const key = route + userIp
        const remaningSize = this.map.get(key)

        if ((new Date ()- new Date(remaningSize[1])) <=remaningSize[2]){
            if (remaningSize[0] <= 0) {
                throw new Error("Api limit is over wait for some minutes ")
            } else {
                this.map.set(key, [remaningSize[0] - 1, remaningSize[1],remaningSize[2],remaningSize[3]])
            }
        }else{
            this.reset(userIp,route)
            this.decreaseSize(userIp,route)
        }
       
    }
}


const express = require("express");

const app = express();
const rateLimitter = new RateLimitter()
app.use(express.json());
app.use((req, res, next) => {
    try {
        const Ip = req.socket.remoteAddress
        const endPoint = req.url

        if (rateLimitter.checkKey(Ip, endPoint)) {
            rateLimitter.decreaseSize(Ip,endPoint)
        } else {
            rateLimitter.set(Ip,endPoint,5,1000*10)
        }
        next()
    } catch (err) {
        return res.json({ err:err.message })
    }


})
app.get("/health-check", async function (req, res) {

    return res.json({ status: 200, message: "100 % working " })
});


app.listen(8000, async () => {
    console.log(`Server Running...8000`)
});



