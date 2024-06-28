import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterUtils } from "core/utils/router.utils";
import { UserPage } from "./user.page";
import { UserService } from "core/domain/services/user.service";
import { ToastModule } from "src/app/component/toast/toast.module";

@NgModule({
    declarations: [UserPage],
    imports: [
        CommonModule,
        RouterUtils.createRouterPage("", UserPage),
        ToastModule
    ],
    providers: [
        UserService,
        RouterUtils
    ],
    exports: [UserPage],
})
export class UserModule { }