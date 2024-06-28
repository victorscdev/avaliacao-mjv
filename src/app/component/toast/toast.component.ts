import { Component, Input } from "@angular/core";

@Component({
    selector: "toast-component",
    template:`
        <div 
            [ngClass]="{'show': isShow}"
            class="toast 
            align-items-center 
            text-bg-{{ background }} border-0" 
            role="alert" 
            aria-live="assertive" 
            aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    {{ text }}
                </div>
            </div>
        </div>
    `,
    styleUrls: ["./toast.component.scss"]
})
export class ToastComponent {
    @Input() isShow: boolean = false
    @Input() text: string = ""
    @Input() background: string = "primary"
}