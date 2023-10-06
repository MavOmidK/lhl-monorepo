import { Controller } from '@nestjs/common';
import { ServerFeatureBidService } from './server-feature-bid.service';

@Controller('server-feature-bid')
export class ServerFeatureBidController {
  constructor(private serverFeatureBidService: ServerFeatureBidService) {}
}
