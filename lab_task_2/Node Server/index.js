const express = require('express')();


const PORT = 7860;

express.listen(PORT
    ,
    ()=> console.log(`Server Running on ${PORT}`))