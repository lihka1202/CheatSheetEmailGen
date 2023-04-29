import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {HomepageComponent} from './homepage/homepage.component'
import {CheatsheetComponent} from './documents/cheatsheet.components'
import {EmailGenListComponent} from './emailGen/emailGen-list.components'
import {EmailGenCreateComponent} from './emailGen/emailGen-create.components'
import { EmailGenShowComponents } from './emailGen/emailGen-show.components';

const route : Routes = [
    {path : '', redirectTo: '/home', pathMatch: 'full'}, // why do we need path match full
    {path : 'home', component: HomepageComponent},
    {path : 'cheatsheet', component: CheatsheetComponent},
    {path : 'emailGenlist', component: EmailGenListComponent},
    {path : 'emailGencreate', component: EmailGenCreateComponent},
    {path : 'emailGenshow/:id', component: EmailGenShowComponents}
]

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})

export class AppRoutingModule {}