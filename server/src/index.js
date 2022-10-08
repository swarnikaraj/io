const express = require("express");

const { register, login ,Users} = require("./controllers/auth.controller");
const actorController = require("./controllers/actor.controller");
const movieController=require("./controllers/movie.controller")
const producerController=require("./controllers/producer.controller")
const app = express();

app.use(express.json());

app.use("/actor", actorController) 
app.use("/movie", movieController) 
app.use("/producer", producerController) 

// /register /login
app.post("/register", register);
app.post("/login", login);
app.get("/users", Users);

// app.use("/post", postController);

module.exports = app;