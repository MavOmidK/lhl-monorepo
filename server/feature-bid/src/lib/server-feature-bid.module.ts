import { Module } from '@nestjs/common';
import { ServerFeatureBidController } from './server-feature-bid.controller';
import { ServerFeatureBidService } from './server-feature-bid.service';

@Module({
  controllers: [ServerFeatureBidController],
  providers: [ServerFeatureBidService],
  exports: [ServerFeatureBidService],
})
export class ServerFeatureBidModule {}
