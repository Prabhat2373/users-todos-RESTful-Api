const express = require("express");
const app = require("./../app");
const router = express.Router();
const { getUserTodo, getUserById} = require("./../controller/userApiController");

router.route("/todos").get(getUserTodo);
router.route("/todos/users/:id").get(getUserById) 

module.exports = router;