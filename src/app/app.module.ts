import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HighlightDirective } from './highlight.directive';
import { UserFilterComponent } from './user-filter/user-filter.component';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { CartService } from './cart.service';
import { OutletTest1Component } from './outlet-test1/outlet-test1.component';
import { OutletTest2Component } from './outlet-test2/outlet-test2.component';
import { AuthenticateGuard } from './authenticate.guard';
import { ChildRouteComponent } from './child-route/child-route.component';
import { NotificationService } from './notification.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart',
        component: CartComponent,
        canActivate :[AuthenticateGuard],
        children:[
          // {path:'',redirectTo:'child-route',pathMatch:'full'}, //load child route by default
          { path: 'child-route', component: ChildRouteComponent },
        ]
      
      },
      { path: 'shipping', component: ShippingComponent },
      { path: 'user-filter', component: UserFilterComponent,children:[
        { path: 'outlet-test1',outlet:'outlet1', component: OutletTest1Component },
        { path: 'outlet-test2',outlet:'outlet2', component: OutletTest2Component }
      ] },
      
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    HighlightDirective,
    UserFilterComponent,
    NameFilterPipe,
    OutletTest1Component,
    OutletTest2Component,
    ChildRouteComponent
  ],
  providers:[CartService,AuthenticateGuard,NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
