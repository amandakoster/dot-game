// https://formidable.com/blog/2016/09/15/introducing-react-game-kit/

import { Loop, Stage } from 'react-game-kit';
import React from 'react';


class Game extends Component {
  constructor(props){
    super(props)
    this.state = {


    }

    this.handleClick=this.handleClick.bind(this)
  }

  static contextTypes = {
    loop: PropTypes.object,
  };

  loop = () => {
    //Do stuff here
  };

  componentDidMount() {
    this.loopID = this.context.loop.subscribe(this.loop);
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.loopID);
  }
}

  render() {
    return (
      <Loop>
      <Stage>
        // Game specific components go here
      </Stage>
        // Child components get this.context.loop
      </Loop>
    )
  }
}


export default Game
