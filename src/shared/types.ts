export interface SoldierType {
  name: string;
}

export interface Shift {
  shift_id: string;
  start: string;
  end: string;
  soldiers: SoldierType[];
}

export interface Mission {
  mission_id: string;
  shifts: Shift[];
}

export interface NewShavtzak {
  people: SoldierType[];
  missions: Mission[];
  date: string;
}
