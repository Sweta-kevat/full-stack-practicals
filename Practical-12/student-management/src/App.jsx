
import StudentList from "./components/studentDetails/StudentList.jsx";
import StudentAttendance from "./components/studentDetails/StudentAttendance.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Student Management System</h1>
        <p>Student details and attendance</p>
      </header>

      <main>
        <StudentList />
        <StudentAttendance />
      </main>
    </div>
  );
}

export default App;
