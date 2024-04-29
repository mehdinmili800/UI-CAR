import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './layouts/car/car.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
    declarations: [
        AppComponent,
        CarComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule
    ]
})
export class AppModule { }
