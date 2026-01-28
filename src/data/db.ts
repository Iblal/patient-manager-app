import type { Patient } from "../types/patient";
import type { Appointment } from "../types/appointment";

export const patients: Patient[] = [
  { id: "1", firstName: "John", lastName: "Doe", dob: "1991-03-15" },
  { id: "2", firstName: "Jane", lastName: "Smith", dob: "1998-07-22" },
  { id: "3", firstName: "Bob", lastName: "Johnson", dob: "1984-11-08" },
];

export function addPatient(patient: Omit<Patient, "id">) {
  const newId = (patients.length + 1).toString();
  patients.push({ ...patient, id: newId });
}

export const appointments: Appointment[] = [
  {
    id: "1",
    patientId: "1",
    dateTime: new Date("2026-02-01T09:00:00"),
    type: "Consultation",
    status: "Scheduled",
    notes: "Initial consultation for back pain",
    createdAt: new Date("2026-01-20T10:00:00"),
    updatedAt: new Date("2026-01-20T10:00:00"),
  },
  {
    id: "2",
    patientId: "1",
    dateTime: new Date("2026-01-15T14:30:00"),
    type: "Check-up",
    status: "Attended",
    createdAt: new Date("2026-01-10T08:00:00"),
    updatedAt: new Date("2026-01-15T15:00:00"),
  },
  {
    id: "3",
    patientId: "2",
    dateTime: new Date("2026-02-05T11:00:00"),
    type: "Follow-up",
    status: "Scheduled",
    notes: "Follow-up after medication change",
    createdAt: new Date("2026-01-22T09:00:00"),
    updatedAt: new Date("2026-01-22T09:00:00"),
  },
  {
    id: "4",
    patientId: "2",
    dateTime: new Date("2026-01-10T10:00:00"),
    type: "Routine",
    status: "Cancelled",
    notes: "Patient requested cancellation",
    createdAt: new Date("2026-01-05T11:00:00"),
    updatedAt: new Date("2026-01-08T16:00:00"),
  },
  {
    id: "5",
    patientId: "3",
    dateTime: new Date("2026-01-28T08:00:00"),
    type: "Emergency",
    status: "Attended",
    notes: "Severe headache, referred to specialist",
    createdAt: new Date("2026-01-28T07:30:00"),
    updatedAt: new Date("2026-01-28T09:00:00"),
  },
  {
    id: "6",
    patientId: "3",
    dateTime: new Date("2026-02-10T15:00:00"),
    type: "Follow-up",
    status: "Scheduled",
    createdAt: new Date("2026-01-28T09:00:00"),
    updatedAt: new Date("2026-01-28T09:00:00"),
  },
];
