class Player {
constructor(){
this.index = null;
this.distance = 0;
this.name = null;
this.rank = null;}

getCount(){
var playerCountRef = database.ref('playerCount');
playerCountRef.on("value",(data)=>{
playerCount = data.val();})}

updateCount(count){
database.ref('/').update({
playerCount: count});}

updateName(name){
database.ref('players/player' + this.index).update({
name:name});}

updateDistance(distance){
database.ref('players/player' + this.index).update({
distance:distance});}

update(){
var playerIndex = "players/player" + this.index;
database.ref(playerIndex).set({
name:this.name,
distance:this.distance});}

static getPlayerInfo(){
var playerInfoRef = database.ref('players');
playerInfoRef.on("value",(data)=>{
allPlayers = data.val();})}

getDistance(){
var disTance = database.ref('rank');
disTance.on("value",(data)=>{
this.rank = data.val();})}

static updateRank(rank){
database.ref('/').update({
rank: rank});}}