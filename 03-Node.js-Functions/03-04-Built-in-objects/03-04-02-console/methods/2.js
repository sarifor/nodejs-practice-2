// # console 객체
// - console.trace: 에러 발생 위치 추적

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