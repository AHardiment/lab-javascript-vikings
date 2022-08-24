// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health === 0) {
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${damage} points of damage`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
    return `A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const saxonDamageReceived = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      this.saxonArmy.pop();
    }
    return saxonDamageReceived;
  }
  saxonAttack() {
    const saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const vikingDamageReceived = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      this.vikingArmy.pop();
    }
    return vikingDamageReceived;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
