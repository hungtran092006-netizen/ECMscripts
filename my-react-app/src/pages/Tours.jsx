import { useState, useEffect } from "react";
import { toursAPI } from "../services/api";
import TourCard from "../components/TourCard";


function Tours() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                setLoading(true);
                const response = await toursAPI.getAll();
                setTours(response.data);
                setError(null);
            } catch (err) {
                setError("Không thể tải danh sách tours");
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-lg text-gray-600">Đang tải...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-6">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">✈️ Danh sách Tours</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        </div>
    );
}

export default Tours;