import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => { // 첫번째 매개변수의 리턴은, 언마운트되거나 첫번째 함수가 호출되기 직전에 호출된다.
      window.removeEventListener('resize', onResize);
    }
  }, []); // useEffect 두번째에 빈 배열을 넣으면, render후 한번만 실행한다. 즉 (ComponentDidMount)의 역할을 한다.
  return (
    <div>
      {`width is ${width}`};
    </div>
  );
}