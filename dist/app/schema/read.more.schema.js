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
exports.ReadMoreSchema = exports.ReadMore = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let ReadMore = class ReadMore {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ReadMore.prototype, "slugKey", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ReadMore.prototype, "content", void 0);
ReadMore = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], ReadMore);
exports.ReadMore = ReadMore;
exports.ReadMoreSchema = mongoose_1.SchemaFactory.createForClass(ReadMore);
//# sourceMappingURL=read.more.schema.js.map