import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterUtils } from "core/utils/router.utils";
import { AllUsersPage } from "./all-users.page";
import { FetchBase } from "core/data/fetch-base";
import { UserService } from "core/services/user.service";
import { CardUserModule } from "src/app/component/card-user/card-user.module";

@NgModule({
    declarations: [AllUsersPage],
    imports: [
        CommonModule,
        RouterUtils.createRouterPage("", AllUsersPage),
        CardUserModule
    ],
    providers: [
        FetchBase,
        UserService
    ],
    exports: [AllUsersPage],
})
export class AllUsersModule {}