import { Component, Input } from "@angular/core";

@Component({
    selector: 'card-user',
    templateUrl: "./card-user.component.html",
    styleUrls: ["./card-user.component.scss"]
})
export class CardUserComponent {
    @Input() data: any
}