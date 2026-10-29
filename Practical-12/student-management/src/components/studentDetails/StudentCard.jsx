
function StudentCard({ rollNo, name, age, studentClass, course }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p><strong>Roll No:</strong> {rollNo}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Class:</strong> {studentClass}</p>
      <p><strong>Course:</strong> {course}</p>
    </div>
  );
}

export default StudentCard;
