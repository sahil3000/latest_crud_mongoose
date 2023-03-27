const express = require("express");
const { userController } = require("../controllers/user");
const router = express.Router();

router.post("/signup", userController.signUp);
router.get("/getUsers", userController.getUsers);
router.get("/getUser/:id", userController.getUser);
router.put("/updateUser/:id", userController.updateUser);
router.delete("/removeUser/:id", userController.deleteUser);

module.exports = router;