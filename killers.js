'use strict';

function printStatus(name, fn) {
    switch(%GetOptimizationStatus(fn)) {
        case 1: console.log(name, "is optimized"); break;
        case 2: console.log(name, "is not optimized"); break;
        case 3: console.log(name, "is always optimized"); break;
        case 4: console.log(name, "is never optimized"); break;
        case 6: console.log(name, "is maybe deoptimized"); break;
    }
}

function testKiller(name, fn) {
  //Fill type-info
  fn();

  %OptimizeFunctionOnNextCall(fn);

  //The next call
  fn();

  //Check
  printStatus(name, fn);

  //Print an empty line between each test
  console.log('');
}


// Will throw error in strict mode
// testKiller('contains with', function() {
//   return 3;
//   with({}) {}
// });

testKiller('try catch', function() {
  return 3;
  try {
  } catch(e) {
  }
});


testKiller('try finally', function() {
  return 3;
  try {
  } finally {
  }
});


testKiller('__proto__', function() {
  return { __proto__: 3 };
});


//Function that contains the pattern to be inspected (using with statement)
testKiller('Reassigning parameter', function (a) {
  // Killer: Reassigning a defined parameter while also mentioning arguments in the body.
  if (arguments.length < 2) {
    a = 10;
  }
});


testKiller('Workaround ReAssign Param', function(a, b_) {
  var b = b_;
  //unlike b_, b can safely be reassigned
  if (arguments.length < 2) {
    b = 5;
  }
});


testKiller('Workaround ReAssign Param 2', function(a, b) {
  if (b === void 0) b = 5;
});


testKiller('Leak arguments', function() {
  return arguments;
});


testKiller('Leak arguments 2', function() {
  var args = [].slice.call(arguments);
});


testKiller('Leak arguments 3', function() {
  var a = arguments;
  return function() {
    return a;
  };
});


testKiller('Workaround Doesnt Leak Arguments', function() {
  var args = new Array(arguments.length);
  for (var i = 0; i < args.length; i++) {
    args[i] = arguments[i];
  }

  return args;
});


// Will Throw exception in strict mode
//testKiller('Assign to arguments', function() {
//  arguments = 3;
//  return arguments;
//});


testKiller('Over 128 cases', function(c) {
  switch(c) {
    case 1: break;
    case 2: break;
    case 3: break;
    case 4: break;
    case 5: break;
    case 6: break;
    case 7: break;
    case 8: break;
    case 9: break;
    case 10: break;
    case 11: break;
    case 12: break;
    case 13: break;
    case 14: break;
    case 15: break;
    case 16: break;
    case 17: break;
    case 18: break;
    case 19: break;
    case 20: break;
    case 21: break;
    case 22: break;
    case 23: break;
    case 24: break;
    case 25: break;
    case 26: break;
    case 27: break;
    case 28: break;
    case 29: break;
    case 30: break;
    case 31: break;
    case 32: break;
    case 33: break;
    case 34: break;
    case 35: break;
    case 36: break;
    case 37: break;
    case 38: break;
    case 39: break;
    case 40: break;
    case 41: break;
    case 42: break;
    case 43: break;
    case 44: break;
    case 45: break;
    case 46: break;
    case 47: break;
    case 48: break;
    case 49: break;
    case 50: break;
    case 51: break;
    case 52: break;
    case 53: break;
    case 54: break;
    case 55: break;
    case 56: break;
    case 57: break;
    case 58: break;
    case 59: break;
    case 60: break;
    case 61: break;
    case 62: break;
    case 63: break;
    case 64: break;
    case 65: break;
    case 66: break;
    case 67: break;
    case 68: break;
    case 69: break;
    case 70: break;
    case 71: break;
    case 72: break;
    case 73: break;
    case 74: break;
    case 75: break;
    case 76: break;
    case 77: break;
    case 78: break;
    case 79: break;
    case 80: break;
    case 81: break;
    case 82: break;
    case 83: break;
    case 84: break;
    case 85: break;
    case 86: break;
    case 87: break;
    case 88: break;
    case 89: break;
    case 90: break;
    case 91: break;
    case 92: break;
    case 93: break;
    case 94: break;
    case 95: break;
    case 96: break;
    case 97: break;
    case 98: break;
    case 99: break;
    case 100: break;
    case 101: break;
    case 102: break;
    case 103: break;
    case 104: break;
    case 105: break;
    case 106: break;
    case 107: break;
    case 108: break;
    case 109: break;
    case 110: break;
    case 111: break;
    case 112: break;
    case 113: break;
    case 114: break;
    case 115: break;
    case 116: break;
    case 117: break;
    case 118: break;
    case 119: break;
    case 120: break;
    case 121: break;
    case 122: break;
    case 123: break;
    case 124: break;
    case 125: break;
    case 126: break;
    case 127: break;
    case 128: break;
    case 129: break;
  }
});


testKiller('nonLocalKey', function() {
  var obj = {};
  for (var key in obj);
  return function() {
    return key;
  };
});


testKiller('hashTableIteration "-" as key', function() {
  var hashTable = { '-': 3 };
  for (var key in hashTable);
});


testKiller('Workaround hashTableIteration object', function() {
  var hashTable = { 'a': 3 };
  for (var key in hashTable);
});


testKiller('iteratesOverArray', function() {
  var arr = [1, 2, 3];
  for (var index in arr) {
  }
});
