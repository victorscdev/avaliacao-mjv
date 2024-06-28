import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { UserService } from "core/domain/services/user.service";
import { RouterUtils } from "core/utils/router.utils";

@Component({
    templateUrl: "./new-user.page.html",
    styleUrls: ["./new-user.page.scss"]
})
export class NewUserPage implements OnInit {
    @ViewChild('userInfoForm') userInfoForm!: ElementRef;

    isShowToast: boolean = false
    textToast: string = ""
    backgroundToast: string = ""
    
    constructor(
        private _routerUtils: RouterUtils,
        private _userService: UserService,
    ) { }

    ngOnInit(): void {}

    onClickBackButton() {
        this._routerUtils.goToLink("all-users")
    }

    onClickSaveUser() {
        const form = this.userInfoForm.nativeElement;
        const payload: any = {}

        form.querySelectorAll('input').forEach((input: any) => {
            if (input.id === "email" && input.value.length === 0) {
                return this.openToast("Email is Required", "danger")
            }
            if (input.id === "firstName" && input.value.length === 0) {
                return this.openToast("First Name is Required", "danger")
            }
            if (input.id === "lastName" && input.value.length === 0) {
                return this.openToast("Last Name is Required", "danger")
            } else {
                if (input.value.length !== 0) payload[input.id] = input.value
            }
        })

        payload["picture"] = "../../../assets/img/profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper-thumbnail.png"

        this._userService.create(payload)
            .then(() => {
                this.openToast("User has been created successfully", "primary")
                setTimeout(() => {
                    this._routerUtils.goToLink("all-users")
                }, 3500);
            })
            .catch((error) => {
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