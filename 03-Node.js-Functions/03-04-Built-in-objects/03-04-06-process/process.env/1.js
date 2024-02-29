// process.env
// - Set new data
process.env.test = "hi";
console.log(process.env.test); // hi

// - Delete data
delete process.env.test // Javascript delete operator // does work
console.log(process.env.test); // hi