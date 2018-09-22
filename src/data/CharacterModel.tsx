export class CharacterModel {
  maxHitPoints: number = 10;
  curHitPoints: number = 0;
  armorClass: number = 15;
  stats: any = {str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0};
  weapon: string = '';
  weaponDmg: string = '';
  spell1Name: string = '';
  spell1Dmg: string = '';
  spell2Name: string = '';
  spell2Dmg: string = '';
  notes: string = '';


  constructor(public name: string, public race: string, public charClass: string, public type: string) {

  }

}
