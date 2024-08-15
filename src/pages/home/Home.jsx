import React from 'react'
import Hero from '../../components/hero/Hero';
import Pagination from '../../components/pagination/Pagination.jsx';
import Services from '../../components/services/Services';
import Tourlist from '../../components/tourList/Tourlist';
import { toursList } from "../../data.js";
import SortTours from '../../components/Sort-tours/SortTours.jsx';
import Banner from '../../components/banner/Banner.jsx';
import NewsLetter from '../../components/new-letter/NewsLetter.jsx';
import PagiFunct from '../../utils/PagiFunct.js';
import { useState } from 'react';


function Home() {

    const [currentPage, setCurrentPage] = useState(1);
    const [sortItem, setSortItem] = useState("recomended")




    // Sort Tour
    const sortedTourList =
        sortItem === "low"
            ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
            : sortItem === "high" ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
                : toursList.sort((a, b) => b.rating - a.rating);


    const { pages, orderedTourList } = PagiFunct(toursList.length, sortedTourList, currentPage);
    return (
        <div>
            <Hero />
            <Services />
            <SortTours setSortItem={setSortItem} sortItem={sortItem} toursLength={toursList.length} />
            <Tourlist toursList={orderedTourList} />
            <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Banner />
            < NewsLetter />
        </div>
    )
}

export default Home