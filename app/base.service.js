"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
var core_1 = require("@angular/core");
var BaseService = (function () {
    function BaseService() {
        this.src = new Subject_1.Subject();
        this.dst = new Subject_1.Subject();
        this.source = this.src.asObservable();
        this.destination = this.dst.asObservable();
    }
    BaseService.prototype.emit = function (data) {
        this.src.next(data);
    };
    BaseService.prototype.push = function (data) {
        this.dst.next(data);
    };
    return BaseService;
}());
BaseService = __decorate([
    core_1.Injectable()
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map