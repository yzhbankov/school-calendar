"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let EventService = class EventService {
    async save(event) {
        return prisma.event.create({
            data: {
                title: event.title,
                description: event.description,
                createdDate: new Date(),
                updatedDate: new Date(),
                timeFrom: new Date(),
                timeTo: new Date(),
                dateFrom: new Date(),
                dateTo: new Date(),
                userId: 1
            },
        });
    }
    async read() {
        return prisma.event.findMany();
    }
};
EventService = __decorate([
    (0, common_1.Injectable)()
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map