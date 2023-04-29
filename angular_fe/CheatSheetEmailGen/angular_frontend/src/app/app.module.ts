import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import {HomepageComponent} from './homepage/homepage.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CheatsheetComponent} from './documents/cheatsheet.components'
import {EmailGenListComponent} from './emailGen/emailGen-list.components'
import {EmailGenCreateComponent} from './emailGen/emailGen-create.components'
import { EmailGenShowComponents } from './emailGen/emailGen-show.components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
    CheatsheetComponent,
    EmailGenListComponent,
    EmailGenCreateComponent,
    EmailGenShowComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
