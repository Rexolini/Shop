import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteComponent } from './favourite.component';
import { SharedModule } from '../shared/shared.module';
import { FavouriteRoutingModule } from './favourite-routing.module';



@NgModule({
  declarations: [FavouriteComponent],
  imports: [
    CommonModule,
    FavouriteRoutingModule,
    SharedModule
  ]
})
export class FavouriteModule { }
