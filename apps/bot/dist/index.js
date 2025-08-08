"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const winston_1 = __importDefault(require("winston"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
// Winston logger setup
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.json(),
    transports: [
        new winston_1.default.transports.Console({ format: winston_1.default.format.simple() })
    ]
});
app.get('/health', (_req, res) => {
    logger.info('Health check requested');
    res.json({ status: 'ok', service: 'robertodev-bot' });
});
app.listen(port, () => {
    logger.info(`RobertoDev Bot backend listening on port ${port}`);
});
//# sourceMappingURL=index.js.map