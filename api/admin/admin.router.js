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
    get_all_staff,
    ApproveFaculty,
    get_approved_staff_for_director,
    get_classroom_teaching_data,
    get_personal_disposition_data,
    get_personal_traits_data,
    get_student_learning_data,
    get_teacher_learning_data,
    add_comments,
    get_comments,
    add_status,
    get_status
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
router.get("/get_staff_by_campus_id/:staff_campus_id",get_staff_by_campus_id);
router.get("/get_all_staff",get_all_staff);
router.patch("/ApproveFaculty",ApproveFaculty);
router.get("/get_approved_staff_for_director/:staff_campus_id",get_approved_staff_for_director);
router.get("/get_classroom_teaching_data/:staff_id",get_classroom_teaching_data);
router.get("/get_personal_disposition_data/:staff_id",get_personal_disposition_data);
router.get("/get_personal_traits_data/:staff_id",get_personal_traits_data);
router.get("/get_student_learning_data/:staff_id",get_student_learning_data);
router.get("/get_teacher_learning_data/:staff_id",get_teacher_learning_data);
router.post("/add_comments",add_comments);
router.get("/get_comments/:staff_id",get_comments);
router.post("/add_status",add_status);
router.get("/get_status/:staff_id",get_status);


module.exports = router;