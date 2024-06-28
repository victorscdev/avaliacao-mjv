import { Injectable } from "@angular/core";
import { FetchBase } from "core/data/fetch-base";

@Injectable()
export class UserService {

    constructor(
        private _fetchBase: FetchBase
    ) { }

    getData() {
        return this._fetchBase.fetchData('user?limit=10', 'GET')
    }
}