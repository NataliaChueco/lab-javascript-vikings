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
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health <= 0) {return `${this.name} has died in act of combat`;}
        else {return `${this.name} has received ${damage} points of damage`;}
    }
    
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health <= 0) {return `A Saxon has died in combat`;}
        else {return `A Saxon has received ${damage} points of damage`;}
    }
}

// War
class War {

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);

    }
    vikingAttack(){
        let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let saxon = this.saxonArmy[saxonIndex];
        let viking = this.vikingArmy[vikingIndex];

        let damageInflicted = saxon.receiveDamage(viking.attack());
        if (saxon.health <= 0){
            this.saxonArmy.splice(saxonIndex);
        }
        return damageInflicted;
    }

    saxonAttack(){
        let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let saxon = this.saxonArmy[saxonIndex];
        let viking = this.vikingArmy[vikingIndex];

        let damageInflicted = viking.receiveDamage(saxon.attack());
        if (viking.health <= 0){
            this.vikingArmy.splice(vikingIndex);
        }
        return damageInflicted;
    }

    showStatus(){
        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }
        else if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        else return "Vikings and Saxons are still in the thick of battle.";
    }

}
