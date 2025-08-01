"use client";

import { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";

const ManagementPage = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchDoctors = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/management");
            const data = await response.json();

            setDoctors(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        } finally {
            setLoading(false);
        }
    }

    const filteredDoctors = useMemo(() => {
        return doctors.filter((doctor) =>
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, doctors]);

    const updateAvailability = async (doctorId, newAvailability) => {
        try {
            const response = await fetch(`http://localhost:3001/api/management/${doctorId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ availability: newAvailability }),
            });
            if (!response.ok) {
                throw new Error("Failed to update availability");
            }
            fetchDoctors();
        } catch (error) {
            console.error("Error updating availability:", error);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col p-5 pt-25 bg-ebony-950 text-white min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Management</h1>
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
            <ul className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {doctors.map((doctor) => (
                    <li key={doctor.id} className="bg-ebony-700/30 p-4 rounded-lg shadow-md flex flex-row justify-between items-center hover:bg-ebony-400/30 transition-colors hover:scale-102 transition-transform cursor-pointer">
                        <div>
                            <h2 className="text-lg font-bold">{doctor.name}</h2>
                            <p className="text-sm">{doctor.specialization}</p>
                        </div>
                        <div>
                            <select className="mt-2 bg-ebony-800 text-white p-2 rounded" value={doctor.availability} onChange={(e) => updateAvailability(doctor.id, e.target.value)}>
                                <option value="Available">Available</option>
                                <option value="Busy">Busy</option>
                                <option value="On Leave">On Leave</option>
                                <option value="Unavailable">Unavailable</option>
                                <option value="Appointed">Appointed</option>
                            </select>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ManagementPage;