import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardUserComponent } from "./card-user.component";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { RouterUtils } from "core/utils/router.utils";
import { ModalDeleteUserModule } from "../modals/delete-user/delete-user.module";

@NgModule({
    declarations: [CardUserComponent],
    imports: [
        CommonModule,
        TooltipModule,
        ModalDeleteUserModule
    ],
    exports: [CardUserComponent],
    providers: [RouterUtils]
})
export class CardUserModule { }