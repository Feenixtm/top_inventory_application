import express from "express";
import dotenv from "dotenv"
dotenv.config();
import path from "node:path";
import router from "./routes/routes.js";

const app = express();

const currentDirectory = import.meta.dirname;
app.set("views", path.join(currentDirectory, "views"));
app.set("view engine", "ejs");

// Use CSS
app.use(express.static(path.join(currentDirectory, "public")))

// Take data from forms
app.use(express.urlencoded({ extended: true }))

app.use("/", router);

const PORT = process.env.PORT || 5051;

app.listen(PORT, () => {
    console.log("Listening to Port: " + PORT)
})