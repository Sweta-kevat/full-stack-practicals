//Topic: Creating and Exporting Promises for an Admission Process
 // Create a Promise that completes after a given time
const createPromise = (text, timer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text);
        }, timer);
    });
};

// Create Promise functions for each admission step
const buyProspectus = () =>
    createPromise("Bought Prospectus", 10);

const fillAdmission = () =>
    createPromise("Form Filled", 200);

const submitAdmission = () =>
    createPromise("Admission Form Submitted", 100);

const verifyAdmission = () =>
    createPromise("Admission Form Verified", 1000);

const answerEntrance = () =>
    createPromise("Answered Entrance Exam", 1000);

const passEntrance = () =>
    createPromise("Passed Entrance Exam", 100);

// Export the functions so app.js can use them
module.exports = {
    buyProspectus,
    fillAdmission,
    submitAdmission,
    verifyAdmission,
    answerEntrance,
    passEntrance
};
