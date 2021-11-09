"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeLineDetailModule = void 0;
const common_1 = require("@nestjs/common");
const time_line_detail_controller_1 = require("./time-line-detail.controller");
const time_line_detail_service_1 = require("./time-line-detail.service");
const cv_module_1 = require("../cv/cv.module");
const mongoose_1 = require("@nestjs/mongoose");
const read_more_schema_1 = require("../../schema/read.more.schema");
let TimeLineDetailModule = class TimeLineDetailModule {
};
TimeLineDetailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cv_module_1.CvModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'ReadMore', schema: read_more_schema_1.ReadMoreSchema }]),
        ],
        controllers: [time_line_detail_controller_1.TimeLineDetailController],
        providers: [time_line_detail_service_1.TimeLineDetailService]
    })
], TimeLineDetailModule);
exports.TimeLineDetailModule = TimeLineDetailModule;
//# sourceMappingURL=time-line-detail.module.js.map