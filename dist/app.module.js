"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const home_module_1 = require("./app/modules/home/home.module");
const cv_module_1 = require("./app/modules/cv/cv.module");
const time_line_detail_module_1 = require("./app/modules/time-line-detail/time-line-detail.module");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const environment_prod_1 = require("./environments/environment.prod");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [home_module_1.HomeModule,
            cv_module_1.CvModule,
            time_line_detail_module_1.TimeLineDetailModule,
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(environment_prod_1.environmentProd.API_BASE_PATH)],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map