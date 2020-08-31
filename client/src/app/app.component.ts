import { Component, OnInit } from '@angular/core';
import {IProduct } from './shared/models/product';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';
import { CompareService } from './compare/compare.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ParaMilitaryShop';
  products: IProduct[];

  constructor(private basketService: BasketService, private accountService: AccountService, private compareService: CompareService){}

  ngOnInit(): void {
    this.loadCompare();
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadCurrentUser(){
    const token = localStorage.getItem('token');
    if(token){
      this.accountService.loadCurrentUser(token).subscribe(() =>{
        this.accountService.loadCurrentUser(token).subscribe(() =>{
          console.log('loaded user');
        }, error => {
          console.log(error);
        });
      })
    }
  }

  loadBasket(){
    const basketId = localStorage.getItem('basket_id');
    if(basketId){
      this.basketService.getBasket(basketId).subscribe(() =>{
        console.log('initialized basket');
      }, error => {
        console.log(error);
      });
    }
  }
  loadCompare(){
    const compareId = localStorage.getItem('compare_id');
    if(compareId){
      this.compareService.getCompare(compareId).subscribe(() =>{
        console.log('initialized compare');
      }, error => {
        console.log(error);
      });
    }
  }
}
