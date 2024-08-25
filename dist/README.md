# SHADOW-RATE-LIMITTER PACKAGE BUNDLE<br/>
<!-- markdownlint-disable-next-line -->
<p align="center">
  <a href="https://shadow-ui-react-example.vercel.app/" rel="noopener" target="_blank"><img width="250" height="150" src="https://lh3.googleusercontent.com/fife/ALs6j_GIO-J2oINJgCPKGgQNz9xIDlfb0B6iiruNNOX4_3D9N9jxLnEFLl9hyRQEUCm38uJupNP5mflyqVmbl_2p6EdQgCzWlaSn0DkiCEB2b9uY-n2TpcgmjtVDqamviB386v5qZHIyjdIndU0uD67ztYHs2ZZjgwwceHwGNNDKaAhAG_F7Bi0uxY_sKVWRVE0N282drKmaw-_h5e-cSy46cxt_opDHiBmZarYdSfbvkMMuDDtPoj1x4x1io3wAzTxS8fu4iuUQpgs1feJ6Y7zHSoUFkx-dhwoTKoB2Z0m4LXNFklV7ST_OLPlzXGIl4cN1cVqr7q7q6xIqZAdn1CcZMriJsRvOegWDnrPkyTjwh-Y9RhBPHkBxjWqqjZJMb-RbOQddiVbrdg2XPJYDw5VaeKU6EiJlPGkPIRjTN0mFlIRwUEGNS1A1YJUPKhGTTzXY9gSO_fspwAVunWsD4vEereYwkaNDWtCzmBWDg11HOfNDiOuiqN5qnC0uEy7FJhHogOqxibDxq_VPv0bOYSklaLltJGYRhU-9ZJJ8aPKh2kDS6qMDfR7qliWFyRcvlKTEgJzbXCxeArs93MDa7m-ifsGw6mjphOrmvr_GrzVcLvaF2sBry4oi9K1tsGexTmHXaKxG18bYhHbP4je-QUJ1h7ai0BMkygRidRbaYbWpH5_oxkT66U3Hu4RPGG12Gfh3ofyQdFBTYFsv61CSGZmgSvj4ItEXE0-o5hyWxF4HeGGa3pcX8-TrnCnBl-NYt9TI2jnARJoVojVLNFBLQ4mca5p6xtgeHZZCyK1nEpaFNIdGGqUxlaIMVWTJnsP0K9hMl-_i5mgmwdltuCV7yiBX8uwHWTSUYgYZ1HF13cCxYdVL3JxE1nv2ggwslLOCkGt-jGYSSk0OqvrFB2Mk4Lseyv_-NBi1FMMRnhwMoZb5EtyAcw8zLzfLZK1A1xuu0sG4zYdKoXyHTZD3ebGP_Ll8PsC3VcgQhdHYFstdfQYtWJ1XtTIOnBtd0gZwZYxjlGAz9SvHpDlKCDTeWN3XT5EUfunxCpIW3jC8aptba0dfaJHsiAwTAMzXykBOSxECic1NzZ5nsugnHEiNiJ-UK6wkyDaJa5arwlISOYplC1aCDX0swoVDy0aIIzndjlAV9O_VGKEWzGTAS2RKKkkcDawSwe9bPMmEwZaE74SMyXi5A-4A0Sw4SbHEsids0Lh8Ooj-uZQtKU5Rt9puibRMnCUmYCwdNAiBl_ZfzfquESXTT1E8LbyCBt-T7fLm4lU_m7tVAYPwAhy0FTPIz-KUREPXGx3jJewT72c8hCCvFOZyKNoq_lQbbNaY507TYg7GqXpESQC_pdcRKX3ZSp0iOIG_A_0WlhsmI8d3Ig4_qFfMAqoVszwstZL96ZmaZ0iCj4tmJMIuiuHiK_u7StuS5qU5gaOQFq23EO5NH4F3I7htFrvLmWpUVJ3kqRloaI8qlPXfpaPeTNW5ClFtricd6CTssf4PZjsKSpURqQyQrj7o7HvAFau1C2xlPoDbl-vJ11co_gyrnA2cYdfiLiXblHVinueGH-VZnNP2m8PYOMj0VVBAmRQVh1nDFIdLSKDOrkUVw2FkP_hLwiVmqtSK=w1920-h868" alt="shadow-ui" ></a>
</p>

#### checkout this Ui component created by shadow:- https://github.com/shubham9069/Shadow-UI-React-Example

## Badges
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Related Link


 - [NPM](https://www.npmjs.com/package/shadow-rate-limitter)

 To install this package into another application as part of its production build steps, you can follow these general steps:-<br/>
 
 **1. Run npm install:**
 during the production build process, run npm install to install dependencies. npm will fetch the package specified in the package.json and install it into the node_modules directory of your project.<br/>
 
 **2. Include the Package in Your Project:**
 Run this command<br/>
 
 ```bash
  npm i shadow-rate-limitter
```
<br/>

## Step to use:-

 ```javascript
  const {RateLimitter} = require("shadow-rate-limitter")
```

 ```javascript
  const rateLimitter = new RateLimitter()
  const middleware1 = rateLimitter.userRateLimitter(max_Request, Time)
```
**MiddleWare Function:-**
 ```javascript
  const middleware1 = rateLimitter.userRateLimitter(max_Request, Time)
```
  | Parameter | Type     | Description                |
  | :-------- | :------- | :------------------------- |
  | `max_Request` | `Number` | **Required**. No of Request Allow|
  | `Time` | `Number` | **Required**. Time period of (Time should be in milli secound )|


**Example:-** 
 ```javascript
const express = require("express");
const {RateLimitter} = require("shadow-rate-limitter")
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
```
<br/>
 
  


## License

[MIT](https://choosealicense.com/licenses/mit/)

 


