import { Component } from "@angular/core";
import { EmailGen } from "./EmailGen";

@Component({
    selector : 'emailGen-create',
    templateUrl : 'emailGen-create.components.html',
    styleUrls: ['emailGen-create.components.css']
})

export class EmailGenCreateComponent{
    emailgen = new EmailGen;
}