var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.propTypes.object.isRequired
  },

  getInitialState: function(){
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  render: function(){
    return (
      <div>
        <ConfirmBattle />
      </div>
      )
  }
});

module.exports = ConfirmBattleContainer;