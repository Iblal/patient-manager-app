import { useParams, Link } from "react-router-dom";
import type { Patient } from "../types/patient";

interface PatientDetailsPageProps {
  patients: Patient[];
}

function PatientDetailsPage({ patients }: PatientDetailsPageProps) {
  const { id } = useParams<{ id: string }>();
  const patient = patients.find((p) => p.id === id);

  if (!patient) {
    return (
      <div className="m-2">
        <h1 className="text-3xl mb-3">Patient Not Found</h1>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Back to Patients
        </Link>
      </div>
    );
  }

  return (
    <div className="m-2">
      <h1 className="text-3xl mb-3">Patient Details</h1>
      <div className="border border-gray-300 rounded-lg p-6 max-w-md">
        <div className="mb-2">
          <strong>ID:</strong> {patient.id}
        </div>
        <div className="mb-2">
          <strong>First Name:</strong> {patient.firstName}
        </div>
        <div className="mb-2">
          <strong>Last Name:</strong> {patient.lastName}
        </div>
        <div className="mb-4">
          <strong>Date of Birth:</strong> {patient.dob}
        </div>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Back to Patients
        </Link>
      </div>
    </div>
  );
}

export default PatientDetailsPage;
