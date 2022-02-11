const { Router } = require("express");
const { getStudent,updateStudent, createStudent ,getAllStudents,deleteStudent} = require("../controllers/students");
const router = Router();

// router.route("").get(getStudents).post(createStudent);
router.route("").post(createStudent).get(getAllStudents);
router.route("/:id").get(getStudent).put(updateStudent)
router.route("/:id").delete(deleteStudent);

module.exports = router;
