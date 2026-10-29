
function StudentAttendance() {
  const attendance = [
    { id: 101, name: "Rahul", status: "Present" },
    { id: 102, name: "Priya", status: "Present" },
    { id: 103, name: "Amit", status: "Absent" }
  ];

  return (
    <section className="section">
      <h2>Student Attendance</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Attendance</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.status}</td>
                <td>{student.status === "Present" ? "✓" : "✗"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StudentAttendance;
