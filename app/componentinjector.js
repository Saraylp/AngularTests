"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InjectorService = (function () {
    function InjectorService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        console.log("HOLA");
    }
    InjectorService.prototype.inject = function (refDOM, component, parameters) {
        try {
            var factory = this.componentFactoryResolver.resolveComponentFactory(component);
            var injector = core_1.ReflectiveInjector.fromResolvedProviders([], refDOM.parentInjector);
            var comp = factory.create(injector);
            //comp.instance["parameters"]= new Parameters(parameters,comp,refDOM,cfunc);
            comp.changeDetectorRef.detectChanges();
            refDOM.insert(comp.hostView, 0);
            return comp;
        }
        catch (e) {
            console.log(e.message);
        }
    };
    return InjectorService;
}());
InjectorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], InjectorService);
exports.InjectorService = InjectorService;
//# sourceMappingURL=componentinjector.js.map