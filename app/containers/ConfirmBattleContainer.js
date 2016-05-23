var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return {
      isLoading: true,
      playerInfo: [],
    }
  },

  componentWillMount: function(){ // following 4 functions are life cycle events

  },

  componentDidMount: function(){
    var query = this.props.location.query;
    //fetch info from github and then update state
  },

  componentWillReceiveProps: function(){

  },

  componentWillUnmount: function(){

  },

  render: function(){
    return (
      <div>
        <ConfirmBattle
          isLoading={this.state.isLoading}
          playersInfo={this.state.playersInfo} />
      </div>
      )
  }
});

module.exports = ConfirmBattleContainer;