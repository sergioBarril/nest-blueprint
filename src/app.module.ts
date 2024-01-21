import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { LoggerModule } from "nestjs-pino";

import getPinoConfig from "./config/loggers/pino.logger";
import { LoggingInterceptor } from "./config/interceptors/logging.interceptor";
import { ZodValidationPipe } from "./config/pipes/zod-validation.pipe";

import { PingModule } from "./ping/ping.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule.forRoot(getPinoConfig()),
    PingModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
