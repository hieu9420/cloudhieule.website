import { Module } from '@nestjs/common';
import { CmsnController } from './cmsn.controller';
import { CmsnService } from './cmsn.service';

@Module({
  controllers: [CmsnController],
  providers: [CmsnService]
})
export class CmsnModule {}
