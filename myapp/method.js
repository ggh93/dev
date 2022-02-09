/** 3.생성자 함수와 인스턴스의 생성 */
// function Person(name) {
//   // 프로퍼티
//   this.name = name;

//   // 메소드
//   this.setName = function (name) {
//     this.name = name;
//   };

//   // 메소드
//   this.getName = function () {
//     return this.name;
//   };
// }

// // 인스턴스의 생성
// var me = new Person('Lee');
// console.log(me.getName());

// // 메소드 호출
// me.setName('Kim');
// console.log(me.getName());

/** 4.프로토타입 체인과 메소드의 정의 */
// function Person(name) {
//   // 프로퍼티
//   this.name = name;

//   // 프로토타입 객체에 메소드 정의
//   Person.prototype.setName = function (name) {
//     this.name = name;
//   };

//   // 메소드
//   Person.prototype.getName = function () {
//     return this.name;
//   };
// }

// // 메소드 호출
// var me = new Person('Lee');
// var you = new Person('Kim');
// var him = new Person('Choi');

// console.log(Person.prototype);

// console.log(me);
// console.log(you);
// console.log(him);
/** 더글라스 크락포드가 제안한 프로토타입 객체에 메소드 추가하는 방식 */
/**
 * 모든 생성자 함수의 프로토타입은 Function.prototype이다. 따라서 모든 생성자 함수는 Function.prototype.method()에 접근할 수 있다.
 * @method Function.prototype.method
 * @param ({string}) (name) - (메소드 이름)
 * @param ({function}) (func) - (추가할 메소드 본체)
 */
Function.prototype.method = function (name, func) {
  // 생성자함수의 프로토타입에 동일한 이름의 메소드가 없으면 생성자함수의 프로토타입에 메소드를 추가
  // this: 생성자함수
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};

/**
 * 생성자 함수
 */
function Person(name) {
  this.name = name;
}

/**
 * 생성자함수 Person의 프로토타입에 메소드 setName을 추가
 */
Person.method('setName', function (name) {
  this.name = name;
});

/**
 * 생성자함수 Person의 프로토타입에 메소드 getName을 추가
 */
Person.method('getName', function () {
  return this.name;
});

var me = new Person('Lee');
var you = new Person('Kim');
var him = new Person('choi');

console.log(Person.prototype);
// Person { setName: [Function], getName: [Function] }

console.log(me); // Person { name: 'Lee' }
console.log(you); // Person { name: 'Kim' }
console.log(him); // Person { name: 'choi' }
