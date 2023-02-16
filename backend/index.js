import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mysql from "mysql";


dotenv.config();

//server scaffolding 
const app = express();

// server port
const port = 8000 || process.env.PORT ;

// database connection
const db = mysql.createConnection({
    connectionLimit : 100,
    host:"localhost",
    user:"root",
    password:"",
    database:"stu_info",
    port: 3306,
    insecureAuth: false,
    debug: false
});

// middleware
app.use(express.json());
app.use(cors());

// server main Route
app.get("/", (req,res)=>{
    res.json("server is running fine on port " + port);
})

// get route
app.get("/students", (req,res)=>{
    const q = "SELECT * FROM studentInfo";
    db.query(q, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

// post route
app.post("/students", (req,res)=>{
    console.log(req);
    const q = "insert into studentInfo values (?)";
    const values = [
        req.body.id,
        req.body.name,
        req.body.school_name,
        req.body.email,
        req.body.phone,
        req.body.facebook,
        req.body.instagram,
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json("student have created successfully");
    })
})

// delete route
app.delete("/students/:id", (req,res)=>{
    const deleteId = req.params.id;
    const q = "DELETE FROM studentInfo WHERE id = ?";

    db.query(q,[deleteId], (err,data)=>{
        if(err) return res.json(err);
        return res.json("student have deleted successfully");
    })
})

app.get("/students/:id", (req,res)=>{
    const updateId = req.params.id;
    const q = "SELECT * FROM studentInfo WHERE id = ?";


    db.query(q,[updateId],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

// update route
// app.put("/students/:id", (req,res)=>{
//     const updateId = req.params.id;
//     const q = "update studentInfo set `name`=? , `school_name`=? , `email`=? , `phone`=? , `facebook`=? , `instagram`=? WHERE id = ?";
//     const values = [
//         req.body.name,
//         req.body.school_name,
//         req.body.email,
//         req.body.phone,
//         req.body.facebook,
//         req.body.instagram,
//     ]

//     db.query(q,[...values,updateId], (err,data)=>{
//         if(err) return res.json(err);
//         return res.json("student have updated successfully");
//     })
// })



app.listen(port, ()=>{
    console.log("backend is running");
})

