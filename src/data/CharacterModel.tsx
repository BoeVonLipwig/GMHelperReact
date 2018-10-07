export type CharacterModel = {
  maxHitPoints: number;
  curHitPoints: number;
  armorClass: number;
  stats: stats;
  name: string;
  race: string;
  class: string;
  id: string;
  // weapon: string;
  // weaponDmg: string;
  // spell1Name: string;
  // spell1Dmg: string;
  // spell2Name: string;
  // spell2Dmg: string;
  // notes: string;
}

type stats = {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;

}
