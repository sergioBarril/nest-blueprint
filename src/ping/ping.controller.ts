import { Controller, Get } from "@nestjs/common";
import { PingService } from "./ping.service";

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
}
