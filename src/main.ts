import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { Logger } from "nestjs-pino";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const configService = app.get(ConfigService);
  const PORT = configService.get<string>("PORT");

  app.useLogger(app.get(Logger));
  await app.listen(PORT);
}
bootstrap();
