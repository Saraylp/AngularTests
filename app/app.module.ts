import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavComponent }  from './nav.component';
import { MainComponent }  from './main.component';
import { HeaderComponent }  from './header.component';
import { FormRegisterComponent }  from './formregister.component';
import { Form2Component }  from './form2.component';
import { InjectorService }  from './componentinjector';
import { BaseService } from './base.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, NavComponent, MainComponent,
                  HeaderComponent, FormRegisterComponent,Form2Component ],
  bootstrap: [ AppComponent ],
  providers: [InjectorService, BaseService],
  entryComponents:[ FormRegisterComponent, Form2Component]
})
export class AppModule { }
