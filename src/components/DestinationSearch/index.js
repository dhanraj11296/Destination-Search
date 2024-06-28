// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="appContainer">
        <div className="destinationSearchContainer">
          <h1 className="heading">Destination Search</h1>
          <div className="searchInputContainer">
            <input
              type="search"
              className="searchInput"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="searchIcon"
            />
          </div>
          <ul className="destinList">
            {searchResults.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
