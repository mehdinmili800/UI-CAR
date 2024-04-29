import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CarComponent } from './layouts/car/car.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'car',
    pathMatch:'full'
  },
  {
    path:'car',component:CarComponent,children:[
      {
        path:'',
        loadChildren:() => import('./layouts/car/car.module').then(m => m.CarModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
