const TeamManager = require("./team-manager");

const teams = TeamManager.getTeams(); 

console.log("-- DISPLAYING TEAMS --");
teams.forEach(team => {
    console.log(TeamManager.displayTeam(team));
});
console.log("\n")

console.log("-- DISPLAYING A SINGLE TEAM --");
const BTS = TeamManager.getTeam("BTS");
console.log(TeamManager.displayTeam(BTS));

console.log("-- DISPLAYING A SINGLE TEAM --");
const Twice = TeamManager.getTeam("Twice");
console.log(TeamManager.displayTeam(Twice));