var React = require('react');
var PropTypes = React.PropTypes;

function ConfirmBattle(props){
  return props.isLoading === true
  ? <p> Loading! </p>
  : <p> Confirm Battle </p>
}

ConfirmBattle.propTypes = {
isLoading: PropTypes.bool.isRequired,
onInitiateBattle: PropTypes.func.isRequired,
playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;