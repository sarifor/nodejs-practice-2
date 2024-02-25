const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};


// Start counting
console.time("Entire time");


// log
console.log("Normal log", "Normal log 2");
console.log(string, number, boolean);


// error
console.error("Error message");


// table
console.table([{
  name: "Namae",
  birth: 1999,
},
{
  name: "Irum",
  birth: 2010,
}]);


// dir
console.dir(obj, { color: false, depth: 2}); // color doesn't work
console.dir(obj, { color: true, depth: 1}); // color doesn't work


// time
console.time("Count time");
for (let i = 0; i < 10000; i++) {}
console.timeEnd("Count time");


// End counting
console.timeEnd("Entire time");