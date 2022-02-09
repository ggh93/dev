var Parent = (function () {
  // Constructor
  function Parent(name) {
    this.name = name;
  }

  // method
  Parent.prototype.sayHi = function () {
    console.log('hi! ' + this.name);
  };

  // Constructor
  return Parent;
})();

// create 함수의 인수는 프로로타입이다.
var child = Object.create(Parent.prototype);
child.name = 'child';

child.sayHi();

console.log(child instanceof Parent);

// 객체 리터럴 패턴으로 생성한 객체에도 프로토타입 패턴 상속 사용가능
var parent = {
  name: 'parent',
  sayHi: function () {
    console.log('Hi! ' + this.name);
  },
};

// create 함수의 인자는 객체이다.
var child = Object.create(parent);
child.name = 'child';

// var child = Object.create(parent, {name: {value: 'child'}});

parent.sayHi(); // Hi! parent
child.sayHi(); // Hi! child

console.log(parent.isPrototypeOf(child)); // true

// Object.create 함수의 폴리필
if (!Object.create) {
  Object.create = function (o) {
    function F() {} // 1
    F.prototype = o; // 2
    return new F(); // 3
  };
}
