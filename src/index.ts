// const express = require("express"); //for plain JS we can directly define like this//

import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express(); //setuping the express//
const port = process.env.PORT;
app.use(express.json());

//we need to define our ROUTES//
app.get("/", (req, res) => {
  res.send("Hello from API");
});

let users = [
  {
    id: 1,
    name: "karthik",
    age: "",
  },
  {
    id: 2,
    name: "main",
  },
  {
    id: 3,
    name: "Padmesh",
  },
  {
    id: 4,
    name: "Varsha",
  },
];

//CREATE//
app.post("/users", (req, res) => {
  const newUsers = {
    name: req.body.name,
    age: req.body.age,
    id: Date.now(),
  };
  users.push(newUsers);
  res.json(newUsers);
});

//Simple GET endpoint//
//READ//
app.get("/users", (req, res) => {
  res.json(users);
});

//already erukkura data uh nama id la mention panni we can update it!!//
//UPDATE//
app.put("/users", (req, res) => {
  const { id, name, age } = req.body;
  users = users.map((value) => {
    if (value.id === id) {
      value.name = name;
      value.age = age;
    }
    return value;
  });
  res.json(users);
});

//DELETE//
app.delete("/users", (req, res) => {
  const { id } = req.body;
  users = users.filter((value) => value.id !== id);
  res.json(users);
});

//Using middleware - For Acessing//
const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader === "mysecretvalue") {
    next();
  } else {
    res.status(401);
    res.json({ msg: "No access" });
  }
};

//GET one user//
app.get("/users/:id", isAuthorized, (req, res) => {
  const id = +req.params.id;
  const user = users.filter((value) => value.id === id);
  res.json(user);
});

//START//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
