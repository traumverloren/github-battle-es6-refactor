import React, { Component } from 'react'
import Prompt from '../components/Prompt'

class PromptContainer extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }
  }

  handleUpdateUser (event) {
    this.setState({
      username: event.target.value
    });
  }

  handleSubmitUser (event) {
    event.preventDefault();
    const { username } = this.state
    this.setState({
      username: ''
    });

    const { playerOne } = this.props.routeParams

    if (playerOne) {
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          // destructure this param into a concise object.  take away key if same is same as param.
          playerOne,
          playerTwo: username
        }
      });
    } else {
      // go to /playerTwo
      this.context.router.push(`/playerTwo/${username}`)
    }
  }

  render () {
    return (
      <Prompt
        onSubmitUser={(event) => this.handleSubmitUser(event)}
        onUpdateUser={(event) => this.handleUpdateUser(event)}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer
