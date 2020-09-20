import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    page: "profile"
  }

  handleClick = (e) => {
    this.setState({ page: e.target.id })

  }

  render() {


    let detailsToDisplay;
    if (this.state.page === 'profile') {
      detailsToDisplay = <Profile />
    } else if (this.state.page === 'photo') {
      detailsToDisplay = <Photos />
    } else if (this.state.page === 'cocktail') {
      detailsToDisplay = <Cocktails />
    } else if (this.state.page === 'pokemon') {
      detailsToDisplay = <Pokemon />
    }
    console.log(this.state.page)
    return (
      <div>
        <MenuBar handleClick={this.handleClick} page={this.state.page} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
