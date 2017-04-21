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
var componentinjector_1 = require("./componentinjector");
var form2_component_1 = require("./form2.component");
var formregister_component_1 = require("./formregister.component");
var base_service_1 = require("./base.service");
var MainComponent = (function () {
    function MainComponent(injector, comunication) {
        var _this = this;
        this.injector = injector;
        this.comunication = comunication;
        console.log("Existe componente");
        this.comunication.source.subscribe(function (item) { return _this.recibe(item); });
    }
    ;
    MainComponent.prototype.ngOnInit = function () {
        console.log("Existe html");
        this.injector.inject(this.containerRef, form2_component_1.Form2Component, {});
    };
    ;
    MainComponent.prototype.recibe = function (data) {
        console.log("Mensaje de Nav");
        console.log(data);
        this.containerRef.clear();
        this.injector.inject(this.containerRef, formregister_component_1.FormRegisterComponent, {});
    };
    return MainComponent;
}());
__decorate([
    core_1.ViewChild('container', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], MainComponent.prototype, "containerRef", void 0);
MainComponent = __decorate([
    core_1.Component({
        selector: 'main',
        templateUrl: 'app/main.html',
        styleUrls: ['app/main.css']
    }),
    __metadata("design:paramtypes", [componentinjector_1.InjectorService, base_service_1.BaseService])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map