// // 함수를 인자로 전달받고 함수를 반환하는 고차 함수
// function makeCounter(predicate) {
//   let num = 0;
//   return function () {
//     num = predicate(num);
//     return num;
//   };
// }

// function increase(n) {
//   return ++n;
// }

// function decrease(n) {
//   return --n;
// }

// // makeCounter는 함수를 인수로 전달받는다. 그리고 클로저를 반환한다.
// const increaser = makeCounter(increase);
// console.log(increaser()); // 1
// console.log(increaser()); // 2

// // makeCounter는 함수를 인수로 전달받는다. 그리고 클로저를 반환한다.
// const decreaser = makeCounter(decrease);
// console.log(decreaser()); // -1
// console.log(decreaser()); // -2

// const fruits = ['Banana', 'Orange', 'Apple'];

// // ascending(오름차순)
// fruits.sort();
// console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

// // descending(내림차순)
// fruits.reverse();
// console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]

// const points = [40, 100, 1, 5, 2, 25, 10];

// // ascending(오름차순)
// points.sort((a, b) => a - b); // ES6 문법
// console.log(points); // [ 1, 10, 100, 2, 25, 40, 5 ]
// console.log(points[0]); // 1

// // descending(내림차순)
// points.reverse((a, b) => b - a);
// console.log(points); // [  100, 40, 25, 10, 5, 2, 1 ]
// console.log(points[0]); // 100

// const todos = [
//   { id: 4, content: 'JavaScript' },
//   { id: 1, content: 'HTML' },
//   { id: 2, content: 'CSS' },
// ];

// // 비교 함수
// function compare(key) {
//   return function (a, b) {
//     // 프로퍼티 값이 문자열인 경우, - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
//     return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
//   };
// }

// // id를 기준으로 정렬
// todos.sort(compare('id'));
// console.log(JSON.stringify(todos));

// // content를 기준으로 정렬
// todos.sort(compare('content'));
// console.log(JSON.stringify(todos));

// const numbers = [1, 2, 3];
// let pows = [];

// // for 문으로 순회
// for (let i = 0; i < numbers.length; i++) {
//   pows.push(numbers[i] ** 2);
// }

// console.log(pows);

// pows = [];

// // forEach 메소드로 순회
// // numbers.forEach(function (item) {
// //   pows.push(item ** 2);
// // });
// // ES6
// numbers.forEach((item) => {
//   pows.push(item ** 2);
// });

// console.log(pows);

// const numbers = [1, 3, 5, 7, 9];
// let total = 0;

// forEach 메소드는 인수로 전달한 보조 함수를 호출하면서
// 3개(배열 요소의 값, 요소 인덱스, this)의 인수를 전달한다.
// 배열의 모든 요소를 순회하며 합산한다.

// numbers.forEach(function (item, index, self) {
//   console.log(`numbers[${index}] = ${item}`);
//   total += item;
// });

// Array#reduce를 사용해도 위와 동일한 결과를 얻을 수 있다
// total = numbers.reduce(function (pre, cur) {
//   return pre + cur;
// });

// ES6 문법
// total = numbers.reduce((pre, cur) => pre + cur);

// console.log(total); // 25
// console.log(numbers); // [ 1, 3, 5, 7, 9 ]

// const numbers = [1, 2, 3, 4];

// // forEach 메소드는 원본 배열(this)을 변경하지 않는다. 하지만 콜백 함수는 원본 배열(this)을 변경할 수는 있다.
// // 원본 배열을 직접 변경하려면 콜백 함수의 3번째 인자(this)를 사용한다.
// // forEach 메소드는 for 문과는 달리 break 문을 사용할 수 없다.
// numbers.forEach(function (item, index, self) {
//   self[index] = Math.pow(item, 2); // Math.pow 거듭제곱
// });

// // console.log(numbers); // [ 1, 4, 9, 16 ]
// function Square() {
//   this.array = [];
// }

// // Square.prototype.multiply = function (arr) {
// //     arr.forEach(function (item) {
// //       // this를 인수로 전달하지 않으면 this === window
// //       this.array.push(item * item);
// //     }, this);
// //   };

// Square.prototype.multiply = function (arr) {
//   arr.forEach((item) => this.array.push(item * item));
// };

// const square = new Square();
// square.multiply([1, 2, 3]);
// console.log(square.array);

// Array.prototype.myForEach = function (f) {
//   if (!f || {}.toString.call(f) !== '[object Function]') {
//     throw new TypeError(f + 'is not a function.');
//   }
//   for (let i = 0; i < this.length; i++) {
//     f(this[i], i, this);
//   }
// };

// let total = 0;

// [0, 1, 2, 3].myForEach(function (item, index, array) {
//   console.log(`[${index}]: ${item} of [${array}]`);
//   total += item;
// });

// console.log('Total: ', total);

// const numbers = [1, 4, 9];

// // 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
// const roots = numbers.map(function (item) {
//   // 반환값이 새로운 배열의 요소가 된다. 반환값이 없으면 새로운 배열은 비어 있다.
//   return Math.sqrt(item);
// });

// 위 코드의 축약표현은 아래와 같다.
// const roots = numbers.map(Math.sqrt);

// // map 메소드는 새로운 배열을 반환한다
// console.log(roots); // [ 1, 2, 3 ]
// // map 메소드는 원본 배열은 변경하지 않는다
// console.log(numbers); // [ 1, 4, 9 ]

// function Prefixer(prefix) {
//     this.prefix = prefix;
//   }

//   Prefixer.prototype.prefixArray = function (arr) {
//     // 콜백함수의 인자로 배열 요소의 값, 요소 인덱스, map 메소드를 호출한 배열, 즉 this를 전달할 수 있다.
//     return arr.map(function (x) {
//       // x는 배열 요소의 값이다.
//       return this.prefix + x; // 2번째 인자 this를 전달하지 않으면 this === window
//     }, this);
//   };

//   const pre = new Prefixer('-webkit-');
//   const preArr = pre.prefixArray(['linear-gradient', 'border-radius']);
//   console.log(preArr);
// [ '-webkit-linear-gradient', '-webkit-border-radius' ]

/** map 메소드의 이해를 돕기 위해 map의 동작을 흉내낸 myMap 메소드를 작성해 보자. */
// Array.prototype.myMap = function (iteratee) {
//   // 첫번재 매개변수에 함수가 전달되었는지 확인
//   if (!iteratee || {}.toString.call(iteratee) !== '[object Function]') {
//     throw new TypeError(iteratee + ' is not a function.');
//   }

//   const result = [];
//   for (let i = 0, len = this.length; i < len; i++) {
//     /**
//      * 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열, 즉 this를 매개변수를 통해 iteratee에 전달하고
//      * iteratee를 호출하여 그 결과를 반환용 배열에 푸시하여 반환한다.
//      */
//     result.push(iteratee(this[i], i, this));
//   }
//   return result;
// };

// const result = [1, 4, 9].myMap(function (item, index, self) {
//   console.log(`[${index}]: ${item} of [${self}]`);
//   return Math.sqrt(item);
// });

// console.log(result); // [ 1, 2, 3 ]
/** 
 * 4. Array.prototype.filter(callback: (value: T, index: number, array: Array)
 *  => any, thisArg?: any): T[] 🔒 ES5
 * filter 메소드를 사용하면 if 문을 대체할 수 있다.

    배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다.

    배열에서 특정 케이스만 필터링 조건으로 추출하여 새로운 배열을 만들고 싶을 때 사용한다. 이때 원본 배열은 변경되지 않는다.

    콜백 함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, filter 메소드를 호출한 배열, 즉 this를 전달 받을 수 있다.

    IE 9 이상에서 정상 동작한다.
 */

// const result = [1, 2, 3, 4, 5].filter(function (item, index, self) {
//   console.log(`[${index}] = ${item}`);
//   return item % 2;
// });
// console.log(result);

/** JS 필터 문제
 *  과일이름중에서 3글자인것을 출력하시오
 */
// var arrs = ['apple', 'grape', 'app'];
// const arrList = arrs.filter((arr) => arr.length == 3);
// console.log(arrList);

// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((preValue, curValue, curIndex, self) => {
//   console.log(preValue + '+' + curValue + '=' + (preValue + curValue));
//   return preValue + curValue;
// });

// console.log(sum);

// // 최대값 취득

// const max = arr.reduce((pre, cur) => (pre > cur ? pre : cur));

// console.log(max);

// const sum = [1, 2, 3, 4, 5].reduce((pre, cur) => pre + cur, 5);

// console.log(sum);

// // 프로퍼티 값을 합산
// const products = [
//   { id: 1, price: 100 },
//   { id: 2, price: 200 },
//   { id: 3, price: 300 },
// ];
// /**
// const priceSum = products.reduce((pre, cur) => {
//   console.log(pre.price, cur.price);
//   return pre.price + cur.price;
// });
// console.log(priceSum); // 초기값이 없어서 NaN
//  */
// // 프로퍼티 값을 합산 (초기값 추가)

// const priceSum = products.reduce((pre, cur) => {
//   console.log(pre, cur.price);
//   return pre + cur.price;
// }, 0);

// console.log(priceSum);

// /* 배열 내 요소 중 10보다 큰 값이 1개 이상 존재하는지 확인(ture,false) */
// let res = [2, 5, 8, 1, 4].some((item) => item > 10);
// console.log(res);

// res = [12, 5, 8, 1, 4].some((item) => item > 10);
// console.log(res);

// res = ['apple', 'banana', 'mango', 'app'];

// const filterName = res.some((item) => item.length === 2);

// console.log(filterName);

// res = [21, 15, 89, 1, 44].every((item) => item > 10);
// console.log(res);

// res = [21, 15, 89, 100, 44].every((item) => item > 10);
// console.log(res);

/**
 * 8. Array.prototype.find(predicate: (value: T, index: number, obj: T[])
 *  => boolean, thisArg?: any): T | undefined 🔒 ES6
 */
const users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' },
];

// // 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환한다.
// let result = users.find((item) => item.id === 2);

// console.log(result);

Array.prototype.myFind = function (predicate) {
  // 첫번재 매개변수에 함수가 전달되었는지 확인
  if (!predicate || {}.toString.call(predicate) !== '[object Function]') {
    throw new TypeError(predicate + ' is not a function.');
  }

  // Array.prototype.myFind = function (predicate) {
  //     // 첫번재 매개변수에 함수가 전달되었는지 확인
  //     if (!predicate || {}.toString.call(predicate) !== '[object Function]') {
  //       throw new TypeError(predicate + ' is not a function.');
  //     }
  /**
   * 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열, 즉 this를 매개변수를 통해 predicate에 전달하고
   * predicate를 호출하여 그 결과가 참인 요소를 반환하고 처리를 종료한다.
   */
  for (let i = 0, len = this.length; i < len; i++) {
    if (predicate(this[i], i, this)) return this[i];
  }
};
const result = users.myFind((item, index, array) => {
  console.log(
    `[${index}]: ${JSON.stringify(item)} of [${JSON.stringify(array)}]`
  );
  return item.id === 2;
});

console.log(result);
