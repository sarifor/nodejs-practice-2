// process.env
// - Set new data
process.env.test = "hi";
console.log(process.env.test); // hi

// - Delete data
delete process.env.text // does not work
console.log(process.env.test); // hi