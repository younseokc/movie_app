import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} />
    </div>
    )
}

const foodILike = [
  {
    id:1,
    name : '김치',
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg5HKx763vYcezo7tzXrCdVOsvTdQ5Zpe7dmHb_367k1U3leSU',
    rating :5
  },
  {
    id:2,
    name : '돈까스',
    image : 'http://m.yum-yumfood.com/web/product/big/201607/29_shop1_382074.jpg',
    rating: 4.9
  }
]

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
}
// props의 성격을 나타내주는 것

function App(){
  return(
    <div>
      {foodILike.map(dish => 
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
    </div>
  );
}

export default App;;
