// Function that receives a callback function and calls it
function receivesAFunction(callback) {
    return callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function");
    }
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function");
    }
  }
  
  // Exporting functions to be accessible in other modules (if needed)
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  