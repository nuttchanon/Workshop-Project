import { Module } from '@nestjs/common';
import { QrcodeController } from './qrcode.controller';
import { QrcodeService } from './qrcode.service';

@Module({
  imports: [],
  controllers: [QrcodeController],
  providers: [QrcodeService],
})
export class QrcodeModule {}
