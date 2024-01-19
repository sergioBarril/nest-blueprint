import { Controller, Get } from "@nestjs/common";
import { PingService } from "./ping.service";

@Controller("ping")
export class PingController {
  constructor(private pingService: PingService) {}

  /**
   * Ping endpoint
   *
   * @param x - Some number
   * @returns Pong answer
   */
  @Get()
  ping() {
    return this.pingService.ping();
  }
}
