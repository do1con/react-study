const friends = [
  { name: "조조", age: 50 },
  { name: "유비", age: 60 },
  { name: "손권", age: 70 },
  { name: "사마소", age: 55 }
];

const timelines = [
  { desc: "내가 천하를 버릴지언정", likes: -5000 },
  { desc: "마속을 중히 쓰지 마시오", likes: 5000 },
  { desc: "술 가져와", likes: 3000 },
  { desc: "진나라 건국", likes: -6000 }
];

function makeDataGenerator (items){
   let itemIndex = 0;
   return function getNextData(){
     const item = items[itemIndex % items.length];
     itemIndex += 1;
     return { ...item, id: itemIndex };
   }
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);