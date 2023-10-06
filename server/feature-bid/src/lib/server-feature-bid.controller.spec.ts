import { Test } from '@nestjs/testing';
import { ServerFeatureBidController } from './server-feature-bid.controller';
import { ServerFeatureBidService } from './server-feature-bid.service';

describe('ServerFeatureBidController', () => {
  let controller: ServerFeatureBidController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureBidService],
      controllers: [ServerFeatureBidController],
    }).compile();

    controller = module.get(ServerFeatureBidController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
