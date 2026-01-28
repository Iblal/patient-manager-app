import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { patients, appointments } from "./data/db";
import PatientsPage from "./pages/PatientsPage";
import PatientDetailsPage from "./pages/PatientDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PatientsPage patients={patients} />} />
        <Route
          path="/patient/:id"
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
