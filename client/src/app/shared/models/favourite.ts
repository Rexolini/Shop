import {v4 as uuidv4} from 'uuid';

export interface IFavourite {
    id: string;
    items: IFavouriteItem[];
  }
  
export interface IFavouriteItem {
    id: number;
    productName: string;
    price: number;
    pictureUrl: string;
    brand: string;
    type: string;
    quantity: number;
  }

export class Favourite implements IFavourite {
    id = uuidv4();
    items: IFavouriteItem[];
}