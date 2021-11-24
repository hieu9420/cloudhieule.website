import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { resolve } from 'path';
import * as hbs from 'hbs';
import { NotFoundExceptionFilter } from './util/NotFoundExceptionFilter';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';

hbs.registerPartials(resolve('./src/resources/views/partials'));
hbs.registerPartials(resolve('./src/resources/views/layout'));
hbs.registerHelper('toFixed', (number, numFixed) => parseFloat(number).toFixed(numFixed));
hbs.registerHelper('sum', (a, b) =>  a + b);
hbs.registerHelper('toCurrency', (amount) =>  (amount).toLocaleString('it-IT', {style: 'currency',currency: 'VND',}));
//(motelChoose.waterEachCost).toLocaleString('it-IT', {style: 'currency',currency: 'VND',})
dotenv.config();
const ORIGIN_WEB = process.env.ORIGIN_WEB;
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalFilters(new NotFoundExceptionFilter());
  app.use(cookieParser());
  app.enableCors({
    origin: ORIGIN_WEB,
    credentials: true
  });
  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/resources/views'));
  app.setViewEngine('hbs');

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
  await app.listen(3000);
}
bootstrap();
