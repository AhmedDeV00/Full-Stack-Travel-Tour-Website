import React from 'react'
import Hero from '../../components/hero/Hero';
import Pagination from '../../components/pagination/Pagination.jsx';
import Services from '../../components/services/Services';
import Tourlist from '../../components/tourList/Tourlist';
//import { toursList } from "../../data.js";
import SortTours from '../../components/Sort-tours/SortTours.jsx';
import Banner from '../../components/banner/Banner.jsx';
import NewsLetter from '../../components/new-letter/NewsLetter.jsx';
//import PagiFunct from '../../utils/PagiFunct.js';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


function Home() {

    const [currentPage, setCurrentPage] = useState(1);
    const [sortItem, setSortItem] = useState("recomended");
    const TOURS_PER_PAGE = 6;

    // Fetch function with pagination
    const fetchTours = async ({ queryKey }) => {
        const [{ page = currentPage, limit = TOURS_PER_PAGE }] = queryKey;
        const { data } = await axios.get(`http://localhost:3002/api/tours?page=${page}&limit=${limit}`);
        console.log(data);
        return data;
    };

    const { data = { tours: [], total: 0 }, isLoading, error } = useQuery({
        queryKey: ["tours", { page: currentPage, limit: TOURS_PER_PAGE, }],
        queryFn: fetchTours,
        keepPreviousData: true, // Keeps the previous data until the new data is loaded
        staleTime: 5000,
    });

    // Destructure tours and total from data
    const { tours, total } = data; // Extract tours and total count
    const totalPages = Math.ceil(total / TOURS_PER_PAGE);

    if (isLoading) return <p style={{ color: "red" }}>Loading tours...</p>;
    if (error) return <p>Error fetching tours: {error.message}</p>;

    // Sorting logic
    const sortedTours = tours.sort((a, b) => {
        if (sortItem === "low") return a.priceFrom - b.priceFrom;
        if (sortItem === "high") return b.priceFrom - a.priceFrom;
        return b.rating - a.rating; // Default: recommended (by rating)
    });

    return (
        <div>
            <Hero />
            <Services />
            <SortTours setSortItem={setSortItem} sortItem={sortItem} toursLength={total} />
            <Tourlist tourList={sortedTours} />
            <Pagination pages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Banner />
            <NewsLetter />
        </div>
    );
}

export default Home