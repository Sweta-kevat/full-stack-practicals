
const admission = require("./admission.js");

// Perform admission steps one after another
admission.buyProspectus()
    .then((data) => {
        console.log(data);
        return admission.fillAdmission();
    })
    .then((data) => {
        console.log(data);
        return admission.submitAdmission();
    })
    .then((data) => {
        console.log(data);
        return admission.verifyAdmission();
    })
    .then((data) => {
        console.log(data);
        return admission.answerEntrance();
    })
    .then((data) => {
        console.log(data);
        return admission.passEntrance();
    })
    .then((data) => {
        console.log(data);
        console.log("Admission Success");
    })
    .catch((error) => {
        console.log(error);
    });
