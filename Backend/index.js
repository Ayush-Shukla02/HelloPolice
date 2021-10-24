import app from "./server.js"
import mongoose from "mongoose";
import node from "./api/nodes.route.js"
import dotenv from 'dotenv';





// port = process.env.PORT || 5000
app.listen(4000, () => {
    console.log('listening on port 4000')
})