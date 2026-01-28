import "./App.css";
import type { Patient } from "./types/patient";

const patients: Patient[] = [
  { id: "1", firstName: "John", lastName: "Doe", age: 35 },
  { id: "2", firstName: "Jane", lastName: "Smith", age: 28 },
  { id: "3", firstName: "Bob", lastName: "Johnson", age: 42 },
];

function App() {
  return (
    <>
      <div className="m-2">
        <h1>Patients</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {patients.map((patient) => (
            <div
              key={patient.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                maxWidth: "300px",
              }}
            >
              <div>
                <strong>ID:</strong> {patient.id}
              </div>
              <div>
                <strong>First Name:</strong> {patient.firstName}
              </div>
              <div>
                <strong>Last Name:</strong> {patient.lastName}
              </div>
              <div>
                <strong>Age:</strong> {patient.age}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
