const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name can't be blank"],
        lowercase: true
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "email can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    password: {
        type: String,
        required: [true, "password can't be blank"],
    }
});
module.exports = mongoose.model("User", userSchema);