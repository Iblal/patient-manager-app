import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { patients, appointments } from "./data/db";
import PatientsPage from "./pages/PatientsPage";
import PatientDetailsPage from "./pages/PatientDetailsPage";
import AddNewPatientPage from "./pages/AddNewPatientPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PatientsPage patients={patients} />} />
        <Route path="/patients/new" element={<AddNewPatientPage />} />
        <Route
          path="/patients/:id"
          element={
            <PatientDetailsPage
              patients={patients}
              appointments={appointments}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
