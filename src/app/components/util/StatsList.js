import React from 'react';

export default class StatsList extends React.Component {
  render() {
    var lookup = {
      total_badges: "Badges",
      total_beers: "Unique Beers",
      total_checkins: "Total Check-Ins",
      total_followings: "Following",
      total_friends: "Friends"
    }
    console.log(this.props.stats);
    return(
    <div className="stats-list-wrapper">
      <ul className="list">
        {Object.keys(this.props.stats).sort().map((stat, index) => {
          if(lookup[stat]){
            return(
              <li key={index}>
                <div className="list-inner">
                  <div>
                    <span className="value">{this.props.stats[stat]}</span>
                    <span className="stat-label">{lookup[stat]}</span>
                  </div>
                </div>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
  }
}
