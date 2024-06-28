import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModalDeleteUserComponent } from "./delete-user.component";
import { UserService } from "core/domain/services/user.service";
import { ToastModule } from "../../toast/toast.module";

@NgModule({
    declarations: [ModalDeleteUserComponent],
    imports: [
        CommonModule,
        ToastModule
    ],
    providers: [UserService],
    exports: [ModalDeleteUserComponent],
})
export class ModalDeleteUserModule { }