const express = require("express");
const app = express();
const db = require("./db/db.config")
require("dotenv").config();
require("./model/book.model")
const bookRoutes = require("./routes/book.route")

// Middleware
app.use(express.json())
app.use("/book", bookRoutes)

app.listen(process.env.PORT, async () => {
    console.log("Server is started at port:", process.env.PORT)
    try {
        await db.authenticate()
        console.log("Connection has been established successfully.")
    } catch (err) {
        // process.exit(1)
        console.log(err.message);
    }
})