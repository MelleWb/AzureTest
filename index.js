const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const app = express();
const path = require("path");
const fs = require("fs");

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

var db = mysql.createConnection({
  host: "test-melle-database.mysql.database.azure.com",
  user: "MelleCrud",
  password: "Aezihw123!",
  database: "employeesystem",
  port: 3306,
  ssl: {
    ca: fs.readFileSync(
      "C:\\Users\\melle\\OneDrive\\Documenten\\DigiCertGlobalRootCA.crt.pem"
    ),
  },
});

app.get("/hello", (req, res) => {
  res.send("Hello Server!");
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

const EmployeesRouter = require("./routes/Employees")(db);
app.use("/employees", EmployeesRouter);

app.use(express.static(path.join(__dirname, "client", "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build/", "index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
