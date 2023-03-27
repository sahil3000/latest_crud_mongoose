const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/blog_database");
        console.log("Mongodb connected successfully")
    } catch (err) {
        console.log("failed to connect to mongodb")
    }
}

module.exports = connectDB;
