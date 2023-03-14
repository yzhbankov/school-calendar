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
exports.Event = void 0;
const swagger_1 = require("@nestjs/swagger");
class Event {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Math", description: 'Event title' }),
    __metadata("design:type", String)
], Event.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Math lesson", description: 'Event description' }),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2023-01-02T12:00:00Z", description: 'Date of event creation' }),
    __metadata("design:type", String)
], Event.prototype, "createdDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2023-01-02T12:00:00Z", description: 'Date of event update' }),
    __metadata("design:type", String)
], Event.prototype, "updatedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2023-01-02T12:00:00Z", description: 'Time of event start' }),
    __metadata("design:type", String)
], Event.prototype, "timeFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2023-01-02T12:00:00Z", description: 'Time of event end' }),
    __metadata("design:type", String)
], Event.prototype, "timeTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2023-01-02T12:00:00Z", description: 'Date of event start' }),
    __metadata("design:type", String)
], Event.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2023-01-02T12:00:00Z", description: 'Date of event end' }),
    __metadata("design:type", String)
], Event.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The user identifier' }),
    __metadata("design:type", Number)
], Event.prototype, "userId", void 0);
exports.Event = Event;
//# sourceMappingURL=event.entity.js.map