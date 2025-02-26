import { useFormik } from "formik";
import { contactValidationSchema } from "./validation";
import { toast } from "react-toastify";

export const useContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
        validationSchema: contactValidationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_GET_FORM_URL, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    resetForm();
                    toast.success("Formulario enviado correctamente");
                } else {
                    toast.error("Error al enviar el formulario");
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
                toast.error("Error al enviar el formulario");
            }
            setSubmitting(false);
        },
    });

    return { formik };
};
