// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../pages/Homepage.vue'; // Sesuaikan dengan path komponen Anda
import Portfolio from '../pages/Porto.vue'; // Sesuaikan dengan path komponen Anda

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
  },
  {
    path: '/porto',
    name: 'Portofolio',
    component: Portfolio,
  },
  // Tambahkan route lain sesuai kebutuhan
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
