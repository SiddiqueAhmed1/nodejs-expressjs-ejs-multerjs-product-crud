import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import productRouter from "./routing/productRoutes.js";
import expressEjsLayouts from "express-ejs-layouts";


// init app
const app = express();

// env var
dotenv.config();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.use(expressEjsLayouts);

// public folder
app.use(express.static("public"));

// use router
app.use(productRouter);


// listen server
app.listen(PORT, () => {
  console.log(` server created succesfully ${PORT}`.bgGreen.black);
});
