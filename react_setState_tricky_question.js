import React from 'react';

class Test1 extends React.Component{

  constructor(props){
    super(props);
    this.state={count:0};
    this.handleClick=this.handleClick.bind(this);
    this.incrementState=this.incrementState.bind(this);
  }

  handleClick(){
    //console.log('handleClick');
    this.incrementState();
    this.incrementState();
    this.incrementState();
  }

  incrementState(){
    //console.log('incrementState');
    this.setState((prevState) => {
      return {count: prevState.count+1};
    })
  }
  render(){
    console.log('count: '+this.state.count);
    return(
      <div>
        <button onClick={this.handleClick}>Test</button>
      </div>
    );
  }
}

export default Test1;
