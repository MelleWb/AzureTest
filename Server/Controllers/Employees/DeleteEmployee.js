module.exports = function (db) {
  const express = require("express");
  const router = express.Router();

  router.delete("/DeleteEmployee/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  return router;
};
