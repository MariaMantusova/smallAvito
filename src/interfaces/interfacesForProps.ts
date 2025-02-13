import React, {FormEvent} from "react";
import {IItemAuto, IItemRealEstate, IItemServices, ISearchOption} from "./mainInterfaces";

export interface IPropsPagination {
    listItemsPerPage: number
    totalListItems: number
    paginate: (pageNumber: number) => void
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    currentPage: number
}

export interface IPropsItemInfoSubtitle {
    title: string
    value: string | number | undefined
}

export interface IPropsCategoryForm {
    names: string[];
    types: string[];
    options: ISearchOption[];
    validations: any[];
    subcategory: string;
    setSubcategory: React.Dispatch<React.SetStateAction<string>>;
    requirements: boolean[];
}

export interface IPropsItemPage {
    getItem: (id: string | undefined) => void;
    currentItem: IItemServices | IItemAuto | IItemRealEstate | undefined
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

export interface IPropsItemMainInfo {
    item: IItemRealEstate | IItemAuto | IItemServices | undefined;
    image: any
    values: (string | number | undefined)[]
    subCategories: string[]
}

export interface IPropsItemRealEstate {
    item: IItemRealEstate;
}

export interface IPropsItemCar {
    item: IItemAuto;
}

export interface IPropsItemServices {
    item: IItemServices;
}

export interface IPropsForm {
    onSubmit: (evt: FormEvent) => void;
    title: any;
    description: any;
    photo: any;
    location: any;
    isDisabled: boolean;
    onChangeSelect: (value: string) => void;
    category: string;
    setSubcategory: React.Dispatch<React.SetStateAction<string>>;
    validations: any[];
    subcategory: string;
    isDisabledSelect: boolean;
    titleForm: string;
}

export interface IPropsFormAdd {
    onSubmit: (data: IItemServices | IItemAuto | IItemRealEstate) => void | undefined;
}

export interface IPropsFormPage {
    addNewItem: (data: IItemServices | IItemAuto | IItemRealEstate) => void | undefined;
    changeItem: (id: number | undefined, data: IItemServices | IItemAuto | IItemRealEstate) => void | undefined;
    currentItem: IItemServices | IItemAuto | IItemRealEstate | undefined;
}

export interface IPropsFormInput {
    label: string;
    field: any;
    type: string;
    isTextArea: boolean;
    required: boolean;
}