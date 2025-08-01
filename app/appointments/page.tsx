"use client";

import { useState, useEffect } from "react";
import {CopyX} from "lucide-react";


const AppointmentsPage = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAppointments = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/appointments");
            const data = await response.json();
            console.log(data);
            setAppointments(data);
        } catch (error) {
            console.error("Error fetching appointments:", error);
        } finally {
            setLoading(false);
        }
    }

    const deleteAppointment = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/appointments/${id}`, {
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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col p-5 pt-25 bg-ebony-950 text-white min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Appointments</h1>
            <ul className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {appointments && appointments.map((appointment) => (
                    <li key={appointment.id} className="bg-ebony-900/40 p-4 rounded-lg shadow-md flex flex-row justify-between items-center hover:bg-ebony-400/30 transition-colors">
                        <div>
                            <span className="text-ebony-50 font-bold">Doctor: {appointment.doctor_name}</span> <br/>
                        <p className="text-md text-ebony-100">{appointment.name} - {appointment.datetime} </p>
                            <span className="text-blue-102">({appointment.email})</span>
                        </div>
                        <div>
                            <button
                                onClick={() => deleteAppointment(appointment.id)}
                                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600/40 transition-colors"
                            >
                                <CopyX  />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default AppointmentsPage;