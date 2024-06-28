import { Component, OnInit } from "@angular/core";
import { UserGateway } from "core/infrastructure/gateways/user.gateway"; 
import { RouterUtils } from "core/utils/router.utils";

@Component({
    templateUrl: "./all-users.page.html",
    styleUrls: ["./all-users.page.scss"]
})
export class AllUsersPage implements OnInit {
    users: any

    constructor(
        private _UserGateway: UserGateway,
        private _routerUtils: RouterUtils
    ) { }

    ngOnInit(): void {
        this._UserGateway.getList()
            .then((response) => {
                this.users = response.data
            })
    }

    onClickNewUser() {
        this._routerUtils.goToLink("new-user")
    }
}