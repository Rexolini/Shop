import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteComponent } from './favourite.component';

const routes: Routes = [
  {path: '', component: FavouriteComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FavouriteRoutingModule { }
