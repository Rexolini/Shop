import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '../../models/basket';
import { OrderItem } from '../../models/order';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true;
  @Input() items: IBasketItem[] | OrderItem[] = [];
  @Input() isOrder = false;

  constructor() { }

  ngOnInit() {
  }

  lessItemQuantity(item: IBasketItem) {
    this.decrement.emit(item);
  }

  addItemQuantity(item: IBasketItem) {
    this.increment.emit(item);
  }

  removeFavouriteItem(item: IBasketItem) {
    this.remove.emit(item);
  }

}
