const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");

// Set up CORS options
const corsOptions = {
  origin: "http://localhost:3000", // Make sure to not have a trailing slash
  methods: ["GET", "POST", "DELETE", "PATCH", "PUT"], // Include all methods used by your application
  credentials: true,
};

// Apply CORS with your options
const cors = require("cors")(corsOptions);
app.use(cors);

// Rest of your body-parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Database connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Aezihw123!",
  database: "employeeSystem",
});

const EmployeesRouter = require("./routes/Employees")(db);
app.use("/employees", EmployeesRouter);

app.use(express.static(path.join(__dirname, "lob-dev-app", "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "lob-dev-app/build/", "index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
