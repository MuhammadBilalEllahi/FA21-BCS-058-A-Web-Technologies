const express = require('express')();


const PORT = 7860;

express.listen(PORT
    ,
    ()=> console.log(`Server Running on ${PORT}`))

 
    // teacher voting ajax example
    // students signin
    // give review
    //or change later

    express.get(

        '/theme',
        (req, res)=> {
            res.send(
                {
                    'textColor' : 'red',
                    "xyz" : "abc"
                }
            );
    
        }
    );