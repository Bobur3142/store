import type { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue'
import HomePage from "pages/HomePage.vue";
import CatalogPage from "pages/CatalogPage.vue";
import ProductPage from "pages/ProductPage.vue";
import BasketPage from "pages/BasketPage.vue";
import ProfilePage from "pages/ProfilePage.vue";
import CheckoutPage from "pages/CheckoutPage.vue";
import OrdersPage from "pages/OrdersPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: HomePage },
      { path: '/catalog', name: 'catalog', component: CatalogPage },
      { path: '/product/:id', name: 'product', component: ProductPage },
      { path: '/basket', name: 'basket', component: BasketPage },
      { path: '/profile', name: 'profile', component: ProfilePage },
      { path: '/checkout', name: 'checkout', component: CheckoutPage },
      { path: '/profile/orders', name: 'orders', component: OrdersPage, meta: { titleKey: 'profile.myOrders' } },
    ],
  },
/*  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },*/
]

export default routes;
