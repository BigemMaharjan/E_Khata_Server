const { Router } = require("express");
const router = Router();

const connectDB = require("../services/db");

//API FOR REGISTER
//Insert
router.post("/register", (req, res) => {
  const { id, fullname, username, email, password } = req.body;
  console.log(req.body);
  connectDB.query(
    "insert into user(id, fullname, username, email, password) values(?,?,?,?,?);",
    [id, fullname, username, email, password],
    (error, rows, fields) => {
      if (!error) {
        res.json({ Status: "User saved" });
      } else {
        console.log(error);
      }
    }
  );
});

//Retrieve all
router.get("/users", (req, res) => {
  connectDB.query("select * from user;", (error, rows, fields) => {
    if (!error) {
      res.json(rows);
    } else {
      console.log(error);
    }
  });
});

//Retrieve via id
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  connectDB.query(
    "select * from user where id = ?;",
    [id],
    (error, rows, fields) => {
      if (!error) {
        res.json(rows);
      } else {
        console.log(error);
      }
    }
  );
});

//Update
router.put("/users/:id", (req, res) => {
  const { id, fullname, username, email, password } = req.body;
  console.log(req.body);
  connectDB.query(
    "update user set fullname = ?, username = ?, email = ?, password = ?where id = ?;",
    [fullname, username, email, password, id],
    (error, rows, field) => {
      if (!error) {
        res.json({ Status: "User updated" });
      } else {
        console.log(error);
      }
    }
  );
});

//Delete
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  connectDB.query(
    "delete from user where id = ?;",
    [id],
    (error, rows, fields) => {
      if (!error) {
        res.json({ Status: "User deleted" });
      } else {
        res.json({ Status: error });
      }
    }
  );
});

// API FOR LOGIN
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  connectDB.query(
    "select * from user where username=? AND password=?;",
    [username, password],
    (error, rows, fields) => {
      if (!error) {
        res.json({ rows });
      } else {
        res.json({ Status: error });
      }
    }
  );
});

module.exports = router;
