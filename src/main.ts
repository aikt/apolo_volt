import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Volt')
    .setDescription('The api Volt')
    .setVersion('1.0')
    .addTag('volt')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('volt/scod', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages:
        process.env.NODE_ENV === 'PRODUCTION' ? true : false,
    }),
  );
  await app.listen(3000);
}
bootstrap();
