import React from 'react'
import Results from '../components/Results'
import { battle } from '../utils/githubHelpers'

const ResultsContainer = React.createClass({
  getInitialState () {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount () {
    battle(this.props.location.state.playersInfo)
      .then((scores) => {
        this.setState({
        scores: scores,
        isLoading: false
      })
    })
  },

  render () {
    return (
      <Results
        playersInfo={this.props.location.state.playersInfo}
        isLoading={this.state.isLoading}
        scores={this.state.scores} />
    );
  }

});

export default ResultsContainer
