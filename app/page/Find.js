import React from 'react';
// import Game from '../assets/js/index'
class Find extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    Game.init();
  }
  render () {
    return (
      <div>
        find
      </div>
    )
  }
}
export default Find;
