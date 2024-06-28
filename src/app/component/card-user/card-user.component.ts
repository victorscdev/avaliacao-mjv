import { Component, Input } from "@angular/core";
import { RouterUtils } from "core/utils/router.utils";

@Component({
    selector: 'card-user',
    templateUrl: "./card-user.component.html",
    styleUrls: ["./card-user.component.scss"]
})
export class CardUserComponent {
    @Input() data: any
    @Input() allUsers: any

    isOpenModal: boolean = false
    deleteIdUser: string = ""

    constructor(
        private _routerUtils: RouterUtils
    ) {}

    onBtnViewClick(id: string) {
        this._routerUtils.goToLink(`users/${id}`)
    }
    
    onClickOpenModal(id: string) {
        this.isOpenModal = !this.isOpenModal
        this.deleteIdUser = id
    }
}