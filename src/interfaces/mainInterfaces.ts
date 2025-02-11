import React from "react";

export interface ISearchOption {
    value: string;
    label: string;
}

export interface IValidations {
    isEmpty: boolean
    minLength: number
    maxLength: number
    isString?: boolean
    isUrl?: boolean
}