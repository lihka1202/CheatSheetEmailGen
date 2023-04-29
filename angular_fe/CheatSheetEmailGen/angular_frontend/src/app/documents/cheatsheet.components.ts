import { Component } from "@angular/core";
import {CheatSheet} from './CheatSheet';

@Component({
    selector: 'cheatsheet',
    templateUrl: 'cheatsheet.components.html',
    styleUrls: ['cheatsheet.component.css']
})

export class CheatsheetComponent {
    cheatsheets : CheatSheet[] = [
        {
            title: "CG2023 - Midterms",
            description: "CG2023 Midterms URL. This is largely a test holder before we get the actual data from the API. For the time being, this is to ensure" +
            "that the card item looks right!",
            file_url: "https://mnakhil.me/#/",
            updated_at: "at 29/4/2023 at 3:46",
        },
        {
            title: "EE2026 - Finals Cheat sheet",
            description: "EE2026 Midterms URL. This is largely a test holder before we get the actual data from the API. For the time being, this is to ensure" +
            "that the card item looks right!",
            file_url: "https://mnakhil.me/#/",
            updated_at: "at 29/4/2023 at 3:46",
        },
        {
            title: "CS3243 - Finals Cheat sheet",
            description: "CS3243 Midterms URL. This is largely a test holder before we get the actual data from the API. For the time being, this is to ensure" +
            "that the card item looks right!",
            file_url: "https://mnakhil.me/#/",
            updated_at: "at 29/4/2023 at 3:46",
        }
    ]
}