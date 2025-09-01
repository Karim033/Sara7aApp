import express from "express";
import bootstrap from "./app.controller.js";
import dotenv from "dotenv";
dotenv.config({path:"./src/config/.env"});
import chalk from "chalk";
const app = express();
const port = process.env.PORT || 5000;

await bootstrap(app, express);

app.listen(port, () =>
  console.log(
    chalk.bgGreen(chalk.black(`Example app listening on port ${port}!`))
  )
);
