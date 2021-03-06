var axios = require('axios');

function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username)
}

var helpers = {
  getPlayersInfo: function(players){
    //fetch some data from github
    return axios.all(players.map(function(username){
      return getUserInfo(username)
    })).then(function(info){
      return info.map(function(user){
        return user.data;
      })
    }).catch(function(err){
      console.warn('Error in getPlayersInfo', err)
    })
  }
};

module.exports = helpers;