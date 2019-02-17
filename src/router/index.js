import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter)

const router = new VueRouter({
  mode:'hash',
  routes
});
const paths = ['/search','/database']
router.beforeEach((to, from, next) => {
  const path = to.path;
  if(paths.indexOf(path)>=0){
    const userName = Vue.store.state.login.username;
    if(userName === 'admin'){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }

})

export default router


