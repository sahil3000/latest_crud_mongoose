const User = require("../models/user");

exports.userController = {
    signUp: async function (req, res) {
        const params = req.body;
        try {
            if (params.name && params.email && params.password) {
                const user = await new User({
                    name: params.name,
                    email: params.email,
                    password: params.password,
                })
                const response = await user.save();
                return res.json({ error: false, body: response, msg: "success" });
            } else {
                return res.json({ error: true, body: [], msg: "All fields are mondatory" });
            }
        } catch (err) {
            return res.json({ error: true, body: [], msg: err.message });
        }
    },
    getUsers: async function (req, res) {
        const params = req.body;
        try {
            const response = await User.find({});
            return res.json({ error: false, body: response, msg: "Success" });
        } catch (err) {
            return res.json({ error: true, body: [], msg: err.message });
        }
    },
    getUser: async function (req, res) {
        const params = req.params;
        if (!params.id) {
            return res.json({ error: true, body: [], msg: "Please provide user id" });
        }
        try {
            const response = await User.findOne({ _id : params.id});
            return res.json({ error: false, body: response, msg: "Success" });
        } catch (err) {
            return res.json({ error: true, body: [], msg: err.message });
        }
    },
    updateUser: async function (req, res) {
        const params = {...req.params, ...req.body};
        if (!params.id) {
            return res.json({ error: true, body: [], msg: "Please provide user id" });
        }
        try {
            const response = await User.findByIdAndUpdate(params.id, req.body, { new: true })
            return res.json({ error: false, body: response, msg: "Success" });
        } catch (err) {
            return res.json({ error: true, body: [], msg: err.message });
        }
    },
    deleteUser: async function (req, res) {
        const params = {...req.params, ...req.body};
        if (!params.id) {
            return res.json({ error: true, body: [], msg: "Please provide user id" });
        }
        try {
            const response = await User.findByIdAndRemove(params.id)
            return res.json({ error: false, body: response, msg: "Success" });
        } catch (err) {
            return res.json({ error: true, body: [], msg: err.message });
        }
    },
}