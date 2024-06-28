import { Component, OnInit } from "@angular/core";
import { UserGateway } from "core/infrastructure/gateways/user.gateway"; 

@Component({
    templateUrl: "./all-users.page.html",
    styleUrls: ["./all-users.page.scss"]
})
export class AllUsersPage implements OnInit {
    users: any

    constructor(
        private _UserGateway: UserGateway
    ) { }

    ngOnInit(): void {
        this._UserGateway.getList()
            .then((response) => {
                this.users = response.data
            })
    }
}