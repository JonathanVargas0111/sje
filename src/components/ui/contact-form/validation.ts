import * as Yup from "yup";

export const contactValidationSchema = Yup.object({
  name: Yup.string().required("Campo requerido"),
  phone: Yup.string().required("Campo requerido"),
  email: Yup.string().email("Email inválido").required("Campo requerido"),
  message: Yup.string().required("Campo requerido"),
});
