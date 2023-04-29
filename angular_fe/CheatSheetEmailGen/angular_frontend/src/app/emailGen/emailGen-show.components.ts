import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Params } from "@angular/router";
import { EmailGen } from "./EmailGen";
import { OnInit } from "@angular/core";
@Component({
    moduleId : module.id,
    selector : 'emailGen-show',
    templateUrl : "emailGen-show.components.html",
    styleUrls: ['emailGen-show.componenets.css']
})

export class EmailGenShowComponents implements OnInit{
    id : number;
    routeID : any;

    constructor(
        private route : ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.routeID = this.route.params.subscribe(
            params => {
                this.id = +params['id']
            }
        )
    }
}
