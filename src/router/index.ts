import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import FavouritesView from '../views/FavouritesView.vue'
import PageLayout from '../components/PageLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PageLayout,
      children: [
        {
          path: '',
          name: 'list',
          component: ListView,
        },
        {
          path: 'favourites',
          name: 'favourites',
          component: FavouritesView,
        },
      ],
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('../views/DetailsView.vue'),
    },
  ],
})

export default router
