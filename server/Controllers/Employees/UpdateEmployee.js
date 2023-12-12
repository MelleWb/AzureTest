module.exports = function (db) {
  const express = require("express");
  const router = express.Router();

  router.put("/UpdateEmployee", (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    db.query(
      "UPDATE employees SET wage = ? WHERE id = ?",
      [wage, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  return router;
};
