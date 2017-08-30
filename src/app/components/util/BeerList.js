import React from 'react';

export default class BeerList extends React.Component {
  render() {
    return(
    <div className="beer-list-wrapper">
      {this.props.label ? (<h3 className="list-label">{this.props.label}</h3>) : '' }
      <ul className="list">
        { this.props.beers.map( (beer, index) => {
            return(
              <li key={index+1}>
                <span className="name">{beer.beer.beer_name}</span>
                <span className="brewer">{beer.brewery.brewery_name}</span>
              </li>
            );
          })
        }
      </ul>
    </div>
  )
  }
}
