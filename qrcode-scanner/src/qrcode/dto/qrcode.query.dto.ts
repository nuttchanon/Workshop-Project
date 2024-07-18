import { v4 as uuidv4 } from 'uuid';

export class QrcodeQuery {
  feature: string;
  patientId: uuidv4;
  orderRequestId: uuidv4;
  reponsiblePersonId: uuidv4;
}

export class CreateQrcodeDTO {
  feature: string;
  patientId: uuidv4;
  orderRequestId: uuidv4;
  reponsiblePersonId: uuidv4;
}
