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
    get_status,
    add_over_all_sum,
    get_over_all_sum_of_staff,
    update_classroom_teaching,
    update_personal_disposition,
    update_personal_traits,
    update_student_learning,
    update_teacher_learning,
    update_staff_representation,
    data_for_graph,
    get_all_branchheads,add_branch_heads,
    add_status_branch_head,
    get_status_for_branch_head,
    get_branchheaddata,
    update_branchhead
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
router.post("/add_over_all_sum",add_over_all_sum);
router.get("/get_over_all_sum_of_staff/:staff_id",get_over_all_sum_of_staff);


router.patch("/update_classroom_teaching",update_classroom_teaching);
router.patch("/update_personal_disposition",update_personal_disposition);
router.patch("/update_personal_traits",update_personal_traits);
router.patch("/update_student_learning",update_student_learning);
router.patch("/update_teacher_learning",update_teacher_learning);

router.patch("/update_staff_representation",update_staff_representation);
router.get("/data_for_graph/:campus_id",data_for_graph);
router.get("/get_all_branchheads",get_all_branchheads);
router.post("/add_branch_heads",add_branch_heads);
router.post("/add_status_branch_head",add_status_branch_head);

router.get("/get_status_for_branch_head/:staff_id",get_status_for_branch_head);
router.get("/get_branchheaddata/:staff_id",get_branchheaddata);
router.patch("/update_branchhead",update_branchhead);


module.exports = router;