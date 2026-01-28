import type { Patient } from "../types/patient";
import PatientList from "../components/PatientList";

interface PatientsPageProps {
  patients: Patient[];
}

function PatientsPage({ patients }: PatientsPageProps) {
  return (
    <div className="m-2">
      <h1 className="text-3xl mb-3">Patients</h1>
      <PatientList patients={patients} />
    </div>
  );
}

export default PatientsPage;
