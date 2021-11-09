"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseToObject = exports.mutipleMongooseToObject = void 0;
const mutipleMongooseToObject = function (mongoose) {
    return mongoose.map(mongoose => mongoose.toObject());
};
exports.mutipleMongooseToObject = mutipleMongooseToObject;
const mongooseToObject = function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
};
exports.mongooseToObject = mongooseToObject;
//# sourceMappingURL=mongoose.js.map