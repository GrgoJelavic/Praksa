const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const studentsRouter = require("./routes/students.router");
const { PORT } = require("./configs/environment.config");

const app = express();



//middlewares
app.use(cors()); //enables all CORS requests
app.use(helmet()); //security
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //Content-Type: application/json

//routes

//routes
app.get("/", (req, res, next) => {
    res.status(404).send("<h1>INVALID ROUTE<H1>");
});

app.use("/api/students", studentsRouter);



//starting a server
app.listen(PORT, () => console.log(`Listeninig to port: ${PORT}`))