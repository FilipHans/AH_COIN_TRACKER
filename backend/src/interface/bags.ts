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

export interface WowItem {
  _links: {
    self: Link;
  };
  id: number;
  name: string;
  quality: ItemQuality;
  level: number;
  required_level: number;
  media: MediaRef;
  item_class: ItemClass;
  item_subclass: ItemSubclass;
  inventory_type: InventoryType;
  purchase_price: number;
  sell_price: number;
  max_count: number;
  is_equippable: boolean;
  is_stackable: boolean;
  description: string;
  preview_item: PreviewItem;
  purchase_quantity: number;
}

export interface Link {
  href: string;
}

export interface ItemQuality {
  type: string;
  name: string;
}

export interface MediaRef {
  key: Link;
  id: number;
}

export interface ItemClass {
  key: Link;
  name: string;
  id: number;
}

export interface ItemSubclass {
  key: Link;
  name: string;
  id: number;
}

export interface InventoryType {
  type: string;
  name: string;
}

export interface PreviewItem {
  item: {
    key: Link;
    id: number;
  };
  quality: ItemQuality;
  name: string;
  media: MediaRef;
  item_class: ItemClass;
  item_subclass: ItemSubclass;
  inventory_type: InventoryType;
  binding: Binding;
  spells: Spell[];
  description: string;
  is_subclass_hidden: boolean;
}

export interface Binding {
  type: string;
  name: string;
}

export interface Spell {
  spell: {
    key: Link;
    name: string;
    id: number;
  };
  description: string;
}

