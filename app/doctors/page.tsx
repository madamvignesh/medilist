"use client";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { Search, X } from "lucide-react";
import Stepper, { Step } from "../components/stepper/stepper";
import ScrollVelocity from "../components/scrollVelocity/pages";

const DoctorsPage = () => {
    type Doctor = {
        id: string;
        name: string;
        email: string;
        datetime: string;
        doctor_name: string;
        specialization: string;
        availability: string;
        profile_image: string;
    };

    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

    const [showModal, setShowModal] = useState(false);
    const [patientName, setPatientName] = useState("");
    const [patientEmail, setPatientEmail] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");

    const fetchDoctors = async () => {
        setLoading(true);
        const response = await fetch(`https://medilist-back.onrender.com/api/doctors/search?search=${searchTerm}`);
        const data = await response.json();
        setDoctors(data);
        setLoading(false);
        console.log("Fetched doctors:", data);
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    useEffect(() => {

        fetchDoctors();
    }, [searchTerm]);

    const handleBook = (doctor: Doctor) => {
        setSelectedDoctor(doctor);
        setShowModal(true);
    };

    const bookAppointment = async (doctor: Doctor) => {
        const body = { name: patientName, email: patientEmail, datetime: appointmentDate, doctor_name: doctor.name };
        try {
            const response = await fetch("https://medilist-back.onrender.com/api/book", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            console.log(data);
            alert(data.message);
            setShowModal(false);
            setPatientName("");
            setPatientEmail("");
            setAppointmentDate("");
            setSelectedDoctor(null);

            await fetchDoctors();
        } catch (error) {
            console.error("Error booking appointment:", error);
            alert("Failed to book appointment. Please try again.");
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-ebony-950 text-white p-10 pt-25">
            <h1 className="text-3xl font-bold mb-4">
                Find your <span className="text-blue-500">Doctor</span> here, book your{" "}
                <span className="text-blue-700">appointment now</span>!!
            </h1>

            <div className="bg-ebony-900/40 p-3 rounded-lg shadow-lg mb-8 flex flex-row items-center justify-between gap-4 focus-within:ring-2 ring-ebony-500">
                <Search />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-11/12 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500"
                    placeholder="Search for doctors..."
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Search
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {!loading ? (

                    doctors.length > 0 ? (
                        doctors.map((doctor) => (
                            <div
                                key={doctor.id}
                                className="bg-ebony-700/40 p-5 rounded-lg shadow-md hover:scale-95 transition-transform hover:bg-ebony-600/50 cursor-pointer"
                            >
                                <div className="flex flex-row items-center justify-between mb-4">
                                    <div>
                                        <h2 className="text-xl text-blue-102/90 font-bold mb-2">{doctor.name}</h2>
                                        <p className="text-ebony-500 font-semibold mb-4">{doctor.specialization}</p>
                                    </div>
                                    <Image
                                        src={doctor.profile_image}
                                        alt={doctor.name}
                                        width={50}
                                        height={50}
                                        className="rounded-full mb-4"
                                    />
                                </div>
                                <div className="flex flex-row items-center justify-between">
                                    <p className="text-ebony-50">
                                        Available: <span className="font-bold">{doctor.availability}</span>
                                    </p>
                                    {doctor.availability === "Available" ? (
                                        <button
                                            onClick={() => handleBook(doctor)}
                                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                                        >
                                            Book Appointment
                                        </button>) : (
                                        <p className="text-red-500">Not Available</p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No doctors found</p>
                    )
                ) : (
                    <div>
                        <div className='mt-8 flex justify-center'>
                            <ScrollVelocity
                                texts={['Fetching Data', 'Please wait...']}
                                velocity={100}
                                className="custom-scroll-text w-screen"
                            />
                        </div>
                    </div>
                )}


                {/* Modal */}
                {showModal && selectedDoctor && (
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 ">
                        <div className=" pt-4 pb-4 gap-3 rounded-2xl shadow-lg w-full max-w-lg">
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-2 right-2 text-white hover:text-red-600 ml-2"
                            >
                                <X width={50} height={50} />
                            </button>
                            <Stepper
                                initialStep={1}
                                onStepChange={(step) => {
                                    console.log(step);
                                }}
                                onFinalStepCompleted={() => bookAppointment(selectedDoctor)}
                                backButtonText="Previous"
                                nextButtonText="Next"
                            >
                                <Step>
                                    <h2>Hi, My name is <span className="font-bold">{selectedDoctor.name}</span>!</h2>
                                    <p>Check out the next step!</p>
                                </Step>
                                <Step>
                                    <div className="flex flex-col gap-4 p-2">
                                        <h2>Step 2: What is the patient&#39;s name?</h2>

                                        <input value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="Your name?" className="stepper-input" />
                                    </div>

                                </Step>
                                <Step>
                                    <div className="flex flex-col gap-4 p-2">
                                        <h2>Step 3: What is the patient&#39;s email?</h2>
                                        <input value={patientEmail} onChange={(e) => setPatientEmail(e.target.value)} placeholder="Your email?" className="stepper-input" />
                                    </div>
                                </Step>
                                <Step>
                                    <div className="flex flex-col gap-4 p-2">
                                        <h2>Final Step</h2>
                                        <input type="datetime-local" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} className="stepper-input" />
                                    </div>
                                </Step>
                            </Stepper>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DoctorsPage;
