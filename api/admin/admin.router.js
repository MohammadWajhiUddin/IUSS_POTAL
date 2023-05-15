const router = require("express").Router();

const {
    create_user,
    user_login,
    add_employee,
    get_employee,
    get_employee_by_id,
    add_class_room_teaching,
    add_personal_disposition,
    add_student_learning,
    add_teacher_learning,
    add_personal_traits,
    view_faculty_grading,
    get_staff_by_campus_id,
    get_all_staff
} = require("./admin.controller")

router.post("/create_user",create_user);
router.post("/login",user_login);
router.post("/add_employee",add_employee);
router.get("/get_employee",get_employee)
router.get("/get_employee_by_id/:employee_id",get_employee_by_id)
router.post("/add_class_room_teaching",add_class_room_teaching);
router.post("/add_personal_disposition",add_personal_disposition);
router.post("/add_student_learning",add_student_learning);
router.post("/add_teacher_learning",add_teacher_learning);
router.post("/add_personal_traits",add_personal_traits);
router.get("/view_faculty_grading/:staff_id",view_faculty_grading);
router.get("/get_staff_by_campus_id/:staff_campus_id",get_staff_by_campus_id)
router.get("/get_all_staff",get_all_staff)


module.exports = router;