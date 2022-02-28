import { PaymentCreatedEvent, Publisher, Subjects } from "@udemy-micro/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subjects: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
