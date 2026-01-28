import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import type { Patient } from "./types/patient";
import PatientsPage from "./pages/PatientsPage";
import PatientDetailsPage from "./pages/PatientDetailsPage";

const patients: Patient[] = [
  { id: "1", firstName: "John", lastName: "Doe", age: 35 },
  { id: "2", firstName: "Jane", lastName: "Smith", age: 28 },
  { id: "3", firstName: "Bob", lastName: "Johnson", age: 42 },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PatientsPage patients={patients} />} />
        <Route path="/patient/:id" element={<PatientDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
