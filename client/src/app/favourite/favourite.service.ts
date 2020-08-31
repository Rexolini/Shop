import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from } from 'rxjs';
import { IBasket, IBasketItem, Basket, IBasketTotals } from '../shared/models/basket';
import { map } from 'rxjs/operators';
import { IProduct } from '../shared/models/product';
import { IDeliveryMethod } from '../shared/models/deliveryMethod';
import { ThrowStmt } from '@angular/compiler';
import { IFavourite, IFavouriteItem, Favourite } from '../shared/models/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  baseUrl = 'https://localhost:5001/api/';
  private favouriteSource = new BehaviorSubject<IFavourite>(null);
  favourite$ = this.favouriteSource.asObservable();

  constructor(private http: HttpClient) { }

  getFavourite(id: string){
    return this.http.get(this.baseUrl + 'favourite?id=' + id)
    .pipe(map((favourite: IFavourite) =>{
      this.favouriteSource.next(favourite);
    }));
  }

  setFavourite(favourite: IFavourite){
    return this.http.post(this.baseUrl + 'favourite', favourite).subscribe((response: IFavourite) => {
      this.favouriteSource.next(response);
    }, error => {
      console.log(error);
    });
  }
  addItemToFavourite(item: IProduct, stock = 1){
    const itemToAdd: IFavouriteItem = this.mapProductItemToFavourite(item, stock);
    const favourite = this.createFavourite();
    favourite.items = this.addOrUpdateItemInFavourite(favourite.items, itemToAdd, stock);
    this.setFavourite(favourite);
  }

  private createFavourite(): IFavourite {
    const favourite = new Favourite();
    localStorage.setItem('favourite_id', favourite.id);
    return favourite;
  }

  private addOrUpdateItemInFavourite(items: IFavouriteItem[], itemToAdd: IFavouriteItem, quantity: number): IFavouriteItem[] {
    console.log(items);
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if(index === -1){
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);

    }
    else{
      items[index].quantity += quantity;
    }

    return items;
  }

  private mapProductItemToFavourite(item: IProduct, quantity: number): IFavouriteItem {
    return{
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      brand: item.productBrand,
      type: item.productType,
      quantity,
    };
  }

}
