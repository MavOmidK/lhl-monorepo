import { Test } from '@nestjs/testing';
import { ServerFeatureBidService } from './server-feature-bid.service';

describe('ServerFeatureBidService', () => {
  let service: ServerFeatureBidService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureBidService],
    }).compile();

    service = module.get(ServerFeatureBidService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
