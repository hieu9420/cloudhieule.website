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
exports.MotelCostService = void 0;
const common_1 = require("@nestjs/common");
const motel_schema_1 = require("../../schema/motel.schema");
const motel_cost_schema_1 = require("../../schema/motel.cost.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const motel_bill_schema_1 = require("../../schema/motel.bill.schema");
let MotelCostService = class MotelCostService {
    constructor(motelModel, motelCostModel, motelBillModel) {
        this.motelModel = motelModel;
        this.motelCostModel = motelCostModel;
        this.motelBillModel = motelBillModel;
    }
    ;
    async getAll() {
        return this.motelCostModel.find({}).exec();
    }
    async getMotelData() {
        return this.motelModel.find({}).exec();
    }
    async createMotelCost(MotelCostModel) {
        const createdMotelCost = new this.motelCostModel(MotelCostModel);
        return createdMotelCost.save();
    }
};
MotelCostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(motel_schema_1.Motel.name)),
    __param(1, (0, mongoose_1.InjectModel)(motel_cost_schema_1.MotelCost.name)),
    __param(2, (0, mongoose_1.InjectModel)(motel_bill_schema_1.MotelBill.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], MotelCostService);
exports.MotelCostService = MotelCostService;
//# sourceMappingURL=motel-cost.service.js.map