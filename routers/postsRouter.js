const express = require("express");
const router = express.Router();

const postsController = require("../controllers/postsController");

//index
router.get("/", postsController.index);

//show
router.get("/:id", postsController.show);

//create
router.post("/", (req, res) => {});

// update
router.put("/:id", (req, res) => {});

//modify
router.patch("/:id", (req, res) => {});

//destroy
router.delete("/:id", postsController.destroy);

module.exports = router;
