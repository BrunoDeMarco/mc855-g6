import axios from "axios";

import { FormValues } from "../FormContextProvider/FormContextProvider";

export const submitForm = (form: FormValues) => {
  return axios.post("ENDPOINT-DA-CRIACAO-VAI-AQUI", form);
};
