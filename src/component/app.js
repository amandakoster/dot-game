const Component = React.Component;

const Ball = ({ x, y }) => (
  <circle cx={x} cy={y} r={5} />
);

const MAX_H = 750;

class App extends Component {
  constructor() {
    super();

    this.state = {
      y: 5,
      vy: 0
    }
  }

  componentDidMount() {
    this.timer = d3.timer(() => this.gameLoop());
    this.gameLoop();
  }

  componentWillUnmount() {
    this.timer.stop();
  }

  gameLoop() {
    let { y, vy } = this.state;

    if (y > MAX_H) {
      vy = -vy*.87;
    }

    this.setState({
      y: y+vy,
      vy: vy+0.3
    })

  }

  render() {
    return (
      <svg width="100%" height={MAX_H}>
        <Ball x={50} y={this.state.y} />
      </svg>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
