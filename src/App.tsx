import "./App.css";
import type { Patient } from "./types/patient";
import PatientList from "./components/PatientList";

const patients: Patient[] = [
  { id: "1", firstName: "John", lastName: "Doe", age: 35 },
  { id: "2", firstName: "Jane", lastName: "Smith", age: 28 },
  { id: "3", firstName: "Bob", lastName: "Johnson", age: 42 },
];

function App() {
  return (
    <>
      <div className="m-2">
        <h1 className="text-3xl mb-3">Patients</h1>
        <PatientList patients={patients} />
      </div>
    </>
  );
}

export default App;
