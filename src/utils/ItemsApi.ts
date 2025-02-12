import {IApiOptions, IItemAuto, IItemRealEstate, IItemServices} from "../interfaces/mainInterfaces";

type RequestBody = IItemAuto | IItemServices | IItemRealEstate;

class ItemApi {
    private _url: string;
    private _header: { [key: string]: string };

    constructor(options: IApiOptions) {
        this._url = options.url;
        this._header = options.headers;
    }

    getItems() {
        return fetch(`/items`, {
            headers: this._header
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => console.log(err));
    }

    getItemByID(id: string | undefined) {
        return fetch(`/items/${id}`, {
            headers: this._header
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => console.log(err));
    }

    addItem(data: RequestBody) {
        return fetch(`/items`, {
            method: 'POST',
            headers: this._header,
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(new Error(res.status.toString()));
                }
            })
            .catch((err) => console.log(err));
    }

}

const ItemApiOptions = {
    url: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
}

export const itemsApi = new ItemApi(ItemApiOptions);