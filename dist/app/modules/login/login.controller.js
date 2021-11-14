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
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
dotenv.config();
let LoginController = class LoginController {
    constructor() { }
    async root() {
        const apiLink = process.env.API_LINK || 'http://localhost:3003/';
        return { apiLink: apiLink };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('pages/login/login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "root", null);
LoginController = __decorate([
    (0, common_1.Controller)('login'),
    __metadata("design:paramtypes", [])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map