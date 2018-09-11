export default class EventEmitter {
  cbs: Object;

  constructor() {
    this.cbs = {};
  }

  addListener(eventName: string, listener: Function) {
    if (this.cbs[eventName]) {
      this.cbs[eventName].push(listener);
    } else {
      this.cbs[eventName] = [listener];
    }
  }

  emit(eventName, ...args) {
    if(this.cbs[eventName]) {
      for(const callback of this.cbs[eventName]) {
        callback(...args)
      }
    }
  }
}
