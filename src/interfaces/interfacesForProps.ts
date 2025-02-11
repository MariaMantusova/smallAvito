import React from "react";
import {IItemAuto, IItemRealEstate, IItemServices, ISearchOption, IValidations} from "./mainInterfaces";

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
    setSubcategory: React.Dispatch<React.SetStateAction<string>>;
    requirements: boolean[];
}


export interface IPropsListPage {
    items: (IItemRealEstate | IItemAuto | IItemServices)[]
}

export interface IPropsList {
    items: (IItemRealEstate | IItemAuto | IItemServices)[]
}

export interface IPropsListItem {
    item: IItemRealEstate | IItemAuto | IItemServices;
}