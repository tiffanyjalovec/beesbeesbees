var ForagerBee = function() {
  Bee.call(this);
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
  this.age = 10;
};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}