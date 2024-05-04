// # Timers
// - setTimeout, setImmediate, setInterval
// - clearTimeout, clearImmediate, clearInterval

const timeout = setTimeout(() => { // 3rd
  console.log('Execute in 1.5 sec');
}, 1500);

const interval = setInterval(() => { // 2nd, 4th
  console.log("Execute every 1 sec");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("Does not execute");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => { // 1st
  console.log("Execute right now");
});

const immediate2 = setImmediate(() => {
  console.log("Does not execute");
});

clearImmediate(immediate2);

// Result:
// Execute right now
// Execute every 1 sec
// Execute in 1.5 sec
// Execute every 1 sec