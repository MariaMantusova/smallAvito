import {IApiOptions} from "../interfaces/mainInterfaces";

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
}

const ItemApiOptions = {
    url: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
}

export const itemsApi = new ItemApi(ItemApiOptions);