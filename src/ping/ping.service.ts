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

  /**
   * Echo method
   *
   * @param message - The message to echo
   * @returns The message
   */
  echo(message: string) {
    this.logger.log("Echo method called");

    return message;
  }
}
