const studentDetails = {
        name: 'emon',
        occupation: 'student',
        roll: 1,
        marks: {
            math: 85,
            physics: 90,
            chemistry: 80
        }
    };

// const getDetails = studentDetails['marks']['math'];
const subject = 'chemistry';
const chemistryMarks = studentDetails.marks[subject];
console.log(chemistryMarks);