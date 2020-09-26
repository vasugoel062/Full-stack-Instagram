const express = require("express");
const postRouter = new express.Router();

// // POST Routes
const { createPost , getPost } = require("../controller/postController");
postRouter.route("/").post(createPost);
postRouter.route("/:post_id").get(getPost);
// // read  => GET ONE
// postRouter.route("/:post_id").get(getPost).patch(updatePost).delete(deletePost);
module.exports = postRouter;