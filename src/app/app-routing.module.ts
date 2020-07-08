import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'catlog',
    loadChildren: () => import('./menubar/catlog/catlog.module').then( m => m.CatlogPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./menubar/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'myorders',
    loadChildren: () => import('./menubar/myorders/myorders.module').then( m => m.MyordersPageModule)
  },
  {
    path: 'passbook',
    loadChildren: () => import('./menubar/passbook/passbook.module').then( m => m.PassbookPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./menubar/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'acknowledgement',
    loadChildren: () => import('./others/acknowledgement/acknowledgement.module').then( m => m.AcknowledgementPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./others/filters/filters.module').then( m => m.FiltersPageModule)
  },
  {
    path: 'item-description',
    loadChildren: () => import('./others/item-description/item-description.module').then( m => m.ItemDescriptionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./others/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./others/cart/cart.module').then( m => m.CartPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
