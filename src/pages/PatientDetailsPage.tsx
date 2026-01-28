import { useParams, Link } from "react-router-dom";
import type { Patient } from "../types/patient";
import type { Appointment } from "../types/appointment";

interface PatientDetailsPageProps {
  patients: Patient[];
  appointments: Appointment[];
}

function PatientDetailsPage({
  patients,
  appointments,
}: PatientDetailsPageProps) {
  const { id } = useParams<{ id: string }>();
  const patient = patients.find((p) => p.id === id);
  const patientAppointments = appointments.filter((a) => a.patientId === id);

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
      <div className="border border-gray-300 rounded-lg p-6 max-w-2xl">
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

        <h2 className="text-xl mb-2 mt-4">Appointments</h2>
        {patientAppointments.length === 0 ? (
          <p className="text-gray-500">No appointments found.</p>
        ) : (
          <div className="space-y-3">
            {patientAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="border border-gray-200 rounded p-3 bg-gray-50"
              >
                <div>
                  <strong>Date:</strong> {appointment.dateTime.toLocaleString()}
                </div>
                <div>
                  <strong>Type:</strong> {appointment.type}
                </div>
                <div>
                  <strong>Status:</strong> {appointment.status}
                </div>
                {appointment.notes && (
                  <div>
                    <strong>Notes:</strong> {appointment.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <Link
          to="/"
          className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Back to Patients
        </Link>
      </div>
    </div>
  );
}

export default PatientDetailsPage;
