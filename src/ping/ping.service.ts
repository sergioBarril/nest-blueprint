import { Injectable } from "@nestjs/common";

@Injectable()
export class PingService {
  /**
   * Ping method
   *
   * @returns The string "Pong!"
   */
  ping() {
    return "Pong!";
  }
}
