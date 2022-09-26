var homeTeam = 0;
var awayTeam = 0;
var homeServe = true;
var serverOne = true;


function homeScore() {
  if (homeServe === true) {
    homeTeam += 1;
    didHomeWin();
  } else if (serverOne === false) {
    homeServe = true;
    serverOne = true;
  } else if (homeServe === false && serverOne === true) {
    serverOne = false;
  }
}

function awayScore() {
  if (homeServe !== true) {
    awayTeam += 1;
    didAwayWin();
  } else if (serverOne === false) {
    homeServe = false;
    serverOne = true;
  } else if (homeServe === true && serverOne === true) {
    serverOne = false;
  }
}

var thirdNum = serverOne ? '1' : '2';

function didHomeWin() {
  if (homeTeam >= 11 && awayTeam <= (homeTeam - 2)) {
    console.log('HOME TEAM WINS!!')
    
  }
  
}

function didAwayWin() {
  if (awayTeam >= 11 && homeTeam <= (awayTeam - 2)) {
    console.log('AWAY TEAM WINS!!')
    
  }
  
}


console.log(homeTeam, awayTeam, thirdNum);


awayScore()

console.log(homeTeam, awayTeam, serverOne ? 1 : 2);

awayScore()
console.log(homeTeam, awayTeam, serverOne ? 1 : 2);


