import { Component } from '@angular/core';
import { BaseService } from './base.service';
@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav.html',
    styleUrls: ['app/nav.css']
})
export class NavComponent {
    constructor(private comunication:BaseService){
        
    }
    public MensajeSealand(data:any)
    {
        console.log ("Sealand Rules!") ;
        this.comunication.emit("Hola Sealand");
    }
 }
