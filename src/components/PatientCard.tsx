import { Link } from "react-router-dom";
import type { Patient } from "../types/patient";

interface PatientCardProps {
  patient: Patient;
}

function PatientCard({ patient }: PatientCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 max-w-xs">
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
        <strong>DOB:</strong> {patient.dob}
      </div>
      <div>
        <Link
          to={`/patients/${patient.id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-auto block text-center"
        >
          Patient Details
        </Link>
      </div>
    </div>
  );
}

export default PatientCard;
