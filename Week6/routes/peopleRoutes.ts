import express = require("express");
import {getPerson, createPerson} from "../controllers/peopleController";

const router = express.Router();

router.route("/").post(createPerson);
router.route("/:id").get(getPerson);
export default router;