import F from '../../lib'


let engine = F.run({
  root: require('./app').default,
  log: true, // debugging <DEVELOP>
  drivers: {
    view: F.drivers.view('#app'),
    // time: require('../../lib/drivers/time')(), // TODO: replace deprecated drivers
    // fetch: require('../../lib/drivers/fetch')(), // TODO: replace deprecated drivers
  },
})

// If hot module replacement is enabled
if (module.hot) {
  // We accept updates to the top component
  module.hot.accept('./app', (comp) => {
    // Mutate the variable holding our component
    let module = require('./app').default
    engine.reattach(module)
  })
}

