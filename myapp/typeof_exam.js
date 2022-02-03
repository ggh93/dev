function sum(a, b) {
  // a와 b가 number 타입인지 체크
  const getTypeNameToA = getType(a);
  const getTypeNameToB = getType(b);
  if (!isNumber(a) || !isNumber(b)) {
    throw new TypeError(
      `A 파라미터에 ${getTypeNameToA} 타입의 값이, B 파라미터에 ${getTypeNameToB} 타입의 값이 할당되었습니다.`
    );
  }
  return a + b;
}
console.log(sum(10, 20)); // 30
console.log(sum(new Date(), function () {})); // TypeError

function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}
function isString(target) {
  return getType(target) === 'String';
}

function isNumber(target) {
  return getType(target) === 'Number';
}

function isBoolean(target) {
  return getType(target) === 'Boolean';
}

function isNull(target) {
  return getType(target) === 'Null';
}

function isUndefined(target) {
  return getType(target) === 'Undefined';
}

function isObject(target) {
  return getType(target) === 'Object';
}

function isArray(target) {
  return getType(target) === 'Array';
}

function isDate(target) {
  return getType(target) === 'Date';
}

function isRegExp(target) {
  return getType(target) === 'RegExp';
}

function isFunction(target) {
  return getType(target) === 'Function';
}
