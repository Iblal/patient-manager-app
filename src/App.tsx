import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import type { Patient } from "./types/patient";
import PatientsPage from "./pages/PatientsPage";
import PatientDetailsPage from "./pages/PatientDetailsPage";

const patients: Patient[] = [
  { id: "1", firstName: "John", lastName: "Doe", dob: "1991-03-15" },
  { id: "2", firstName: "Jane", lastName: "Smith", dob: "1998-07-22" },
  { id: "3", firstName: "Bob", lastName: "Johnson", dob: "1984-11-08" },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PatientsPage patients={patients} />} />
        <Route
          path="/patient/:id"
          element={<PatientDetailsPage patients={patients} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
