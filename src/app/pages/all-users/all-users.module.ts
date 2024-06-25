import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterUtils } from "core/utils/router.utils";
import { AllUsersPage } from "./all-users.page";
import { TooltipModule } from "ngx-bootstrap/tooltip";

@NgModule({
    declarations: [AllUsersPage],
    imports: [
        CommonModule,
        RouterUtils.createRouterPage("", AllUsersPage),
        TooltipModule
    ],
    exports: [AllUsersPage]
})
export class AllUsersModule {}