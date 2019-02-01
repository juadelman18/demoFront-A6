import { Link } from './link';

export interface Car {
  model: string;
  cost: number;
  topSpeed: number;
  currentSpeed: number;
  totalBattery: number;
  remainingBattery: number;
  distanceTraveled: number;
link: Link;
}
