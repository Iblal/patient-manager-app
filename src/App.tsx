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
      <div>
        <h1>Patient manager</h1>
      </div>
    </>
  );
}

export default App;
