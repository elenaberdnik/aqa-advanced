function printWithDelay(text, milliseconds) {
  setTimeout(() => console.log(text), milliseconds);
}

printWithDelay("Hello, this is text with delay!", 2000);
