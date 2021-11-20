import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { resolve } from 'path';
import * as hbs from 'hbs';
import { NotFoundExceptionFilter } from './util/NotFoundExceptionFilter';

hbs.registerPartials(resolve('./src/resources/views/partials'));
hbs.registerPartials(resolve('./src/resources/views/layout'));
hbs.registerHelper('toFixed', (number, numFixed) => parseFloat(number).toFixed(numFixed));
hbs.registerHelper('sum', (a, b) =>  a + b);
hbs.registerHelper('toCurrency', (amount) =>  (amount).toLocaleString('it-IT', {style: 'currency',currency: 'VND',}));
//(motelChoose.waterEachCost).toLocaleString('it-IT', {style: 'currency',currency: 'VND',})

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalFilters(new NotFoundExceptionFilter());
  app.enableCors();
  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/resources/views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
