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
exports.CvController = void 0;
const common_1 = require("@nestjs/common");
const cv_service_1 = require("./cv.service");
const point_schema_1 = require("../../schema/point.schema");
const skill_schema_1 = require("../../schema/skill.schema");
let CvController = class CvController {
    constructor(cvService) {
        this.cvService = cvService;
        this.totalTC = 0;
        this.average = 0;
    }
    async root() {
        this.profileData = await this.cvService.getProfileDataByKey('hieu-le');
        this.skillData = await this.cvService.getSkillDataByKey('hieu-le');
        this.timeLineData = await this.cvService.getTimeLineDataByKey('hieu-le');
        this.pointData = await this.cvService.getPointDataByKey('hieu-le')
            .then(points => {
            let totalPoint = 0;
            let totalTCTemp = 0;
            for (let i = 0; i < points.length; i++) {
                totalTCTemp += points[i].tc;
                totalPoint += Number(points[i].points);
            }
            this.totalTC = totalTCTemp;
            this.average = Number((totalPoint / points.length).toFixed(2));
            return points;
        })
            .catch();
        return {
            titlePage: 'Curriculum Vitae',
            profileData: this.profileData,
            skillData: this.skillData,
            timeLineData: this.timeLineData,
            pointData: this.pointData,
            totalTC: this.totalTC,
            average: this.average,
            layout: false,
        };
    }
    async renderCV() {
        this.profileData = await this.cvService.getProfileDataByKey('nguyen-ngoc');
        this.skillData = await this.cvService.getSkillDataByKey('nguyen-ngoc');
        this.pointData = await this.cvService.getPointDataByKey('nguyen-ngoc')
            .then(points => {
            let totalPoint = 0;
            let totalTCTemp = 0;
            for (let i = 0; i < points.length; i++) {
                totalTCTemp += points[i].tc;
                totalPoint += Number(points[i].points);
            }
            this.totalTC = totalTCTemp;
            this.average = Number((totalPoint / points.length).toFixed(2));
            return points;
        })
            .catch();
        return {
            titlePage: 'Curriculum Vitae',
            profileData: this.profileData,
            skillData: this.skillData,
            pointData: this.pointData,
            totalTC: this.totalTC,
            average: this.average,
        };
    }
};
__decorate([
    (0, common_1.Get)('/hieu-le'),
    (0, common_1.Render)('pages/cv/cv'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CvController.prototype, "root", null);
__decorate([
    (0, common_1.Get)('/nguyen-ngoc'),
    (0, common_1.Render)('pages/cv/cvNguyenNgoc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CvController.prototype, "renderCV", null);
CvController = __decorate([
    (0, common_1.Controller)('cv'),
    __metadata("design:paramtypes", [cv_service_1.CvService])
], CvController);
exports.CvController = CvController;
//# sourceMappingURL=cv.controller.js.map