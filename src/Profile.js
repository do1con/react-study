import React, { forwardRef, useState, useImperativeHandle } from 'react';

const Profile = (props, ref) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  useImperativeHandle(ref, () => ({
    addAge: value => setAge(age + value),
    getNameLength: () => name.length
  }));

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
    </div>
  );
}

export default Profile;