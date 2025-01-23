const express = require("express");
const router = express.Router();

const validationParamId = require("../middlewares/validationParamId");
const postsController = require("../controllers/postsController");

router.use("/:id", validationParamId);

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
