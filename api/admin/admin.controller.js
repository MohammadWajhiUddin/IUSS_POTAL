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
    get_over_all_sum_of_staff
} = require("./admin.service");


const {genSaltSync,hashSync,compareSync} = require("bcrypt")
const {sign} =  require("jsonwebtoken")


module.exports={
    create_user:(req,res)=>{
        const body = req.body;
        //const salt = genSaltSync(10);
       // body.user_password = hashSync(body.user_password,salt);
        create_user(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
    },
    
    user_login: (req, res) => {
        const body = req.body;
        user_login(body,(err,results)=>{

        if(err){
            return res.status(500).json({
                success:0,
                message: "Database Connection Error",
            });
        }
        if(!results){
            console.log(err)
            return res.json({
                success:0,
                message: "Invalid Email Or Password",
            });
        }
       // const jsontoken = sign({result:results.admin_email+results.admin_password},"SZABIST_NCBC_DASHBOARD",{expiresIn:"1h"});
        return res.status(200).json({
            success:1,
            message: "User Successfully Login",
            data:results,
        

        });
        })
      },

    add_employee:(req,res)=>{
        const body = req.body;
      add_employee(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
    },

    get_employee:(req,res)=>{
        get_employee((err,results)=>{
            if(err){
                return res.json({
                    status:0,
                    message:"Error in connection"
                });
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"failed to get any admin"
                });
            }
            return res.json({
                status:1,
                message1:"Admins fetched Successfully",
                message:results
            })
        })
    },

    get_employee_by_id:(req,res)=>{
        const employee_id = req.params.employee_id;
        get_employee_by_id(employee_id,(err,results)=>{
            if(err){
               return
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Admin Successfully Found",
                data:results
            })
        })
    },

    add_class_room_teaching:(req,res)=>{
        const body = req.body;
        add_class_room_teaching(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
    },
    add_personal_disposition:(req,res)=>{
        const body = req.body;
        add_personal_disposition(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
    },

    add_student_learning:(req,res)=>{
        const body = req.body;
        add_student_learning(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
    },
    add_teacher_learning:(req,res)=>{
        const body = req.body;
        add_teacher_learning(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
    },

    add_personal_traits:(req,res)=>{
        const body = req.body;
        add_personal_traits(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
      
    },

    view_faculty_grading:(req,res)=>{
        const staff_id = req.params.staff_id;

        view_faculty_grading(staff_id,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            
            if(!results){
                return res.json({
                    success:0,
                    message:"Unable To Fetch"
                });
            }
            return res.status(200).json({
                success:1,
                message:"Result Successfully Fetched",
                data:results,
            });
        })
    },


    get_staff_by_campus_id:(req,res)=>{
        const staff_campus_id = req.params.staff_campus_id;
        get_staff_by_campus_id(staff_campus_id,(err,results)=>{
            if(err){
               return
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Staff data Successfully Found",
                data:results
            })
        })
    },

    get_all_staff:(req,res)=>{
        get_all_staff((err,results)=>{
            if(err){
               return
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Staff data Successfully Found",
                data:results
            })
        })
    },
    ApproveFaculty: (req, res) => {
        const body = req.body;
        ApproveFaculty(body, (err,results) => {
          if (err) {
            console.log(err);
            return;
          }
          if(!results){
              return res.json({
                  success:0,
                  message:"failed to approve Faculty"
              });
          }
          return res.json({
            success: 1,
            message: " approve updated successfully"
          });
        })
      },

      get_approved_staff_for_director:(req,res)=>{
        const staff_campus_id = req.params.staff_campus_id;
        get_approved_staff_for_director(staff_campus_id,(err,results)=>{
            if(err){
               return
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Staff data Successfully Found",
                data:results
            })
        })
    },

    get_classroom_teaching_data:(req,res)=>{
        const staff_id = req.params.staff_id;
        get_classroom_teaching_data(staff_id,(err,results)=>{
            if(err){
               return
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Staff data Successfully Found",
                data:results
            })
        })
    },
    get_personal_disposition_data:(req,res)=>{
        const staff_id = req.params.staff_id;
        get_personal_disposition_data(staff_id,(err,results)=>{
            if(err){
               return
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Staff data Successfully Found",
                data:results
            })
        })
    },

    get_personal_traits_data:(req,res)=>{
        const staff_id = req.params.staff_id;
        get_personal_traits_data(staff_id,(err,results)=>{
            if(err){
               return
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Staff data Successfully Found",
                data:results
            })
        })
    },

    get_student_learning_data:(req,res)=>{
        const staff_id = req.params.staff_id;
        get_student_learning_data(staff_id,(err,results)=>{
            if(err){
               return
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Staff data Successfully Found",
                data:results
            })
        })
    },
    get_teacher_learning_data:(req,res)=>{
        const staff_id = req.params.staff_id;
        get_teacher_learning_data(staff_id,(err,results)=>{
            if(err){
               return
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Staff data Successfully Found",
                data:results
            })
        })
    },
    add_comments:(req,res)=>{
        const body = req.body;
        add_comments(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
    },

    get_comments:(req,res)=>{
        const staff_id = req.params.staff_id;
        get_comments(staff_id,(err,results)=>{
            if(err){
               return
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"comments",
                data:results[0]
            })
        })
    },

    add_status:(req,res)=>{
        const body = req.body;
        add_status(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
    },


    get_status:(req,res)=>{
        const staff_id = req.params.staff_id;
        get_status(staff_id,(err,results)=>{
            if(err){
               return
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"comments",
                data:results[0]
            })
        })
    },

    add_over_all_sum:(req,res)=>{
        const body = req.body;
        add_over_all_sum(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message: "Database Connection Error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
    },
    get_over_all_sum_of_staff:(req,res)=>{
        const staff_id = req.params.staff_id;
        get_over_all_sum_of_staff(staff_id,(err,results)=>{
            if(err){
               return
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    message:"No Record Found"
                })
            }
            return res.status(200).json({
                success:1,
                message:"comments",
                data:results[0]
            })
        })
    },

}