import { IAddress } from './address';

export interface IOrderToCreate {
    basketId: string;
    deliveryMethodId: number;
    shipToAddress: IAddress;
  }

export interface IOrder {
    id: number;
    buyerEmail: string;
    orderDate: string;
    shipToAddress: IAddress;
    deliveryMethod: string;
    shippingPrice: number;
    orderItems: OrderItem[];
    subtotal: number;
    total: number;
    status: string;
  }
  
export interface OrderItem {
    itemOrdered: ItemOrdered;
    price: number;
    quantity: number;
    id: number;
  }

export interface ItemOrdered {
    productItemId: number;
    productName: string;
    pictureUrl: string;
  }