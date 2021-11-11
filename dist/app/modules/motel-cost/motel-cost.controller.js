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
exports.MotelCostController = void 0;
const common_1 = require("@nestjs/common");
const motel_bill_schema_1 = require("../../schema/motel.bill.schema");
const motel_cost_schema_1 = require("../../schema/motel.cost.schema");
const motel_schema_1 = require("../../schema/motel.schema");
const motel_cost_service_1 = require("./motel-cost.service");
let MotelCostController = class MotelCostController {
    constructor(motelCostService) {
        this.motelCostService = motelCostService;
    }
    ;
    async root() {
        this.motelData = await this.motelCostService.getMotelData();
        this.motelCostData = await this.motelCostService.getAll();
        return {
            motelData: this.motelData,
            motelCostData: this.motelCostData,
        };
    }
    async renderCreateForm(motelCostData) {
        motelCostData.elecTotalNumber = motelCostData.elecNewNumber - motelCostData.elecOldNumber;
        motelCostData.waterTotalNumber = motelCostData.waterNewNumber - motelCostData.waterOldNumber;
        if (motelCostData.motelID != null && motelCostData.roomNumber != null && motelCostData.elecTotalCost != null && motelCostData.waterTotalCost != null && motelCostData.motelTotalCost != null) {
            await this.motelCostService.createMotelCost(motelCostData);
        }
        else {
            return 0;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('pages/motel-cost/motelCost'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MotelCostController.prototype, "root", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.Redirect)('/motel-cost'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [motel_cost_schema_1.MotelCost]),
    __metadata("design:returntype", Promise)
], MotelCostController.prototype, "renderCreateForm", null);
MotelCostController = __decorate([
    (0, common_1.Controller)('motel-cost'),
    __metadata("design:paramtypes", [motel_cost_service_1.MotelCostService])
], MotelCostController);
exports.MotelCostController = MotelCostController;
//# sourceMappingURL=motel-cost.controller.js.map