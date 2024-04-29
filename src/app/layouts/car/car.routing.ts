import { Routes } from "@angular/router";
import { PortfolioComponent } from "src/app/pages/portfolio/portfolio.component";


export const CarRouting:Routes =[

    {
        path:'',
        redirectTo:'portfolio',
        pathMatch:'full',
    },
    {
        path:'portfolio',component:PortfolioComponent
    }
]