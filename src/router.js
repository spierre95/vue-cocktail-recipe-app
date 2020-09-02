// externla packages
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//pages
import TheSearchPage from './pages/TheSearchPage';

export default new Router({
  mode: 'history',
  routes: [
      {
        path: '/',
        name: 'TheSearchPage',
        component: TheSearchPage,
        alias: [
          '/'
        ],
      },
    // TODO: 
    //   {
    //     path: '/cocktail/:id',
    //     name: 'TheCocktailDetailsPage',
    //     component: TheCocktailDetailsPage
    //   }
    ] 
})