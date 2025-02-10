import React, {useState} from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";
import Pagination from "../Pagination/Pagination";

function List() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2);

    const lasItemIndex: number = currentPage * itemsPerPage;
    const firstItemIndex: number = lasItemIndex - itemsPerPage;

    function paginate(pageNumber: number) {
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <ul className="list">
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </ul>

            <Pagination paginate={paginate} setCurrentPage={setCurrentPage} currentPage={currentPage} totalListItems={5} listItemsPerPage={itemsPerPage}/>
        </>
    )
}

export default List;