import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompare, ICompareItem, Compare } from '../shared/models/compare';
import { CompareService } from '../compare/compare.service';
import { BasketService } from '../basket/basket.service';
import { IProduct } from '../shared/models/product';
import { OrderItem } from '../shared/models/order';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  compare$: Observable<ICompare>;
  
  @Input() items: ICompareItem[] | OrderItem[] = [];

  constructor(private  compareService: CompareService, private basketService: BasketService) { }
  @Input() product: IProduct;
  
  ngOnInit(): void {
    this.compare$ = this.compareService.compare$;
  }

   removeCompareItem(item: ICompareItem){
    //  this.compareService.removeItemFromCompare(item);
   }

 addItemQuantity(item: ICompareItem){
    this.compareService.addItemToCompare(item);

  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product);
  }
}
