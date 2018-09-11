import EventEmitter from '../eventemitter';

describe('eventemitter', () => {
  it('emit add', () => {
    const event = new EventEmitter()
    event.addListener('testEvent', () => {
      console.log(1)
    })
    event.addListener('testEvent', () => {
      console.log(2)
    })
    // console.log('2222')
    event.emit('testEvent')
  });
});