import { Test } from "@nestjs/testing";
import { PingService } from "./ping.service";

describe("PingService", () => {
  let pingService: PingService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PingService],
    }).compile();

    pingService = moduleRef.get<PingService>(PingService);
  });

  it("should be defined", () => {
    expect(pingService).toBeDefined();
  });
  describe("ping", () => {
    it("should return 'Pong!'", () => {
      expect(pingService.ping()).toBe("Pong!");
    });
  });
  describe("echo", () => {
    it("should return the input", () => {
      const input = "Hello World!";
      expect(pingService.echo(input)).toBe(input);
    });
  });
});
