import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { InjectorService }  from './componentinjector';
import {Form2Component} from './form2.component';
import {FormRegisterComponent} from './formregister.component';
import { BaseService } from './base.service';


@Component({
    selector: 'main',
    templateUrl: 'app/main.html',
    styleUrls: ['app/main.css']
})
export class MainComponent {
    @ViewChild('container',{read: ViewContainerRef}) containerRef: ViewContainerRef;
    
    constructor(private injector:InjectorService, private comunication:BaseService ){
        console.log("Existe componente");
        this.comunication.source.subscribe((item:any)=>this.recibe(item));


    };

    ngOnInit(){
        console.log("Existe html");
        this.injector.inject(this.containerRef, Form2Component,{});
    
    };
    private recibe(data:any){
        console.log("Mensaje de Nav");
        console.log(data);
        this.containerRef.clear();
        this.injector.inject(this.containerRef, FormRegisterComponent,{});
    }
}

