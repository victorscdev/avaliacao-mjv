import { Component, Input } from "@angular/core";
import { UserService } from "core/domain/services/user.service";

@Component({
    selector: "modal-delete-user-component",
    templateUrl: "./delete-user.component.html",
    styleUrls: ["./delete-user.component.scss"]
})
export class ModalDeleteUserComponent { 
    @Input() isOpen: boolean = false
    @Input() deleteIdUser: any
    @Input() allUsers: any

    isShowToast: boolean = false
    textToast: string = ""
    backgroundToast: string = ""

    constructor(
        private _userService: UserService
    ) {}

    onClickDelete() {
        this._userService.delete(this.deleteIdUser)
            .then(() => {
                this.openToast("User has been deleted successfully", "primary")
                this.allUsers = this._userService.deleteUserDataById(this.allUsers, this.deleteIdUser)
                this.isOpen = !this.isOpen
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