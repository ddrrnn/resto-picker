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
       const newResto = await pool.query("INSERT INTO resto (name) VALUES($1) RETURNING *", 
           [name]);
       res.json(newResto.rows[0]);

    } catch (error) {
       console.error(err.message);
    }
})

//DELETE RESTO
app.delete("/resto/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteResto = await pool.query("DELETE FROM resto WHERE resto_id=$1", [id]);
        res.json("resto was deleted");
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

//DISPLAYING ALL RESTOS
app.get("/resto", async(req, res) => {
    try {
        const sortOrder = req.query.sortOrder || 'desc'; //sorting
        const allRestos = await pool.query("SELECT * FROM resto ORDER BY count " + sortOrder);
        res.json(allRestos.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//INCREMENT COUNT
app.put("/resto/:id/increment", async (req, res) => {
    try {
        const { id } = req.params; 
        const updateCount = await pool.query(
            "UPDATE resto SET count = count + 1 WHERE resto_id = $1 RETURNING *",
            [id]
        );
        res.json(updateCount.rows[0]); 
    } catch (error) {
        console.error(error.message);
    }
});


app.listen(5000, () => {
    console.log("server has started");
});

