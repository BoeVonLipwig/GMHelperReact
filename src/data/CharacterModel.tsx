export type CharacterModel = {
  // maxHitPoints: number;
  // curHitPoints: number;
  // armorClass: number;
  stats: stats;
  // weapon: string;
  // weaponDmg: string;
  // spell1Name: string;
  // spell1Dmg: string;
  // spell2Name: string;
  // spell2Dmg: string;
  // notes: string;
  name: string;
  race: string;
  class: string;
  id: string;
}

type stats = {
  str: number;
  dex: number;
  con: number;
  int: number;
  is: number;
  cha: number;

}
