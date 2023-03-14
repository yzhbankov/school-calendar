"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class User {
    async save(body) {
        return prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
            },
        });
    }
    async read() {
        return prisma.user.findMany();
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map