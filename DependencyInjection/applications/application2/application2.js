'use strict';

api.console.log('From application2 global context');

module.exports = () => {
  api.timers.setTimeout(() => {
    api.console.log('From application2 exported function');
  }, 5000);
}