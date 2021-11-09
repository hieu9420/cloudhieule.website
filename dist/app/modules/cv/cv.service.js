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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CvService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const profile_schema_1 = require("../../schema/profile.schema");
const time_line_schema_1 = require("../../schema/time.line.schema");
const point_schema_1 = require("../../schema/point.schema");
let CvService = class CvService {
    constructor(profileModel, timeLineModel, pointModel) {
        this.profileModel = profileModel;
        this.timeLineModel = timeLineModel;
        this.pointModel = pointModel;
    }
    ;
    async getProfileData() {
        return this.profileModel.find({ profileKey: 'info' }).exec();
    }
    async getSkillData() {
        return this.profileModel.find({ profileKey: 'skill' }).exec();
    }
    async getTimeLineData() {
        return this.timeLineModel.find().exec();
    }
    async getTimeLineDataBySlug(slug) {
        return this.timeLineModel.find({ slug: slug }).exec();
    }
    async getPointData() {
        return this.pointModel.find().exec();
    }
};
CvService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(profile_schema_1.Profile.name)),
    __param(1, (0, mongoose_2.InjectModel)(time_line_schema_1.TimeLine.name)),
    __param(2, (0, mongoose_2.InjectModel)(point_schema_1.Point.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], CvService);
exports.CvService = CvService;
//# sourceMappingURL=cv.service.js.map