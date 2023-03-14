"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class Event {
    async save(body) {
        return prisma.event.create({
            data: {
                title: body.title,
                description: body.description,
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
}
exports.Event = Event;
//# sourceMappingURL=event.js.map