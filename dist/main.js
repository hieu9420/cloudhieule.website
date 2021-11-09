"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const hbs = require("hbs");
hbs.registerPartials((0, path_1.resolve)('./src/resources/views/partials'));
hbs.registerPartials((0, path_1.resolve)('./src/resources/views/layout'));
hbs.registerHelper('toFixed', (number, numFixed) => parseFloat(number).toFixed(numFixed));
hbs.registerHelper('sum', (a, b) => a + b);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.resolve)('./src/public'));
    app.setBaseViewsDir((0, path_1.resolve)('./src/resources/views'));
    app.setViewEngine('hbs');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map