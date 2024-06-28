import { Component, OnInit } from "@angular/core";
import { UserService } from "core/services/user.service";

@Component({
    templateUrl: "./all-users.page.html",
    styleUrls: ["./all-users.page.scss"]
})
export class AllUsersPage implements OnInit {
    title: string = "All Users";
    users: any

    constructor(
        private _userService: UserService
    ) { }

    ngOnInit(): void {
        this._userService.getData()
            .then((response) => {
                this.users = response.data
            })
    }
}