var students = [
    {
        id : 1,
        name:'Thinh',
        major:'IS',
        year:4,
    },
    {
        id:2,
        name:'An',
        major:'IS',
        year:4,
    },
    {
        id:3,
        name:'Long',
        major:'SC',
        year:3,
    },
];

//Export Functions Below
    
    //List all students 
    exports.list_students = (req,res) =>{
        res.status(200).json(students);
    };

    //Create Student 
    exports.create_student = (req,res) =>{
        let newParam = {
            id : students.length +1,
            name: req.body.name,
            major: req.body.major,
            year: req.body.year,
        };
        students.push(newParam);
        res.send("Create Successful !!!");
        };





    exports.list_studentsID = (req,res) =>{
        let newParam = students.find((el) => el.id === parseInt(req.params.sID));
        newParam == undefined
        ? res.status(500).send("Cannot Find Elements")
        : res.status(200).send(newParam);
    };


    // req.params => get data from URL
    // req.body => get data from body content
    