import {MassType} from './MassType';

export interface Ingredient {
  name: string;
  amount: number;
  massType: MassType;
  massUnit: string;
}
