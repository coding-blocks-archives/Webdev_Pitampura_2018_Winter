const EventEmitter = require('events')

const em = new EventEmitter()

em.on('abc', (data, data2) => {
  console.log('abc triggered ' + data + data2)
})

setInterval(() => {
  em.emit('abc', 'hello', 'world')
}, 2000)
