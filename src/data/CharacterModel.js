"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterModel = /** @class */ (function () {
    function CharacterModel(name, race, charClass, type) {
        this.name = name;
        this.race = race;
        this.charClass = charClass;
        this.type = type;
        this.maxHitPoints = 10;
        this.curHitPoints = 0;
        this.armorClass = 15;
        this.stats = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
        this.weapon = '';
        this.weaponDmg = '';
        this.spell1Name = '';
        this.spell1Dmg = '';
        this.spell2Name = '';
        this.spell2Dmg = '';
        this.notes = '';
    }
    return CharacterModel;
}());
exports.CharacterModel = CharacterModel;
