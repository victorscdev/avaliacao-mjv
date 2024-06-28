import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardUserComponent } from "./card-user.component";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { RouterUtils } from "core/utils/router.utils";

@NgModule({
    declarations: [CardUserComponent],
    imports: [
        CommonModule,
        TooltipModule,
    ],
    exports: [CardUserComponent],
    providers: [RouterUtils]
})
export class CardUserModule { }