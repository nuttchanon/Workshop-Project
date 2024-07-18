import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';
import { CreateQrcodeDTO, QrcodeQuery } from './dto/qrcode.query.dto';
import { QrcodeResponse } from './dto/qrcode.response.dto';

@Controller()
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Get('/scanner')
  async getScanner(@Query() req: QrcodeQuery): Promise<QrcodeResponse> {
    try {
      return await this.qrcodeService.scanner(req);
    } catch (err) {
      return err;
    }
  }

  @Post('/scanner')
  async createScanner(@Body() req: CreateQrcodeDTO): Promise<string> {
    try {
      return await this.qrcodeService.createQrcode(req);
    } catch (err) {
      return err;
    }
  }
}
