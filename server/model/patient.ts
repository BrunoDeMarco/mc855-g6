import { MedicalSpeciality } from "../model/medicalSpecialty";

export enum PatientAttendanceType {
    appointment = 1,
    receiveMedication,
    rescheduling,
    needGuidance
}

export interface PatientAttendance {
    number: number,
    hc?: string | null,
    type: PatientAttendanceType, 
    speciality?: MedicalSpeciality | null
}