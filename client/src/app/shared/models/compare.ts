import {v4 as uuidv4} from 'uuid';

export interface ICompare {
    id: string;
    items: ICompareItem[];
    clientSecret?: string;
  }

export  interface ICompareItem {
    id: number;
  productName: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type: string;
  stock: number;
  colour: string;
  material: string;
  dimensions: string;
  quantity: number;
  }

export class Compare implements ICompare {
    id = uuidv4();
    items: ICompareItem[];
}