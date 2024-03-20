const express = require('express');
const server = express();
const PORT = 7860;

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const teachers =
    [{
        id: 1,
        t_name: "John",
        t_occupation: "Professor Mathemeatics",
        rating: "3.5",
        t_reviews: [""],

    },
    {
        id: 2,
        t_name: "Ahmed",
        t_occupation: "Professor English",
        rating: "4.9",
        t_reviews: ["good", "clarity"]
    }]


server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

server.listen(PORT
    ,
    () => console.log(`Server Running on ${PORT}`))


// teacher voting ajax example
// students signin
// give review
//or change later

server.get(

    '/teachers',
    (req, res) => {
        res.send(teachers);
    }
);

server.get(

    '/',
    (req, res) => {
        res.send("UnAuthorized");
    }
);

server.post("/teachers", (res, req) => {
    console.log(res.body)
    console.log(req)
    return res.json(
        { "t_name": req.body.t_name, "t_occupation": req.body.t_occupation, "rating": req.body.rating, "t_reviews": [...req.body.t_reviews] }
    )
})

// server.put('teachers/:id', (rq,res)=>{
//     const teacherId = parseInt(req.params.id);
//     const updatedTeacher = req.body;
//     console.log(updatedTeacher)
//     const index = teachers.findIndex(teacher => teacher.id === teacherId);
//     if (index !== -1) {
//         teachers[index] = { ...teachers[index], ...updatedTeacher };
//         res.send("Teacher updated successfully");
//     } else {
//         res.status(404).send("Teacher not found");
//     }
// })


server.get(
    '/teachers/:id', (req, res) => {
        const t_id = parseInt(req.params.id)
        const teacher = teachers.find(teacher => teacher.id === t_id);
        if (teacher) {
            res.send(teacher);
        } else {
            res.status(404).send("Teacher not found");
        }
    }
)

server.use(express.json())