import {Component} from '@angular/core'
import {EmailGen} from './EmailGen'

@Component({
    selector : 'emailGen-list',
    templateUrl : 'emailGen-list.components.html',
    styleUrls: ['emailGen-list.components.css']
})

export class EmailGenListComponent{
    email1: EmailGen = new EmailGen('1','mnakhilwork@gmail.com', 'mpnchar@icloud.com', 'findtheword@gmail.com', 'cc2@gmail.com', 'COO', 'intoo', 'financial advisory');
    email2: EmailGen = new EmailGen('2','mnakhilwork@gmail.com', 'mpnchar@icloud.com', 'findtheword@gmail.com', 'cc2@gmail.com', 'COO', 'Sefirot', 'financial advisory');
    email3: EmailGen = new EmailGen('3','mnakhilwork@gmail.com', 'mpnchar@icloud.com', 'findtheword@gmail.com', 'cc2@gmail.com', 'COO', 'Spotify', 'financial advisory');
    emailList : EmailGen[] = [
        this.email1, this.email2, this.email3
    ]
}