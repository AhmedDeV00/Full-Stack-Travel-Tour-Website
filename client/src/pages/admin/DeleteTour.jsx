import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import "./delete.css"

const fetchTours = async () => {
    try {
        const res = await axios.get("https://travel-tour-6xx0.onrender.com/api/AllTours", {
            withCredentials: true,
        });
        console.log("API response:", res.data); // Log the entire response
        if (Array.isArray(res.data)) {
            return res.data; // Return the array directly if it's an array
        } else if (res.data && Array.isArray(res.data.tours)) {
            return res.data.tours; // Return the tours array if it exists
        } else {
            console.error("Unexpected API response format:", res.data);
            return []; // Return an empty array if the format is unexpected
        }
    } catch (error) {
        console.error("Error fetching tours:", error);
        return []; // Return an empty array on error
    }
};

const deleteTour = async (id) => {
    await axios.delete(`https://travel-tour-6xx0.onrender.com/api/delete-tour/${id}`, {
        withCredentials: true,
    });
};

function DeleteTour() {
    const queryClient = useQueryClient();
    const { data: tours = [], error, isLoading } = useQuery({
        queryKey: ["tours"],
        queryFn: fetchTours,
    });

    console.log(tours);

    const mutation = useMutation({
        mutationFn: deleteTour,
        onSuccess: () => {
            queryClient.invalidateQueries("tours");
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='delete'>
            {tours.map(tour => (
                <div key={tour._id} className='tour-item'>
                    <img src={tour.image} alt="safari-tour" className='tour-item-img' />
                    <span className="tour-item-label">ADVENTURE</span>
                    <div className="tour-item-body">
                        <div className="tour-item-title">{tour.title}</div>
                        <div className="tour-item-duration">{tour.duration} <span>Pickup available</span> <i className="bi bi-dot"></i></div>
                        <div className="tour-item-price">
                            <strong>from ${tour.priceFrom}</strong> per Person
                        </div>
                        <button className='delete' onClick={() => mutation.mutate(tour._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DeleteTour;
