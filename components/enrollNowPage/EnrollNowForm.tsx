"use client";

import { useState } from "react";
import WorkWeekCalendar from "../WorkWeekCalendar";
import CustomSelect from "../CustomSelect";

export default function EnrollNow() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        startDate: "",
        program: ""
    });

    const [formErrors, setFormErrors] = useState<{
        name?: string;
        email?: string;
        phone?: string;
        startDate?: string;
        program?: string;
    }>({});

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormErrors({ ...formErrors, [e.target.name]: "" }); // clear error on change
    };

    const validateForm = () => {
        const errors: typeof formErrors = {};

        if (!formData.name.trim()) errors.name = "Full name is required.";
        if (!formData.email.trim()) errors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid.";
        if (!formData.phone.trim()) errors.phone = "Phone number is required.";
        if (!formData.program) errors.program = "Please select a program.";
        if (!formData.startDate) errors.startDate = "Please select a start date.";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        console.log("Enrollment submitted:", formData);
        setSubmitted(true);
    };

    return (
        <section className="pt-25 bg-gray-50 flex justify-center w-full">
            <div className="w-full px-4 md:px-0 md:w-[70%]">
                {!submitted ? (
                    <>
                        <div
                            className="text-center mb-10"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                                Enroll <span className="text-yellow-400">Now</span>
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                                Fill out your details below and start your skill journey today!
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className={`w-full border rounded-lg px-4 py-2 focus:ring-2 outline-none text-gray-900 ${formErrors.name ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-yellow-300"
                                            }`}
                                    />
                                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className={`w-full border rounded-lg px-4 py-2 focus:ring-2 outline-none text-gray-900 ${formErrors.email ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-yellow-300"
                                            }`}
                                    />
                                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+977 98 000 0000"
                                        className={`w-full border rounded-lg px-4 py-2 focus:ring-2 outline-none text-gray-900 ${formErrors.phone ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-yellow-300"
                                            }`}
                                    />
                                    {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                                </div>

                                {/* Program Select */}
                                <div>
                                    <CustomSelect
                                        value={formData.program}
                                        label="Select A Program"
                                        options={[
                                            "AC & Refrigeration Technician",
                                            "Aged Care Nurse",
                                            "Carpenter",
                                            "Chef (Cook)",
                                            "Civil Engineer Assistant",
                                            "Electrician",
                                            "Metal Calibrator",
                                            "Plumber",
                                            "Welder",
                                        ]}
                                        onSelect={(data) => {
                                            setFormData({ ...formData, program: data });
                                            setFormErrors({ ...formErrors, program: "" });
                                        }}
                                    />
                                    {formErrors.program && <p className="text-red-500 text-sm">{formErrors.program}</p>}
                                </div>
                            </div>

                            {/* Calendar */}
                            <WorkWeekCalendar
                                onSelectDate={(date) => {
                                    setFormData({ ...formData, startDate: date });
                                    setFormErrors({ ...formErrors, startDate: "" });
                                }}
                            />
                            {formErrors.startDate && <p className="text-red-500 text-sm mt-1">{formErrors.startDate}</p>}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full cursor-pointer bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition-all"
                            >
                                Enroll Now
                            </button>
                        </form>
                    </>
                ) : (
                    <div
                        className="bg-white p-10 rounded-3xl shadow-xl text-center flex flex-col items-center space-y-4"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-green-500">🎉 Congratulations!</h2>
                        <p className="text-gray-700 text-lg">
                            Thank you, {formData.name}! You have successfully enrolled. We will contact you soon regarding your class starting date.
                        </p>
                        <p className="text-gray-500 text-sm">Check your email and phone for confirmation.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
