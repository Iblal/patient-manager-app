import type { Patient } from "../types/patient";
import PatientList from "../components/PatientList";

interface PatientsPageProps {
  patients: Patient[];
}

function PatientsPage({ patients }: PatientsPageProps) {
  return (
    <div className="m-2">
      <div className="flex mb-3">
        <h1 className="text-3xl mr-3">Patients</h1>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add new patient
        </button>
      </div>
      <PatientList patients={patients} />
    </div>
  );
}

export default PatientsPage;
