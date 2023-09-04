const team = {
    _players: [
        { firstName: "first1", lastName: "last1", age: 21 },
        { firstName: "first2", lastName: "last2", age: 22 },
        { firstName: "first3", lastName: "last3", age: 23 },
    ],
    _games: [
        { opponents: "team1", teamPoints: 101, opponentPoints: 91 },
        { opponents: "team2", teamPoints: 102, opponentPoints: 92 },
        { opponents: "team3", teamPoints: 103, opponentPoints: 93 },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    // method to add new player
    addPlayer(newFirstName, newLastName, newAge) {
        let newPlayer = {
            firstname: newFirstName,
            lastName: newLastName,
            age: newAge,
        };
        this.players.push(newPlayer);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let newGame = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        };
        this.games.push(newGame);
    },
};

//checks if new player was added
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);


//checks if new game was added
team.addGame("Titans", 100, 98);
console.log(team.games);