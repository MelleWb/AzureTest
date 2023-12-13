module.exports = function (db) {
  const express = require("express");
  const router = express.Router();

  router.get("/GetEmployees", (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  return router;
};
