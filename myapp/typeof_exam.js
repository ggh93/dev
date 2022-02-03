function sum(a, b) {
  // a와 b가 number 타입인지 체크
  if (typeof a !== 'number') {
    return console.log('a가 number타입이 아닙니다.');
  } else if (typeof b !== 'number') {
    return console.log('b가 number타입이 아닙니다.');
  } else {
    return console.log(a + b);
  }
}

sum(1, 2); // 'xy'
