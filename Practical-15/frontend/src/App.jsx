
import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("Loading students...");

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not fetch students");
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
        setMessage("");
      })
      .catch(() => {
        setMessage("Cannot connect to Node.js. Make sure the backend is running.");
      });
  }, []);

  return (
    <div className="container">
      <h1>Student Management</h1>
      <p>React Frontend connected to Node.js Backend</p>

      {message && <p>{message}</p>}

      <div className="students">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <h2>{student.name}</h2>
            <p>Student ID: {student.id}</p>
            <p>Course: {student.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
