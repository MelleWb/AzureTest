module.exports = function (db) {
  const express = require("express");
  const router = express.Router();

  router.use(express.json());

  // Importing controllers
  const GetEmployees = require("../Controllers/Employees/GetEmployees")(db);
  router.get("/GetEmployees", GetEmployees);

  const CreateEmployee = require("../Controllers/Employees/CreateEmployee")(db);
  router.post("/CreateEmployee", CreateEmployee);

  const UpdateEmployee = require("../Controllers/Employees/UpdateEmployee")(db);
  router.put("/UpdateEmployee", UpdateEmployee);

  const DeleteEmployee = require("../Controllers/Employees/DeleteEmployee")(db);
  router.delete("/DeleteEmployee", DeleteEmployee);
  return router;
};
