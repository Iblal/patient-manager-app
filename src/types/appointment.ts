export type AppointmentType =
  | "Consultation"
  | "Check-up"
  | "Follow-up"
  | "Emergency"
  | "Routine";

export type AppointmentStatus =
  | "Scheduled"
  | "Attended"
  | "Cancelled"
  | "No-show"
  | "Rescheduled";

export interface Appointment {
  id: string;
  patientId: string;
  dateTime: Date;
  type: AppointmentType;
  status: AppointmentStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
