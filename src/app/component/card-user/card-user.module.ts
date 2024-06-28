import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardUserComponent } from "./card-user.component";
import { TooltipModule } from "ngx-bootstrap/tooltip";

@NgModule({
    declarations: [CardUserComponent],
    imports: [
        CommonModule,
        TooltipModule
    ],
    exports: [CardUserComponent]
})
export class CardUserModule { }