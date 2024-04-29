import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from 'src/app/pages/portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { CarRouting } from './car.routing';



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CarRouting),
  ]
})
export class CarModule { }
