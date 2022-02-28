import { Message, Stan } from "node-nats-streaming";
import { Subjects } from "./subjects";

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Listener<T extends Event> {
  abstract subject: T["subject"];
  abstract queueGroupName: string;
  abstract onMessage(data: T["data"], msg: Message): void;

  protected ackWait = 5 * 1000;
  protected client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  subscriptionOptions() {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setDurableName(this.queueGroupName)
      .setAckWait(this.ackWait);
  }

  listen() {
    const subscribe = this.client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOptions()
    );

    subscribe.on("message", (msg: Message) => {
      const data = this.perseMessage(msg);
      this.onMessage(data, msg);
    });
  }
  perseMessage(msg: Message) {
    const data = msg.getData();

    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf-8"));
  }
}
