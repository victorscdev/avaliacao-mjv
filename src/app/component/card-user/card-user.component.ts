import { Component, Input } from "@angular/core";
import { RouterUtils } from "core/utils/router.utils";

@Component({
    selector: 'card-user',
    templateUrl: "./card-user.component.html",
    styleUrls: ["./card-user.component.scss"]
})
export class CardUserComponent {
    @Input() data: any

    constructor(
        private _routerUtils: RouterUtils
    ) {}

    onBtnViewClick(id: string) {
        this._routerUtils.goToLink(`users/${id}`)
    }
}