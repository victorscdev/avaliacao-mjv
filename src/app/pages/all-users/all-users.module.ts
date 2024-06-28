import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterUtils } from "core/utils/router.utils";
import { AllUsersPage } from "./all-users.page";
import { UserGateway } from "core/infrastructure/gateways/user.gateway";
import { CardUserModule } from "src/app/component/card-user/card-user.module";

@NgModule({
    declarations: [AllUsersPage],
    imports: [
        CommonModule,
        RouterUtils.createRouterPage("", AllUsersPage),
        CardUserModule
    ],
    providers: [
        UserGateway
    ],
    exports: [AllUsersPage],
})
export class AllUsersModule {}