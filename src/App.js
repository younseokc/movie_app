import React from 'react'

function Food({ name, picture }){
  return <div>
    <h2>
      I like {name}
    </h2>
    <img src={picture} />
    </div>
}

const foodILike = [
  {
    name : '김치',
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg5HKx763vYcezo7tzXrCdVOsvTdQ5Zpe7dmHb_367k1U3leSU'
  },
  {
    name : '돈까스',
    image : 'http://m.yum-yumfood.com/web/product/big/201607/29_shop1_382074.jpg'
  }
]

function App(){
  return(
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;
