"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareModule = void 0;
const common_1 = require("@nestjs/common");
const home_module_1 = require("./home/home.module");
const cv_module_1 = require("./cv/cv.module");
const time_line_detail_module_1 = require("./time-line-detail/time-line-detail.module");
const motel_cost_module_1 = require("./motel-cost/motel-cost.module");
const REUSE_LIST = [
    home_module_1.HomeModule,
    cv_module_1.CvModule,
    time_line_detail_module_1.TimeLineDetailModule,
    motel_cost_module_1.MotelCostModule,
];
let ShareModule = class ShareModule {
};
ShareModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers: [],
        exports: [...REUSE_LIST]
    })
], ShareModule);
exports.ShareModule = ShareModule;
//# sourceMappingURL=share.module.js.map