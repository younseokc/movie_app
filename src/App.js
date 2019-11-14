import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  
  state ={
    count : 0
  }
  add =() => {
    console.log('add')
    this.setState(current => ({count: current.count +1 }));

    //setState 상태를 바꿀 수 있다. 
    //매 순간 setState를 호출할 떄마다 react는 새로운 state와 함꼐 render function을 호출한다.
  };
  minus =() => {
    console.log('minus')
    this.setState(current => ({count: current.count -1 }));
  };
  render(){
    return (
      <div>
          <h1>아 힘드네: {this.state.count}</h1>
          <button onClick={this.add}>ADD</button>
          <button onClick={this.minus}>Minus</button>
      </div>
      );
    }
  }

export default App;
