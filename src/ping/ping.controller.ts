import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { PingService } from "./ping.service";
import { EchoDto } from "./schemas/echo.schema";

@Controller("ping")
export class PingController {
  constructor(private pingService: PingService) {}

  /**
   * Ping endpoint
   *
   * @returns Pong answer
   */
  @Get()
  ping() {
    return {
      ping: this.pingService.ping(),
    };
  }

  /**
   * Echo endpoint
   *
   * @param input - The message to echo
   * @returns The message
   */
  @Post("echo")
  @HttpCode(HttpStatus.OK)
  echo(@Body() { input }: EchoDto) {
    return {
      echo: this.pingService.echo(input),
    };
  }
}
