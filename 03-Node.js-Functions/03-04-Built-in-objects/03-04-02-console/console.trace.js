function b() {
  // Prints to stderr the string 'Trace: ', 
  // followed by the util.format() formatted message and stack trace 
  // to the current position in the code.
  console.trace("Trace error location");
}
function a() {
  b();
}
a();