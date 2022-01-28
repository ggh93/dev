import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  //  첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  };
  const onDecrese = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrese}>-1</button>
    </div>
  );
}

export default Counter;
