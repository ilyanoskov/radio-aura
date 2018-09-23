import React from 'react';
import ReactHowler from 'react-howler';
import styled from 'react-emotion';

const Container = styled('div')`
  margin-left: 100px;

  @media only screen and (max-width: 768px) {
    margin-top: 100px;
    margin-left: 0px;
  }
`;

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
      <Container>
        <ReactHowler
          src={'http://149.13.0.80/aura'}
          playing={this.state.playing}
          html5
        />
        {this.state.playing ? (
          <img onClick={this.handlePause} src="/pause.svg" />
        ) : (
          <img onClick={this.handlePlay} src="/play.svg" />
        )}
      </Container>
    );
  }
}

export default Radio;
