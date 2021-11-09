import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { resolve } from 'path';
import * as hbs from 'hbs';

hbs.registerPartials(resolve('./src/resources/views/partials'));
hbs.registerPartials(resolve('./src/resources/views/layout'));
hbs.registerHelper('toFixed', (number, numFixed) => parseFloat(number).toFixed(numFixed));
hbs.registerHelper('sum', (a, b) =>  a + b);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/resources/views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
