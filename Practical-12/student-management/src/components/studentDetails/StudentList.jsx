
import { useState } from "react";
import StudentCard from "./StudentCard.jsx";

function StudentList() {
  const [uiCount, setUiCount] = useState(0);
  const [inspectCount, setInspectCount] = useState(0);

  const students = [
    {
      id: 1,
      rollNo: 101,
      name: "Rahul",
      age: 20,
      studentClass: "BCA",
      course: "Computer Science"
    },
    {
      id: 2,
      rollNo: 102,
      name: "Priya",
      age: 21,
      studentClass: "BCA",
      course: "Information Technology"
    },
    {
      id: 3,
      rollNo: 103,
      name: "Amit",
      age: 19,
      studentClass: "BCA",
      course: "Computer Engineering"
    }
  ];

  return (
    <section className="section">
      <h2>Student Details</h2>

      <div className="button-group">
        <button onClick={() => setUiCount(uiCount + 1)}>
          UI Count: {uiCount}
        </button>

        <button
          data-count={inspectCount}
          onClick={() => setInspectCount(inspectCount + 1)}
        >
          Inspect Count: 0
        </button>
      </div>

      <p className="hint">
        Click the first button to change its displayed number.
        The second button keeps displaying 0.
      </p>

      <div className="student-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            rollNo={student.rollNo}
            name={student.name}
            age={student.age}
            studentClass={student.studentClass}
            course={student.course}
          />
        ))}
      </div>
    </section>
  );
}

export default StudentList;
