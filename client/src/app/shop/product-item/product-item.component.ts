import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { BasketService } from 'src/app/basket/basket.service';
import { CompareService } from 'src/app/compare/compare.service';
import { FavouriteService } from 'src/app/favourite/favourite.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: IProduct;

  constructor(private basketService: BasketService,
     private compareService: CompareService, private favouriteService: FavouriteService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  addItemToBasket(){
    this.basketService.addItemToBasket(this.product);
  }

  // tslint:disable-next-line: typedef
  addItemToCompare(){
    this.compareService.addItemToCompare(this.product);
  }

  addItemToFavourite(){
    this.favouriteService.addItemToFavourite(this.product)
  }


}
