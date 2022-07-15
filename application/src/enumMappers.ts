import {
  MedicalSpeciality,
  PatientAttendanceType,
} from "./patients/helpers/form";

export const patientAttendanceTypeToString = (type: PatientAttendanceType) => {
  switch (type) {
    case PatientAttendanceType.appointment:
      return "Realizar uma consulta";
    case PatientAttendanceType.needGuidance:
      return "Precisa de ajuda";
    case PatientAttendanceType.receiveMedication:
      return "Receber medicação";
    case PatientAttendanceType.rescheduling:
      return "Pedir remarcação";
  }
};

export const medicalSpecialtyToString = (type: MedicalSpeciality) => {
  switch (type) {
    case MedicalSpeciality.genetic:
      return "Genética";
    case MedicalSpeciality.neonatalScreening:
      return "Triagem Neonatal";
    case MedicalSpeciality.others:
      return "Outras";
    case MedicalSpeciality.pediatricCardiology:
      return "Cardiologia Pediátrica";
    case MedicalSpeciality.rheumatology:
      return "Reumatologia";
  }
};
