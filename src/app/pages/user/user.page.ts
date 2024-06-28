import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { IUser } from "core/domain/models/user.model";
import { UserService } from "core/domain/services/user.service";
import { RouterUtils } from "core/utils/router.utils";

@Component({
    templateUrl: "./user.page.html",
    styleUrls: ["./user.page.scss"]
})
export class UserPage implements OnInit {
    @ViewChild('userInfoForm') userInfoForm!: ElementRef;

    editable: boolean = false
    user: any;

    isShowToast: boolean = false
    textToast: string = ""
    backgroundToast: string = ""
    
    constructor(
        private _userService: UserService,
        private _routerUtils: RouterUtils
    ) { }

    ngOnInit(): void {
        this._userService.read(this._routerUtils.getIdInRoute())
            .then((response: IUser) => {
                this.user = this._userService.createUserData(response)
            })
    }

    onClickBackButton() {
        this._routerUtils.goToLink("all-users")
    }

    onClickEditUser() {
        this.editable = !this.editable
        
    }

    onClickSaveEdit() {
        const form = this.userInfoForm.nativeElement;
        const payload: any = {}
        for (const field in this.user) {
            if (form.querySelector(`#${field}`) !== null) {
                if (field === form.querySelector(`#${field}`).id) {
                    if (this.user[field] !== form.querySelector(`#${field}`).value) {
                        payload[field] = form.querySelector(`#${field}`).value
                    }
                }
            }
        }
        payload["id"] = this.user.id

        this._userService.update(this.user.id, payload)
        .then(() => {
            this.editable = !this.editable
            this.openToast("User information has been updated successfully", "primary")
        })
        .catch((error) => {
            this.editable = !this.editable
            this.openToast(error.mensage, "danger")
        })
    }

    openToast(text: string, background: string) {
        this.textToast = text
        this.backgroundToast = background
        this.isShowToast = true

        setTimeout(() => {
            this.isShowToast = false
        }, 3000);
    }
}