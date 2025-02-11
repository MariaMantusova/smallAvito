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

export interface IApiOptions {
    url: string
    headers: {
        [key: string]: string
    };
}

export interface IItemRealEstate {
    name: string,
    description: string,
    location: string,
    type: string,
    propertyType: string,
    area: number,
    rooms: number,
    price: number,
    photo?: string,
    id: number
}

export interface IItemAuto {
    name: string,
    description: string,
    location: string,
    type: string,
    brand: string,
    model: string,
    year: number,
    mileage?: number,
    photo?: string,
    id: number
}

export interface IItemServices {
    name: string,
    description: string,
    location: string,
    type: string,
    serviceType: string,
    experience: number,
    cost: number,
    workSchedule?: string,
    photo?: string,
    id: number
}