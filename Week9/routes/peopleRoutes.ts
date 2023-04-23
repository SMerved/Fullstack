import express from 'express';
import {getPerson, createPerson, getAllPeople, updatePersonFull, deletePerson, updatePersonPartial} from "../controllers/peopleController";

const router = express.Router();

router.route("/").get(getAllPeople).post(createPerson);
router.route("/:id").get(getPerson).put(updatePersonFull).patch(updatePersonPartial).delete(deletePerson);
export default router;