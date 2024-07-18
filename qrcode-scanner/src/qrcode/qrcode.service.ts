import { Injectable } from '@nestjs/common';
import { CreateQrcodeDTO, QrcodeQuery } from './dto/qrcode.query.dto';
import { QrcodeResponse } from './dto/qrcode.response.dto';
import * as QRCode from 'qrcode';

@Injectable()
export class QrcodeService {
  async scanner(req: QrcodeQuery): Promise<QrcodeResponse> {
    console.log('🚀 ~ QrcodeService ~ scanner ~ req:', req);
    return req;
  }

  async createQrcode(req: CreateQrcodeDTO): Promise<string> {
    const apiUrl = 'https://f5pdt7r8-9001.asse.devtunnels.ms/scanner';
    const fullUrl = `${apiUrl}?feature=${req.feature}&orderRequestId=${req.orderRequestId}&patientId=${req.patientId}&reponsiblePersonId=${req.reponsiblePersonId}`;

    try {
      const qrCodeImage = await QRCode.toDataURL(fullUrl, {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        margin: 2,
        width: 300,
      });

      return qrCodeImage;
    } catch (err) {
      console.error('Error generating QR code:', err);
      throw new Error('Failed to generate QR code');
    }
  }
}
