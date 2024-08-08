const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());


//CREATE RESTO 
app.post("/resto", async(req,res) => {
    try {
       
       const { name } = req.body;
       const newTodo = await pool.query("INSERT INTO resto (name) VALUES($1) RETURNING *", 
           [name]);
       res.json(newTodo.rows[0]);

    } catch (error) {
       console.error(err.message);
    }
})

//DELETE RESTO
app.delete("/resto/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteResto = await pool.query("DELETE FROM RESTO WHERE resto_id=$1", [id]);
    } catch (error) {
        console.error(error.message);
    }
})


//CHOOSING A RANDOM RESTO
app.get("/resto/random", async(req, res) => {
    try {
        const randomResto = await pool.query("SELECT * FROM resto ORDER BY RANDOM() LIMIT 1");
        if (randomResto.rows.length > 0) {
            res.json(randomResto.rows[0]);
        }
    } catch (error) {
        console.error(error.message);
    }
})


app.listen(5000, () => {
    console.log("server has started");
});

