const express = require("express");
const app = express();
const connectDB = require("./models/connection");
const userRoutes = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
    res.send("welcome to blog");
});
connectDB();
app.listen(3000, () => {
    console.log("Server running at port 3000");
});