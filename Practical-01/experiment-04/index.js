
 // Return a Promise based on the student's marks
const marks = (marks) => {
    return new Promise((resolve, reject) => {
        if (marks >= 90) {
            resolve("O");
        } else if (marks >= 80) {
            resolve("A");
        } else if (marks >= 70) {
            resolve("B");
        } else if (marks >= 50) {
            resolve("C");
        } else if (marks >= 40) {
            resolve("Pass");
        } else {
            reject("Fail");
        }
    });
};

// Check the grade for 70 marks
marks(70)
    .then((data) => {
        console.log("Grade:", data);
    })
    .catch((error) => {
        console.log(error);
    });
