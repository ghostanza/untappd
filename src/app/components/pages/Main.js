import React from 'react';
import * as untappd from '../../helpers/untappd';
import BeerList from '../util/BeerList';
import StatsList from '../util/StatsList';

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentWillMount(){
    untappd.getUserInfo(this.props.token).then((d) => {
      this.setState((prev, p) => {
        return({
          user: d.data.response.user,
          stats: d.data.response.user.stats,
          recent: d.data.response.user.recent_brews,
        });
      });
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.user ? (<h1 className='name'>{this.state.user.user_name}</h1>) : ''}
        {this.state.stats ? (<StatsList stats={this.state.stats}/>) : ''}
        {this.state.recent ? (<BeerList label="Recent Beers" beers={this.state.recent.items}/>) : ''}
      </div>
    )
  }
}
