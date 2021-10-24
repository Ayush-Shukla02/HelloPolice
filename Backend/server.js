// this is a test file
import express from "express"
import path from "path";
import node from "./api/nodes.route.js"
const app = express();

app.use(express.json());

app.use("/api/nodes", node)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app;