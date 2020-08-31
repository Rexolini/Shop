import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareComponent } from './compare.component';
import { SharedModule } from '../shared/shared.module';
import { CompareRoutingModule } from './compare-routing.module';



@NgModule({
  declarations: [CompareComponent],
  imports: [
    CommonModule,
    SharedModule,
    CompareRoutingModule
  ]
})
export class CompareModule { }
