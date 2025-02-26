"use client";
import { useContactForm } from "./useContactForm";
import { ToastContainer } from "react-toastify";
import { HiOutlineRefresh } from "react-icons/hi";
import "react-toastify/dist/ReactToastify.css";
import WhatsAppButton from "../whatsapp-button/WhatsAppButton";


const ContactForm = () => {
    const { formik } = useContactForm();

    return (
        <div className="">
            <ToastContainer />
            <form
                onSubmit={formik.handleSubmit}
                className="container flex flex-col w-full max-w-md mx-auto"
            >
                <input
                    className="w-full p-2 my-2 bg-transparent border-2 rounded-lg"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                    <p className="text-xs italic text-red-500">{formik.errors.name}</p>
                )}

                <input
                    className="w-full p-2 my-2 bg-transparent border-2 rounded-lg"
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Enter your phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                    <p className="text-xs italic text-red-500">{formik.errors.phone}</p>
                )}

                <input
                    className="w-full p-2 my-2 bg-transparent border-2 rounded-lg"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                    <p className="text-xs italic text-red-500">{formik.errors.email}</p>
                )}

                <textarea
                    rows={6}
                    className="w-full p-2 my-2 bg-transparent border-2 rounded-lg resize-none"
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && (
                    <p className="text-xs italic text-red-500">{formik.errors.message}</p>
                )}
                <div className="flex items-center justify-between md:flex-row">
                    <button
                        type="submit"
                        className="flex items-center justify-center p-2 text-base duration-300 border-2 rounded-lg w-36 hover:scale-105"
                        disabled={formik.isSubmitting}
                    >
                        {formik.isSubmitting ? (
                            <>
                                <HiOutlineRefresh className="mr-2 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send"
                        )}

                    </button>
                    <p className="text-lg">O</p>
                    <WhatsAppButton />
                </div>
            </form >
        </div >
    );
};

export default ContactForm;
