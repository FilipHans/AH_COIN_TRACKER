export interface Characters {
  [characterName: string]: CharacterData;
}
export interface CharacterData {
  "0"?: Bag;
  "1"?: Bag;
  "2"?: Bag;
  "3"?: Bag;
  "4"?: Bag;
  "5"?: Bag;
  "6"?: Bag;
  "7"?: Bag;
  "-1"?: string[];
  guild: [null, null, number];
  faction: boolean;
  money: number;
  level: number;
  sex: number;
  race: string;
  class: string;

  equip: Equip;
  currency: Currency;
}

export interface Bag {
  size: number;
  items: string[];
  link?: string;
}

export interface Equip {
  [slotId: string]: string;
}

export interface Currency {
  tracked: any[];
}
