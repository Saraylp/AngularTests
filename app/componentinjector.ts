import { 
         Injectable,
         ReflectiveInjector,
         ViewContainerRef,
         ComponentFactoryResolver,
         ComponentRef,
         Component
        }  from '@angular/core';

@Injectable()

export class InjectorService{
    constructor(private componentFactoryResolver: ComponentFactoryResolver){
        console.log("HOLA");
    }
    public inject(refDOM:ViewContainerRef,component:any,parameters:any){
        try
        { 
            let factory  = this.componentFactoryResolver.resolveComponentFactory(component); 
            let injector = ReflectiveInjector.fromResolvedProviders([], refDOM.parentInjector);
            let comp     = factory.create(injector);
      
            //comp.instance["parameters"]= new Parameters(parameters,comp,refDOM,cfunc);
            comp.changeDetectorRef.detectChanges();
            refDOM.insert(comp.hostView,0);
            return comp;
        }
        catch(e)
        {
            console.log(e.message);
        }
    }
}