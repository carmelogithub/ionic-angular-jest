import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full',
  },
  {
    path: 'productos',
    loadComponent: () => import('./pages/productos/productos.page').then( m => m.ProductosPage)
  },
  {
    path: 'edit-product-modal',
    loadComponent: () => import('./pages/edit-product-modal/edit-product-modal.page').then( m => m.EditProductModalPage)
  },
];
