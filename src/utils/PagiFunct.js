
function PagiFunct(length, list, currentPage) {



    const TOU_PER_PAGE = 6;
    const pages = Math.ceil(length / TOU_PER_PAGE);
    const startindex = (currentPage - 1) * TOU_PER_PAGE;
    const finishindex = currentPage * TOU_PER_PAGE;

    const orderedTourList = list.slice(startindex, finishindex);
    return {
        pages,
        orderedTourList
    }


}
export default PagiFunct;



