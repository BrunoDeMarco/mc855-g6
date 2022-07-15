import axios from "axios";

import { FormValues } from "../FormContextProvider/FormContextProvider";

export enum PatientAttendanceType {
  appointment = 1,
  receiveMedication,
  rescheduling,
  needGuidance,
}

export enum MedicalSpeciality {
  pediatricCardiology = 1,
  neonatalScreening,
  rheumatology,
  genetic,
  others,
}

export const submitForm = (form: FormValues) => {
  const reqBody = {
    number: form.senha,
    type: form.atendimento,
    hc: form.hc,
    speciality: form.especialidade,
  };

  console.log(
    "Body",
    reqBody,
    `${process.env.REACT_APP_API_HOST}/attendance/create`
  );

  return axios.post(
    `${process.env.REACT_APP_API_HOST}/attendance/create`,
    reqBody
  );
};
