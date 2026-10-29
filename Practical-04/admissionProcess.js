
const AdmissionProcess = (text, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
};

const buyProspective = () =>
    AdmissionProcess("Prospectus bought", 1000);

const FillAdmissionform = () =>
    AdmissionProcess("Admission form filled", 1000);

const submitAdmissionform = () =>
    AdmissionProcess("Admission form submitted", 1000);

const answerTheExam = () =>
    AdmissionProcess("Exam answered", 1000);

const AdmissionSuccessfull = () =>
    AdmissionProcess("Admission successful", 1000);

module.exports = {
    buyProspective,
    FillAdmissionform,
    submitAdmissionform,
    answerTheExam,
    AdmissionSuccessfull
};
