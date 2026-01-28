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
        <h1 className="text-3xl">Patients</h1>
        <div className="flex flex-col gap-4">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="border border-gray-300 rounded-lg p-4 max-w-xs"
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
