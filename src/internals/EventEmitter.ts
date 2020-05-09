export class EventEmitter {
  private subscribers: Map<string, Function[]>;

  public on(event: string, callback: () => any) {
    if (!this.subscribers.get(event)) {
      this.subscribers.set(event, []);
    }
    this.subscribers.get(event).push(callback);
  }

  public emit(event: string, ...args: any[]) {
    const subscribers = this.subscribers.get(event) || [];
    for (const sub of subscribers) {
      sub(...args);
    }
  }
}
