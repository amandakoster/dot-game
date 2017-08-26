const { render, findDOMNode } = ReactDOM;
const { TransitionGroup } = React.addons;

class Box extends React.Component {
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: -300, opacity: 0}, {y: -300, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 300, opacity: 1}, {y: 300, opacity: 0, onComplete: callback});
  }

  render () {
    return <div className="box" ref={c => this.container = c}/>;
  }
}

class ButtonTwo extends React.Component {
  state = {
    shouldShowBox: true
  };

  toggleBox = () => {
    this.setState({
      shouldShowBox: !this.state.shouldShowBox
    });
  };

  render () {
    return (
      <div className="page">

        <TransitionGroup>
          { this.state.shouldShowBox && <Box/>}
        </TransitionGroup>

        <button
          className="toggle-btn"
          onClick={this.toggleBox}
        >
          start
        </button>
      </div>
    );
  }
}

render(<ButtonTwo/>, document.querySelector('#container'));
