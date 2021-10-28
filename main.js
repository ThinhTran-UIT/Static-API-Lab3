const express = require('express');
const app = express();
const swagger = require("./swagger.js")
const PORT = process.env.PORT || 8888;
//Load APIs Docs
swagger(app);

//Middlware for POST and PUT (Must Have)
app.use(express.urlencoded({extended: true})); //Get body
app.use(express.json());

//Loading Controllers
const Students = require("./api/controllers/studentsControllers");

//Loading Routes
const StudentsRoutes = require("./api/routes/studentsRoutes");

//Call Students Routes
StudentsRoutes(app);

//Display Error When Fail URL
app.get("*", (req,res) => {
    res.status("404").send({url : req.originalUrl + "not found"})
});

//Listen PORT
app.listen(PORT, () => console.log("Sever is running at port: "+ PORT));
