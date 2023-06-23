const pool = require("../../config/database");

module.exports={
    
    create_user:(data,callBack)=>{
        var query;
        query = `insert into usersaccounts (user_first_name,user_last_name,user_email,user_cell_no,user_password,user_role,campus_id) value (?,?,?,?,?,?,?)`;
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }
            connection.query(query,[ 
                data.user_first_name,
                data.user_last_name,
                data.user_email,
                data.user_cell_no,
                data.user_password,
                data.user_role,
                data.campus_id

            ], function (err, results) {
             
                connection.release();
                 if (err) {
                   callBack(err);
                 } 
                 else {
                    callBack(null, results);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 
      
    },

    user_login: (body, callBack) => {
        pool.query(
          `select * from usersaccounts where user_email = ? and user_password = ?`,
          [body.user_email,
            body.user_password],
            
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },

    add_employee:(data,callBack)=>{
        var query;
        query = `insert into faculty_details (employee_name,designation,employee_id,grades_taught,department,employee_category,salary,present_scale,date_of_joining) value (?,?,?,?,?,?,?,?,?)`;
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }

            connection.query(query,[ 
                data.employee_name,
                data.designation,
                data.employee_id,
                data.grades_taught,
                data.department,
                data.employee_category,
                data.salary,
                data.present_scale,
                data.date_of_joining
             ], function (err, results) {
             
                connection.release();
                 if (err) {
                   callBack(err);
                 } 
                 else {
                    callBack(null, results);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 
      
      },

      
      get_employee:callBack=>{
        var query;
        query = `select * from faculty_details`;
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }
            connection.query(query,null, function (err, results) {
             
                connection.release();
                 if (err) {
                   callBack(error);
                 } 
                 else {
                    callBack(null, results);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 

    
    },

    get_employee_by_id:(employee_id,callBack)=>{
        var query;
        query = `select * from faculty_details where employee_id = ?`,
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }
            connection.query(query,[ 
                [employee_id],
            
            ], function (err, results) {
             
                connection.release();
                 if (err) {
                   callBack(error);
                 } 
                 else {
                    callBack(null, results[0]);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 
    
    },

    add_class_room_teaching:(data,callBack)=>{
        var query;
        query = `insert into classroom_teaching (staff_id,
            Maintaining_soft_boards_Classroom_teaching_and_learning_resourc,
            Details_on_white_board,
            students_are_engaged_during_lessons,
            Equal_and_fair_treatment_of_all_students,
            Students_are_provided_support_during_after_lessons,
            Quality_of_lesson_plan,
            Teacher_has_adequate_content_knowledge,
            Subject_specific_pedagogy_is_used,
            Differentiated_classroom_teaching_strategies,
            Teaching_and_learning_resources_are_used_during_lessons,
            Maintaining_a_weekly_lesson_plan,
            Completion_of_Syllabus_as_per_LTP,
            Timely_submission_of_checked_papers_and_results,
            Meeting_deadlines_to_submit_assigned_tasks,
            Maintains_record_of_class_test_and_assignment_sheet,
            Copies_for_assigned_subjects_are_timely_checked,
            Material_for_assigned_subjects_are_timely_checked,
            Corrective_feedback_and_comments_are_duly_visible_on_checked_cop,
            Homework_is_duly_checked,
            Neutral_and_unbiased_invigilation_trends,
            sum_of_one_one,
            sum_of_one_two,
            sum_of_one_three,
            sum_of_one_four,
            over_all_sum_of_one
            ) value (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }

            connection.query(query,[ 
                data.staff_id,
                data.one_point_one_a,
                data.one_point_one_b,
                data.one_point_one_c,
                data.one_point_one_d,
                data.one_point_one_e,
                data.one_point_two_a,
                data.one_point_two_b,
                data.one_point_two_c,
                data.one_point_two_d,
                data.one_point_two_e,
                data.one_point_three_a,
                data.one_point_three_b,
                data.one_point_three_c,
                data.one_point_three_d,
                data.one_point_three_e,
                data.one_point_four_a,
                data.one_point_four_b,
                data.one_point_four_c,
                data.one_point_four_d,
                data.one_point_four_e,
                data.sum_of_one_one,
                data.sum_of_one_two,
                data.sum_of_one_three,
                data.sum_of_one_four,
                data.over_all_sum_of_one
             ], function (err, results) {
             
                connection.release();
                 if (err) {
                   callBack(err);
                 } 
                 else {
                    callBack(null, results);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 
      
      },
      

    add_personal_disposition:(data,callBack)=>{
        var query;
        query = `insert into personal_disposition (staff_id,Maintains_positive_relationship_with_the_students,
            Maintains_positive_relationship_with_the_parents,
            Maintains_collaborative_relationship_with_colleagues,
            Creates_a_positive_environment_in_the_classroom_and_beyond,
            Follow_the_organization_ethos,
            Ability_to_handle_pressure,
            Ability_to_pursue_various_assignments_simultaneously,
            Pragmatic_decision_making,
            Attend_coordination_meetings,
            Active_participation_in_co_curricular_activities,
            Ability_to_adapt_as_per_concerned_stakeholder_feedback,
            Ability_to_work_on_feedback_from_management,
            Eagerness_to_improve_and_self_learning_for_areas_of_improvement,
            Communication_with_colleagues_during_extra_curricular_activities,
            Cognitive_thinking_and_ability_to_diffuse_situations_with_parent,
            Content_knowledge_about_the_assigned_subject,
            Applying_subject_relevant_pedagogy_at_regular_intervals,
            Curriculum_development,
            Provides_effective_suggestions_on_LTPs,
            Inculcating_latest_information_regarding_subject_content,
            sum_of_two_one,
            sum_of_two_two,
            sum_of_two_three,
            sum_of_two_four,
            over_all_sum_of_two
            ) value (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }

            connection.query(query,[ 
                data.staff_id,
                data.two_point_one_a,
                data.two_point_one_b,
                data.two_point_one_c,
                data.two_point_one_d,
                data.two_point_one_e,
                data.two_point_two_a,
                data.two_point_two_b,
                data.two_point_two_c,
                data.two_point_two_d,
                data.two_point_two_e,
                data.two_point_three_a,
                data.two_point_three_b,
                data.two_point_three_c,
                data.two_point_three_d,
                data.two_point_three_e,
                data.two_point_four_a,
                data.two_point_four_b,
                data.two_point_four_c,
                data.two_point_four_d,
                data.two_point_four_e,
                data.sum_of_two_one,
                data.sum_of_two_two,
                data.sum_of_two_three,
                data.sum_of_two_four,
                data.over_all_sum_of_two
             ], function (err, results) {
             
                connection.release();
                 if (err) {
                   callBack(err);
                 } 
                 else {
                    callBack(null, results);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 
      
      },


      add_student_learning:(data,callBack)=>{
        var query;
        query = `insert into student_learning (staff_id,
            Studentsresponseonvariousstrategies,
            Studentsaremotivatedforlearning,	
            Implementappliedknowledgewithvariousreferences,
            Studentsarecomfortabletoaskquestions,	
            Studentsareinvolvedinvariousprojectsandclasspresentation,	
            Maintainingrecordofstudentmarksandprogresstohelpfor,	
            Identifiesstudentweaknessinanassignedsubject,	
            Formulatingindividualplansforslowlearners,	
            Frequencyofreinforcement,	
            Appreciationforstudentontheirprogress,	
            Teachesetiquettetobeobservedatschool,	
            Motivatesandadoptstostudentswithdifferentlearningstyles,		
            Guidesstudentsonethicaldressingandattire,	
            Providesmentorshiptostudentsonrightuseofsocialmedia,	
            Promotesstudentsselfesteem,	
            AcademicCounselingforunderachievers,		
            CareerGuidance,	
            Emotionalsupportandguidancetostudents,		
            Parentalcounseling,		
        Mentalhealthdiscussion,
             sum_of_three_one,
            sum_of_three_two,
            sum_of_three_three,
            sum_of_three_four,
            over_all_sum_of_three
            ) value (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }

            connection.query(query,[ 
                data.staff_id,
                data.three_point_one_a,
                data.three_point_one_b,
                data.three_point_one_c,
                data.three_point_one_d,
                data.three_point_one_e,
                data.three_point_two_a,
                data.three_point_two_b,
                data.three_point_two_c,
                data.three_point_two_d,
                data.three_point_two_e,
                data.three_point_three_a,
                data.three_point_three_b,
                data.three_point_three_c,
                data.three_point_three_d,
                data.three_point_three_e,
                data.three_point_four_a,
                data.three_point_four_b,
                data.three_point_four_c,
                data.three_point_four_d,
                data.three_point_four_e,
                data.sum_of_three_one,
                data.sum_of_three_two,
                data.sum_of_three_three,
                data.sum_of_three_four,
                data.over_all_sum_of_three
             ], function (err, results) {
             
                connection.release();
                 if (err) {
                   callBack(err);
                 } 
                 else {
                    callBack(null, results);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 
      
      },

      add_teacher_learning:(data,callBack)=>{
        var query;
        query = `insert into teacher_learning (staff_id,
            Usesdifferentstrategiesforstudentssuchasbrainstorming,
            Effortsforstudentmotivation,
 Encouragethestudentsforaskingquestionsrelatedtothesubject,
Attendscurriculumdevelopmentsessions,
Takesinitiativesinconductingtraining,
Effortsonstudentweaknessinanassignedsubject,
Individualplansforstudentguidance,
 Maintainsrecordofstudentmarks,
Acknowledgesstudentprogressthrough,
 Organizefrequentreinforcementclasses,
AdaptabilitytoIT,
Strategizingandplanningforthenextsession,
Developingshorttermplans,
Adaptabilitytowardshybridlearning,
Implementationofcurriculum,
Enrolledinahighereducationprogram,
Participationinadvancedcertifications,
Implementationofknowledgegainedinclassandlessons,
Continuouslyexpandingandupdatingthesubjectknowledge,
Reflectstrongcommandinassignedsubject,
             sum_of_four_one,
            sum_of_four_two,
            sum_of_four_three,
            sum_of_four_four,
            over_all_sum_of_four
            ) value (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }

            connection.query(query,[ 
                data.staff_id,
                data.four_point_one_a,
                data.four_point_one_b,
                data.four_point_one_c,
                data.four_point_one_d,
                data.four_point_one_e,
                data.four_point_two_a,
                data.four_point_two_b,
                data.four_point_two_c,
                data.four_point_two_d,
                data.four_point_two_e,
                data.four_point_three_a,
                data.four_point_three_b,
                data.four_point_three_c,
                data.four_point_three_d,
                data.four_point_three_e,
                data.four_point_four_a,
                data.four_point_four_b,
                data.four_point_four_c,
                data.four_point_four_d,
                data.four_point_four_e,
                data.sum_of_four_one,
                data.sum_of_four_two,
                data.sum_of_four_three,
                data.sum_of_four_four,
                data.over_all_sum_of_four
             ], function (err, results) {
             
                connection.release();
                 if (err) {
                   callBack(err);
                 } 
                 else {
                    callBack(null, results);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 
      
      },

      add_personal_traits:(data,callBack)=>{
        var query;
        query = `insert into  personal_traits (staff_id,
            Dressesprofessionallyandappropriately,
            Inspirestudentsthroughverbalcommunication,
            Upholdtheimagetorepresenttheorganizationinpositively,
            Leadershipqualities,
            Approachableandkindpersonalityforstudents,
            Possessesemotionalintelligencetodealwithvarioussituations,
            Cansetbettergoalsforself,
            Interactionwiththemembersoftheorganization,
             Effortsformakingpositiveenvironment,
            Abilitytotakedecisioninanefficientandeffectiveway,
            Ispunctualtoschool,
            Priorintimationforabsence,
            Staysbackforextracurricularactivities,
            Willingnesstoattendthemeetingspunctually,
            Ispunctualinreachingforclassandduties,
            Supportivetowardscolleagues,
            Committedwiththeorganization,
            Completesassignedtasksontime,
            Coordinateswithothercampuses,
            Takeschallengesenthusiastically,
             sum_of_five_one,
            sum_of_five_two,
            sum_of_five_three,
            sum_of_five_four,
            over_all_sum_of_five
            ) value (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }

            connection.query(query,[ 
                data.staff_id,
                data.five_point_one_a,
                data.five_point_one_b,
                data.five_point_one_c,
                data.five_point_one_d,
                data.five_point_one_e,
                data.five_point_two_a,
                data.five_point_two_b,
                data.five_point_two_c,
                data.five_point_two_d,
                data.five_point_two_e,
                data.five_point_three_a,
                data.five_point_three_b,
                data.five_point_three_c,
                data.five_point_three_d,
                data.five_point_three_e,
                data.five_point_four_a,
                data.five_point_four_b,
                data.five_point_four_c,
                data.five_point_four_d,
                data.five_point_four_e,
                data.sum_of_five_one,
                data.sum_of_five_two,
                data.sum_of_five_three,
                data.sum_of_five_four,
                data.over_all_sum_of_five
             ], function (err, results) {
             
                connection.release();
                 if (err) {
                   callBack(err);
                 } 
                 else {
                    callBack(null, results);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 
      
      },


      view_faculty_grading: (staff_id, callBack) => {
        pool.query(
          `select * from classroom_teaching, personal_disposition, personal_traits, student_learning,teacher_learning where classroom_teaching.staff_id= ? `,
          [staff_id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },


      get_staff_by_campus_id:(staff_campus_id,callBack)=>{
        var query;
        query = `select * from staff_details where 	staff_campus_id = ?`,
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }
            connection.query(query,[ 
                [staff_campus_id],
            
            ], function (err, results) {
             
                connection.release();
                 if (err) {
                   callBack(error);
                 } 
                 else {
                    callBack(null, results);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 
    
    },
    get_all_staff:(callBack)=>{
      var query;
      query = `select * from staff_details`,
      pool.getConnection(function (err, connection) {
          try{
          if (err) {               
              console.log(err);
              // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
              throw err;
          }
          connection.query(query,[ 
              [],
          
          ], function (err, results) {
           
              connection.release();
               if (err) {
                 callBack(error);
               } 
               else {
                  callBack(null, results);
              }
          });
      }
      catch (e) {
      console.log("entering catch block");
      console.log(e);
                  try{
                  connection.release();
                  }catch(e)
                  {}
      console.log("leaving catch block");
      }
      }); 
  
  },

  ApproveFaculty:(data,callBack)=>{
    pool.query(
//        `update test  set approved= ?    where staff_id = ?`,

        `update test  set ${data.columnname}= ?    where id = ?`,
        [
            data.value,
            data.id

        ],
        (error,results)=>{
            if(error){
                callBack(error)
            }
            return callBack(null,results)
        }
    )
},

get_approved_staff_for_director:(staff_campus_id,callBack)=>{
  var query;
        query = `select * from staff_details where 	staff_campus_id = ? and approved = 1`,
        pool.getConnection(function (err, connection) {
            try{
            if (err) {               
                console.log(err);
                // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
                throw err;
            }
            connection.query(query,[ 
                [staff_campus_id,
                  ],
            
            ], function (err, results) {
             
                connection.release();
                 if (err) {
                   callBack(error);
                 } 
                 else {
                    callBack(null, results);
                }
            });
        }
        catch (e) {
        console.log("entering catch block");
        console.log(e);
                    try{
                    connection.release();
                    }catch(e)
                    {}
        console.log("leaving catch block");
        }
        }); 
},

get_classroom_teaching_data: (staff_id, callBack) => {
    var query;
    query = `select * from classroom_teaching where staff_id = ?`,
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }
        connection.query(query,[ 
            [staff_id],
        
        ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(error);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
    
  },

  get_personal_traits_data: (staff_id, callBack) => {
    var query;
    query = `select * from personal_traits where staff_id = ?`,
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }
        connection.query(query,[ 
            [staff_id],
        
        ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(error);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
    
  },

  get_personal_disposition_data: (staff_id, callBack) => {
    var query;
    query = `select * from personal_disposition where staff_id = ?`,
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }
        connection.query(query,[ 
            [staff_id],
        
        ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(error);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
    
  },

  get_student_learning_data: (staff_id, callBack) => {
    var query;
    query = `select * from student_learning where staff_id = ?`,
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }
        connection.query(query,[ 
            [staff_id],
        
        ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(error);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
    
  },

  get_teacher_learning_data: (staff_id, callBack) => {
    var query;
    query = `select * from teacher_learning where staff_id = ?`,
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }
        connection.query(query,[ 
            [staff_id],
        
        ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(error);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
    
  },
  add_comments:(data,callBack)=>{
    var query;
    query = `insert into comments_for_staff (staff_id,comments_from_branch_head) value (?,?)`;
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }

        connection.query(query,[ 
            data.staff_id,
            data.comments_from_branch_head,
         ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(err);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
  
  },

  get_comments: (staff_id, callBack) => {
    var query;
    query = `select * from comments_for_staff where staff_id = ?`,
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }
        connection.query(query,[ 
            [staff_id],
        
        ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(error);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
    
  },

  add_status:(data,callBack)=>{
    var query;
    query = `insert into form_status (staff_id,status) value (?,?)`;
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }

        connection.query(query,[ 
            data.staff_id,
            data.status,
         ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(err);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
  
  },

  get_status: (staff_id, callBack) => {
    var query;
    query = `select * from form_status where staff_id = ?`,
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }
        connection.query(query,[ 
            [staff_id],
        
        ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(error);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
    
  },


  add_over_all_sum:(data,callBack)=>{
    var query;
    query = `insert into staff_representation (staff_id,staff_campus_id,staff_name,staff_over_all_sum) value (?,?,?,?)`;
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }

        connection.query(query,[ 
            data.staff_id,
            data.staff_campus_id,
            data.staff_name,
            data.staff_over_all_sum,
         ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(err);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
  
  },
  

  get_over_all_sum_of_staff: (staff_id, callBack) => {
    var query;
    query = `select * from staff_representation where staff_id = ?`,
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }
        connection.query(query,[ 
            [staff_id],
        
        ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(error);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
    
  },




update_classroom_teaching:(data,callBack)=>{
    pool.query(

        `update classroom_teaching  set ${data.columnname}= ?,  sum_of_one_one = ? ,sum_of_one_two = ? , sum_of_one_three = ? , sum_of_one_four = ? ,over_all_sum_of_one = ?   where staff_id = ?`,
        [
            data.value,
            data.sum_of_one_one,
            data.sum_of_one_two,
            data.sum_of_one_three,
            data.sum_of_one_four,
            data.over_all_sum_of_one,
            data.staff_id

        ],
        (error,results)=>{
            if(error){
                callBack(error)
            }
            return callBack(null,results)
        }
    )
},


update_personal_disposition:(data,callBack)=>{
    pool.query(

        `update personal_disposition  set ${data.columnname}= ?,  sum_of_two_one = ? ,sum_of_two_two = ? , sum_of_two_three = ? , sum_of_two_four = ? ,over_all_sum_of_two = ?   where staff_id = ?`,
        [
            data.value,
            data.sum_of_two_one,
            data.sum_of_two_two,
            data.sum_of_two_three,
            data.sum_of_two_four,
            data.over_all_sum_of_two,
            data.staff_id

        ],
        (error,results)=>{
            if(error){
                callBack(error)
            }
            return callBack(null,results)
        }
    )
},

update_personal_traits:(data,callBack)=>{
    pool.query(

        `update  personal_traits  set ${data.columnname}= ?,  sum_of_five_one = ? ,sum_of_five_two = ? , sum_of_five_three = ? , sum_of_five_four = ? ,over_all_sum_of_five = ?   where staff_id = ?`,
        [
            data.value,
            data.sum_of_five_one,
            data.sum_of_five_two,
            data.sum_of_five_three,
            data.sum_of_five_four,
            data.over_all_sum_of_five,
            data.staff_id

        ],
        (error,results)=>{
            if(error){
                callBack(error)
            }
            return callBack(null,results)
        }
    )
},




update_student_learning:(data,callBack)=>{
    pool.query(

        `update  student_learning  set ${data.columnname}= ?,  sum_of_three_one = ? ,sum_of_three_two = ? , sum_of_three_three = ? , sum_of_three_four = ? ,over_all_sum_of_three = ?   where staff_id = ?`,
        [
            data.value,
            data.sum_of_three_one,
            data.sum_of_three_two,
            data.sum_of_three_three,
            data.sum_of_three_four,
            data.over_all_sum_of_three,
            data.staff_id

        ],
        (error,results)=>{
            if(error){
                callBack(error)
            }
            return callBack(null,results)
        }
    )
},


update_teacher_learning:(data,callBack)=>{
    pool.query(

        `update  teacher_learning  set ${data.columnname}= ?,  sum_of_four_one = ? ,sum_of_four_two = ? , sum_of_four_three = ? , sum_of_four_four = ? ,over_all_sum_of_four = ?   where staff_id = ?`,
        [
            data.value,
            data.sum_of_four_one,
            data.sum_of_four_two,
            data.sum_of_four_three,
            data.sum_of_four_four,
            data.over_all_sum_of_four,
            data.staff_id

        ],
        (error,results)=>{
            if(error){
                callBack(error)
            }
            return callBack(null,results)
        }
    )
},

update_staff_representation:(data,callBack)=>{
    pool.query(

        `update staff_representation  set staff_over_all_sum = ?  where staff_id = ?`,
        [
            data.staff_over_all_sum,
            data.staff_id,


        ],
        (error,results)=>{
            if(error){
                callBack(error)
            }
            return callBack(null,results)
        }
    )
},



data_for_graph: (campus_id, callBack) => {
    var query;
    query = `select * from staff_representation where staff_campus_id = ? ORDER BY staff_over_all_sum DESC`,
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }
        connection.query(query,[ 
            [campus_id],
        
        ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(error);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
    
  },


  get_all_branchheads:(callBack)=>{
    var query;
    query = `select * from branchead_details`,
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }
        connection.query(query,[ 
            [],
        
        ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(error);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 

},

add_branch_heads:(data,callBack)=>{
    var query;
    query = `insert into  branchead_evaluation (
        branchhead_id,A1,A2,A3,A4,AC1, B1,B2,B3,B4,BC,C1,C2,C3,C4,CC,D1,D2,D3,D4,DC,E1,E2,E3,E4,C5,S1,S2,S3,S4,S5,overallsum
       
        ) value (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }

        connection.query(query,[ 
            data.branchhead_id,
            data.one_point_one_a,
            data.one_point_one_b,
            data.one_point_one_c,
            data.one_point_one_d,
            data.commenta,
            data.one_point_two_a,
            data.one_point_two_b,
            data.one_point_two_c,
            data.one_point_two_d,
            data.commentb,
            data.one_point_three_a,
            data.one_point_three_b,
            data.one_point_three_c,
            data.one_point_three_d,
            data.commentc,
            data.one_point_four_a,
            data.one_point_four_b,
            data.one_point_four_c,
            data.one_point_four_d,
            data.commentd,
            data.one_point_five_a,
            data.one_point_five_b,
            data.one_point_five_c,
            data.one_point_five_d,
            data.commente,
            data.sum_of_one_one,
            data.sum_of_one_two,
            data.sum_of_one_three,
            data.sum_of_one_four,
            data.sum_of_one_five,
            data.over_all_sum_of_one
         ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(err);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
  
  },
add_status_branch_head:(data,callBack)=>{
    var query;
    query = `insert into branchhead_status (branchhead_id,status) value (?,?)`;
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }

        connection.query(query,[ 
            data.branchhead_id,
            data.status,
         ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(err);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
  
  },

get_status_for_branch_head: (branchhead_id, callBack) => {
    var query;
    query = `select * from branchhead_status where branchhead_id = ?`,
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }
        connection.query(query,[ 
            [branchhead_id],
        
        ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(error);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
    
  },

get_branchheaddata: (branchhead_id, callBack) => {
    var query;
    query = `select * from branchead_evaluation where branchhead_id = ?`,
    pool.getConnection(function (err, connection) {
        try{
        if (err) {               
            console.log(err);
            // connection.release(); <-- this line is in error, as if there was an error getting a connection, then you won't have a connection to release
            throw err;
        }
        connection.query(query,[ 
            [branchhead_id],
        
        ], function (err, results) {
         
            connection.release();
             if (err) {
               callBack(error);
             } 
             else {
                callBack(null, results);
            }
        });
    }
    catch (e) {
    console.log("entering catch block");
    console.log(e);
                try{
                connection.release();
                }catch(e)
                {}
    console.log("leaving catch block");
    }
    }); 
    
  },


  update_branchhead:(data,callBack)=>{
    pool.query(

        `update branchead_evaluation  set ${data.columnname}= ?,  S1 = ? ,S2 = ? , S3 = ? , S4 = ?,S5=? ,overallsum = ?   where branchhead_id = ?`,
        [
            data.value,
            data.sum_of_one_one,
            data.sum_of_one_two,
            data.sum_of_one_three,
            data.sum_of_one_four,
            data.sum_of_one_five,
            data.overallsum,
            data.staff_id

        ],
        (error,results)=>{
            if(error){
                callBack(error)
            }
            return callBack(null,results)
        }
    )
},
    }



