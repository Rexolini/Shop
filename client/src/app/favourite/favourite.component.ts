import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompare, ICompareItem, Compare } from '../shared/models/compare';
import { FavouriteService } from '../favourite/favourite.service';
import { BasketService } from '../basket/basket.service';
import { IProduct } from '../shared/models/product';
import { IFavouriteItem, IFavourite } from '../shared/models/favourite';
import { OrderItem } from '../shared/models/order';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  favourite$: Observable<IFavourite>;

  constructor(private  favouriteService: FavouriteService, private basketService: BasketService) { }
  @Input() product: IProduct;
  @Input() items: IFavouriteItem[] | OrderItem[] = [];
  
  ngOnInit(): void {
    this.favourite$ = this.favouriteService.favourite$;
  }

  // removeBasketItem(item: IBasketItem){
  //   this.compareService.(item);
  // }

 addItemQuantity(item: IFavouriteItem){
    this.favouriteService.addItemToFavourite(item);

  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product);
  }

}
