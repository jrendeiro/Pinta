import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './welcome/welcome.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { VisitComponent } from './visit/visit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
   imports: [
      BrowserModule,
      FontAwesomeModule,
      HttpClientModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
         { path: '', component: ProductListComponent },
         { path: 'products/:productId', component: ProductDetailsComponent},
         { path: 'cart', component: CartComponent},
         { path: 'gallery', component: GalleryComponent},
         { path: 'visit', component: VisitComponent},
         { path: 'about', component: AboutComponent},
   ])
],
   declarations: [
      AppComponent,
      TopBarComponent,
      ProductListComponent,
      ProductAlertsComponent,
      ProductDetailsComponent,
      CartComponent,
      AboutComponent,
      VisitComponent,
      GalleryComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
