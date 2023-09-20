// server setup.js
import express from "express";
import ViteExpress from "vite-express";

const port = 3000;

const app = express();

// API ROUTES
app.get("/message", (_, res) => res.send("Hello from express!"));

ViteExpress.listen(app, port, () =>
  console.log(`Express Server is listening on port ${port}...`)
);
