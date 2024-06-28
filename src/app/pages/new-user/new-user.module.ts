import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterUtils } from "core/utils/router.utils";
import { NewUserPage } from "./new-user.page";
import { ToastModule } from "src/app/component/toast/toast.module";
import { UserService } from "core/domain/services/user.service";

@NgModule({
    declarations: [NewUserPage],
    imports: [
        CommonModule,
        RouterUtils.createRouterPage("", NewUserPage),
        ToastModule
    ],
    providers: [
        RouterUtils,
        UserService
    ],
    exports: [NewUserPage],
})
export class NewUserModule { }