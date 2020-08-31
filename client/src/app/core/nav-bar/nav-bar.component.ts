import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/account/account.service';
import { CompareService } from 'src/app/compare/compare.service';
import { ICompare } from 'src/app/shared/models/compare';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  basket$: Observable<IBasket>;
  currentUser$: Observable<IUser>;
  compare$: Observable<ICompare>;


  constructor(private basketService: BasketService, private accountService: AccountService, private compareService: CompareService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;
    this.compare$ = this.compareService.compare$;
  }

  // tslint:disable-next-line: typedef
  logout(){
    this.accountService.logout();
  }

}
