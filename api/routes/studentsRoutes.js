module.exports = (app) => {
    //Call Controllers
    const studentsControllers = require("../controllers/studentsControllers");

    app
        //Call function when user access to URL(/api/students)
        .route("/api/students")
        //Add Methods
        .get(studentsControllers.list_students)
        .post(studentsControllers.create_student);

    app
        //Call function when user access to URL(/api/students/:sID)
        .route("/api/students/:sID")
        .get(studentsControllers.list_studentsID);
}