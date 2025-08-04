"use client";

import { useState, useEffect } from "react";
import { CopyX } from "lucide-react";
import ScrollVelocity from "../components/scrollVelocity/pages";


const AppointmentsPage = () => {
    const [loading, setLoading] = useState(true);
    interface Appointment {
        id: string;
        name: string;
        email: string;
        datetime: string;
        doctor_name: string;
    }

    const [appointments, setAppointments] = useState<Appointment[]>([]);

    const fetchAppointments = async () => {
        try {
            const response = await fetch("https://medilist-back.onrender.com/api/appointments");
            const data = await response.json();
            console.log(data);
            setAppointments(data);
        } catch (error) {
            console.error("Error fetching appointments:", error);
        } finally {
            setLoading(false);
        }
    }

    const deleteAppointment = async (id: string) => {
        try {
            const response = await fetch(`https://medilist-back.onrender.com/api/appointments/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete appointment");
            }
            fetchAppointments();
        } catch (error) {
            console.error("Error deleting appointment:", error);
        }
    }

    useEffect(() => {
        fetchAppointments();
    }, []);


    return (
        <div className="flex flex-col p-5 pt-25 bg-ebony-950 text-white min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Appointments</h1>
            <ul className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {loading && <li>Loading...</li>}
                {!loading ? (
                    appointments.length > 0 ? (
                        appointments.map((appointment) => (
                            <li key={appointment.id} className="bg-ebony-900/40 p-4 rounded-lg shadow-md flex flex-row justify-between items-center hover:bg-ebony-400/30 transition-colors">
                                <div>
                                    <span className="text-ebony-50 font-bold">Doctor: {appointment.doctor_name}</span> <br />
                                    <p className="text-md text-ebony-100">{appointment.name} - {appointment.datetime} </p>
                                    <span className="text-blue-102">({appointment.email})</span>
                                </div>
                                <div>
                                    <button
                                        onClick={() => deleteAppointment(appointment.id)}
                                        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600/40 transition-colors"
                                    >
                                        <CopyX />
                                    </button>
                                </div>
                            </li>
                        ))
                    ) : (
                        <div className="text-center text-gray-500">No appointments found</div>
                    )
                ) : (
                    <div className="text-center text-gray-500">
                        <div className='mt-8 flex justify-center'>
                            <ScrollVelocity
                                texts={['Fetching Data', 'Please wait...']}
                                velocity={100}
                                className="custom-scroll-text w-screen"
                            />
                        </div>
                    </div>
                )}
                    </ul>
        </div>
    );
}
export default AppointmentsPage;