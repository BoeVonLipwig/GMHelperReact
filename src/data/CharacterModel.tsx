export type CharacterModel = {
    maxHitPoints: number;
    curHitPoints: number;
    armorClass: number;
    stats: stats;
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
    wis: number;
    cha: number;

}
