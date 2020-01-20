import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [name, setName] = useState(''); // 왼쪽이 상탯값 이름, 오른쪽이 변경 메소드명
  useEffect(() => {
    document.title = `이름 : ${name}`;
  });
  return (
    <div>
      <p>{`name is ${name}`}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}