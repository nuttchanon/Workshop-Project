import { v4 as uuidv4 } from 'uuid';

export class QrcodeResponse {
  feature: string;
  patientId: uuidv4;
  orderRequestId: uuidv4;
  reponsiblePersonId: uuidv4;
}
