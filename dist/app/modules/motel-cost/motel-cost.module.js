"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotelCostModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const motel_bill_schema_1 = require("../../schema/motel.bill.schema");
const motel_cost_schema_1 = require("../../schema/motel.cost.schema");
const motel_schema_1 = require("../../schema/motel.schema");
const motel_cost_controller_1 = require("./motel-cost.controller");
const motel_cost_service_1 = require("./motel-cost.service");
let MotelCostModule = class MotelCostModule {
};
MotelCostModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Motel', schema: motel_schema_1.MotelSchema },]),
            mongoose_1.MongooseModule.forFeature([{ name: 'MotelCost', schema: motel_cost_schema_1.MotelCostSchema },]),
            mongoose_1.MongooseModule.forFeature([{ name: 'MotelBill', schema: motel_bill_schema_1.MotelBillSchema },]),
        ],
        controllers: [motel_cost_controller_1.MotelCostController],
        providers: [motel_cost_service_1.MotelCostService]
    })
], MotelCostModule);
exports.MotelCostModule = MotelCostModule;
//# sourceMappingURL=motel-cost.module.js.map