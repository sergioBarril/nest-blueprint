import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class PingService {
  private readonly logger = new Logger(PingService.name);

  /**
   * Ping method
   *
   * @returns The string "Pong!"
   */
  ping() {
    this.logger.log("Ping method called");

    return "Pong!";
  }
}
