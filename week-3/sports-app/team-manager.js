const Team = require("./team");

const teams = [
    new Team("BTS", "Army", 7),
    new Team("BlackPink", "Blinks", 4),
    new Team("Twice", "Onces", 9),
    new Team("Red Velvet", "Reveluvs", 5),
    new Team("Seventeen", "Carats", 13)
];

function getTeams() {
    return teams;
}

function getTeam(name) {
    return teams.find(team => team.name === name);
}

function displayTeam(team) {
    return "Name: " + team.name + "\nMascot: " + team.mascot + "\nPlayer Count: " + team.playerCount + "\n";
}

module.exports = { getTeams, getTeam, displayTeam };