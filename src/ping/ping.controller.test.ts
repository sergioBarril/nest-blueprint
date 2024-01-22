import { Test } from "@nestjs/testing";
import { PingController } from "./ping.controller";
import { PingService } from "./ping.service";

describe("PingController", () => {
  let pingService: PingService;
  let pingController: PingController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PingController],
      providers: [PingService],
    }).compile();

    pingService = moduleRef.get<PingService>(PingService);
    pingController = moduleRef.get<PingController>(PingController);
  });

  it("should be defined", () => {
    expect(pingService).toBeDefined();
  });
  describe("ping", () => {
    it("should return 'Pong!'", () => {
      expect(pingController.ping()).toEqual({
        ping: "Pong!",
      });
    });
  });
  describe("echo", () => {
    it("should return the input", () => {
      const input = "Hello World!";
      expect(pingController.echo({ input })).toEqual({ echo: input });
    });
  });
});
