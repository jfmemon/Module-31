class Instructor{
    name;
    address;
    designation = 'Developer'
    work = 'Maintenance'
    constructor(instructorName, instructorAddress) {
        this.name = instructorName;
        this.address = instructorAddress;
    }
    createModule(day) {
        console.log(`Instructor, please create a module for ${day}`);
    }

    discussionSession(time) {
        console.log(`Instructor, please notify student at ${time}`)
    }
}

const getInstructorWork = new Instructor('Emon', 'Dhaka');
console.log(getInstructorWork);
getInstructorWork.createModule('Friday');
getInstructorWork.discussionSession('9.00 pm');
const mahinInformation = new Instructor('Mahin', 'Gazipur');
console.log(mahinInformation);

