import { Stan } from "node-nats-streaming";
import { Subjects } from "./subjects";

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Publisher<T extends Event> {
  abstract subjects: T["subject"];
  protected client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  published(data: T["data"]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subjects, JSON.stringify(data), (err) => {
        if (err) return reject(err);

        console.log("Event published to subject:", this.subjects);

        resolve();
      });
    });
  }
}
