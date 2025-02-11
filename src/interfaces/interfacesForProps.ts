import React from "react";

export interface IPropsPagination {
    listItemsPerPage: number
    totalListItems: number
    paginate: (pageNumber: number) => void
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    currentPage: number
}

export interface IPropsItemInfoSubtitle {
    title: string
    value: string
}