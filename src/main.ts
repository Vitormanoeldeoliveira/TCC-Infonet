import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 3090;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {logger:['error', 'warn']});
  app.enableCors();
  await app.listen(Number(port));console.log(
    `🚀👾 ::: ta rodando aqui ó http://localhost:${port}/graphql :::`,
  );
}
bootstrap();
