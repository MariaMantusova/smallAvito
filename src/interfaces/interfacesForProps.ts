import React from "react";
import {ISearchOption, IValidations} from "./mainInterfaces";

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

export interface IPropsCategoryForm {
    names: string[];
    types: string[];
    options: ISearchOption[];
    validations: any[];
    requirements: boolean[];
}