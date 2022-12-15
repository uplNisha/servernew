import express from "express";
import student from "../student";
import user from "../user"

let router = express.Router();

router.use("/student",student);
router.use("/user",user);



export default router;