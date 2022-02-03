// Call-by-value

function foo(primitive) {
  primitive += 1;
  return primitive;
}

var x = 0;

console.log(foo(x)); // 1
console.log(x); // 0

// Call-by-reference
var foo = function (primitive, obj) {
  primitive += 100;
  obj.name = 'Kim';
  obj.gender = 'female';
  return primitive;
};

var x = 100;
var y = {
  name: 'Lee',
  gender: 'male',
};

console.log(x);
console.log(y);

foo(x, y);

console.log(x);
console.log(y);
