
export enum Rank {
  Demir,
  Bronz,
  Gümüş,
  Altın,
  Platin,
  Elmas,
  Ustalık,
  BüyükUsta,
  Challenger,
}

export interface Task {
  id: string;
  description:string;
}

export interface RankData {
  name: string;
  tasks: Task[];
}

export interface Category {
  id: string;
  name: string;
  ranks: RankData[];
}

export interface RankVisualData {
  name: string;
  Icon: React.FC<{ className?: string }>;
  color: string;
  bgColor: string;
  shadowColor: string;
}
