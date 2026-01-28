import type { Patient } from "../types/patient";
import PatientCard from "./PatientCard";

interface PatientListProps {
  patients: Patient[];
}

function PatientList({ patients }: PatientListProps) {
  return (
    <div className="flex flex-col gap-4">
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  );
}

export default PatientList;
