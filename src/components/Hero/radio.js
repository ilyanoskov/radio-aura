import React from 'react';
import ReactHowler from 'react-howler';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay() {
    this.setState({
      playing: true
    });
  }

  handlePause() {
    this.setState({
      playing: false
    });
  }

  render() {
    return (
      <div>
        <ReactHowler
          src={['http://149.13.0.80/aura.ogg', 'http://149.13.0.80/aura.mp3']}
          playing={this.state.playing}
          html5
        />
        {this.state.playing ? (
          <img
            onClick={this.handlePause}
            src="/pause.svg#svgView(viewBox(0,0,500,300))"
          />
        ) : (
          <img
            onClick={this.handlePlay}
            src="/play.svg#svgView(viewBox(0,0,500,300))"
          />
        )}
      </div>
    );
  }
}

export default Radio;
