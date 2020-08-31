import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../shared/models/product';
import { IDeliveryMethod } from '../shared/models/deliveryMethod';
import { ThrowStmt } from '@angular/compiler';
import { ICompare, ICompareItem, Compare } from '../shared/models/compare';
import { IBasketItem } from '../shared/models/basket';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
  baseUrl = 'https://localhost:5001/api/';
  private compareSource = new BehaviorSubject<ICompare>(null);
  compare$ = this.compareSource.asObservable();

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getCompare(id: string){
    return this.http.get(this.baseUrl + 'compare?id=' + id).pipe(map((compare: ICompare) => {
      this.compareSource.next(compare);
    }));
  }

  // tslint:disable-next-line: typedef
  setCompare(compare: ICompare){
    return this.http.post(this.baseUrl + 'compare', compare).subscribe((response: ICompare) => {
      this.compareSource.next(response);
    }, error => {
      console.log(error);
    });
  }
  // tslint:disable-next-line: typedef
  addItemToCompare(item: IProduct, stock = 1){
    const itemToAdd: ICompareItem = this.mapProductItemToCompare(item, stock);
    const compare = this.createCompare();
    compare.items = this.addOrUpdateItemInCompare(compare.items, itemToAdd, stock);
    this.setCompare(compare);
  }

  private createCompare(): ICompare {
    const compare = new Compare();
    localStorage.setItem('compare_id', compare.id);
    return compare;
  }

  private addOrUpdateItemInCompare(items: ICompareItem[], itemToAdd: ICompareItem, quantity: number): ICompareItem[] {
    console.log(items);
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1){
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);

    }
    else{
      items[index].quantity += quantity;
    }

    return items;
  }

  private mapProductItemToCompare(item: IProduct, quantity: number): ICompareItem {
    return{
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      brand: item.productBrand,
      type: item.productType,
      colour: item.colour,
      stock: item.stock,
      dimensions: item.dimensions,
      material: item.material,
      quantity,
    };
  }
}
