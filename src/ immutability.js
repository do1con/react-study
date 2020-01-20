import React from 'react';

// 불변성 설명용
function  immutability() {
  state = {
    people: [
      {
        name: 'seong soo',
        age: 24
      },
      {
        name: 'ho seok',
        age: 25
      }
    ]
  };

  onClick = () => {
    const { people } = this.state;
    people.push({ name: 'hyo hoon', age: 25 });
    this.setState({ people });
  };
  return (
    <div>
    </div>
  );
};

export default  immutability;
